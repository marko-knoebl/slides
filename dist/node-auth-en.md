# Authentication with node.js

## Topics

- logins, passwords and hashes
- public key cryptography
- sessions and tokens
- authorization

# Logins, passwords and hashes

## Logins, passwords and hashes

Facebook doesn't know your Facebook password!

## Logins, passwords and hashes

A website should never directly store a user's password

Instead: store a _hashed_ and _salted_ version of the password

## Logins, passwords and hashes

plain data:

```
name    | password
--------+--------------------
Alice   | 123456
Bob     | 123456
Charlie | abc123
Dave    | correcthorsebattery
```

## Logins, passwords and hashes

data with hashed passwords:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
Dave    | 3c077829151f03a4101bf36510d551b1
```

## Logins, passwords and hashes

data with hashed and salted passwords:

```
name    | salt     | hash
--------+----------+---------------------------------
Alice   | BzrYZGvv | c17dff0de6bbdfd0c8e7c2f35f2f74b0
Bob     | w6hxMeFz | 107b7047ae12bd19ca64f34b49fa1c98
Charlie | uOqA9bpX | c087747abdda0dc67ae9f31871692453
Dave    | nf7ExQnd | cd6bc62d87ad35d6ea4cbe83e89536f7
```

For Alice, the salt ("BzrYZGvv") and the hash of "123456-BzrYZGvv" are stored

## Algorithms

sorted from _most secure_ to _not secure_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5

MD5 is _not secure_ but is used in these examples because of its simplicity

## Password hashes

A hash is a derived value that can be stored instead of a password

example MD5 hashes (not secure) in hex notation :

- `123456` → `e10adc3949ba59abbe56e057f20f883e`
- `abc123` → `e99a18c428cb38d5f260853678922e03`

## Password hashes

user registration:

user sends password (e.g. `123456`), server saves the password hash (e.g. `e10adc3949ba59abbe56e057f20f883e`)

user login:

user sends password, server computes its hash and compares it to the saved hash

## Salts

Salted hashes are hashes of passwords with some additional random data

If passwords are hashed unsalted it would be easy to recognize hashes of common or simple passwords

## Example process

based on MD5 (not secure):

Account creation:

- account creation requested: username `alice`, password `123456`
- salted password string with random suffix: `123456-BzrYZGvv`
- hashed version of the string: `c17dff0de6bbdfd0c8e7c2f35f2f74b0`
- new database record with three fields:
  - `alice`
  - `BzrYZGvv`
  - `c17dff0de6bbdfd0c8e7c2f35f2f74b0`

## Example process

based on MD5 (not secure):

Login attempt (unsuccessful):

- login requested: username `alice`, password `111111`
- reading salt for user `alice` from the database: `BzrYZGvv`
- salted password string: `111111-BzrYZGvv`
- hashed version of this string: `c42f4b80513e7aee0ff1c5b7ebe339e0`
- compare to the hash as stored in the database (`c17dff0de6bbdfd0c8e7c2f35f2f74b0`)
- hashes don't match - login denied

# Logins, passwords and hashes with node.js

## Logins, passwords and hashes with node.js

node packages for hashing algorithms:

- via Argon2:
  - `argon2` (fast native implementation)
  - `argon2-wasm-pro` (compiled to WebAssembly)
- via scrypt:
  - `scrypt` (fast native implementation)
  - `scrypt-js` (pure JavaScript)

## Example

Implementation with `argon2-wasm-pro` and `mingodb` (pure JavaScript)

Packages for real use cases: `argon2` and `mongodb`

## Imports and setup

```js
const express = require('express');
const argon2 = require('argon2-wasm-pro');
const crypto = require('crypto');
const mingodb = require('@karuga/mingodb');

const db = mingodb('data.json'); // simple db

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.end(
    'welcome to the auth service\n\n' +
      'resources:\n/register\n/login'
  );
});
```

## Registration (express)

```js
app.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = db.users.findOne({ username: username });
  if (user !== undefined) {
    return res.json({
      status: 'error',
      message: 'user exists',
    });
  }
  const hash = await argon2.hash({
    pass: password,
    salt: crypto.randomBytes(16),
  });
  const data = { username: username, hash: hash.encoded };
  db.users.insertOne(data);
  res.json({ status: 'success' });
});
```

## Registration (express)

using the `/register` endpoint from the browser console:

```js
let res = await fetch('/register', {
  method: 'post',
  body: JSON.stringify({
    username: 'alice',
    password: 'ecila',
  }),
  headers: { 'Content-Type': 'application/json' },
});
let data = await res.json();
console.log(data);
```

## Login (express)

```js
app.post('/login', async (req, res) => {
  const verified = await verifyCredentials(
    req.body.username,
    req.body.password
  );
  if (!verified) {
    return res.json({ status: 'error' });
  }
  res.json({ status: 'success' });
});
```

## Login (express)

```js
const verifyCredentials = async (username, password) => {
  const user = db.users.findOne({ username: username });
  if (user === undefined) {
    return false; // user does not exist
  }
  try {
    await argon2.verify({
      pass: password,
      encoded: user.hash,
    });
    return true;
  } catch {
    return false; // wrong password
  }
};
```

## Login (express)

using the `/login` endpoint from the browser console:

```js
let res = await fetch('/login', {
  method: 'post',
  body: JSON.stringify({
    username: 'alice',
    password: 'ecila',
  }),
  headers: { 'Content-Type': 'application/json' },
});
let data = await res.json();
console.log(data);
```

# Public key cryptography

## Public key cryptography

use cases:

- digitally signing data
- sending encrypted data

## Public key cryptography

Alice has a secret private key and publishes an associated public key

Alice can "sign" some information with her private key - recipients of that information can verify that it is from Alice by using Alice's public key

Anyone can encrypt information using the public key and send it to Alice - only Alice can decrypt it with her private key, no one else can read it

## Key pairs

common cryptographic algorithm: RSA

Keys are often stored in `.pem` format

## Key pairs

`alice_private.pem`:

```txt
-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAMUKUlOcPJ4E0T1/9qirGZ+1udvYF9Bqvrc2zuoplenl8S0bdXGG
vm1SlCUX6UMKC/YkB77BjFaRIvhceCrTriUCAwEAAQJBAIn2KySNrUe6+cKE2XDJ
tDxGImdSy4HLa9OelYwRJ/1HHclYgACwzigWT6U+Xaej95lzKrWV+Gwlw/q10dWA
ZrUCIQD4xrKnJtGgU/HI7piVGNvYl7jP3zQJMMagq+iYKSi0/wIhAMrDCkwEcSld
E2HVyWUln+XTNwEVg484QZiPvE2aRyjbAiB5YjH/XvB/gxYBTXHDpfp3ByiUvLqe
FV+FO/vkaojDLwIgBpVusCk0w3MSPgsDDxW5q2zATHi2XOAmwR1pr9tilCECICRO
Lj9zPl9v6NhpmAXFPffzH7SJ5eIoF6bxu0j8l3GL
-----END RSA PRIVATE KEY-----
```

`alice_public.pem`:

```txt
-----BEGIN RSA PUBLIC KEY-----
MEgCQQDFClJTnDyeBNE9f/aoqxmftbnb2BfQar63Ns7qKZXp5fEtG3Vxhr5tUpQl
F+lDCgv2JAe+wYxWkSL4XHgq064lAgMBAAE=
-----END RSA PUBLIC KEY-----
```

## Generating a key pair

generating a pair of RSA keys in the browser:

<https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/>

- key size: choose any (larger keys are more secure but slower)
- format scheme: PKCS #1

# Public key cryptography with node.js

## Generating an RSA key pair via crypto

```js
const crypto = require('crypto');

let { privateKey, publicKey } = crypto.generateKeyPairSync(
  'rsa',
  {
    modulusLength: 512,
  }
);
```

## Exporting a key

```js
let privateKeyPemString = privateKey.export({
  type: 'pkcs1',
  format: 'pem',
});

fs.writeFileSync('alice_private.pem', privateKeyPemString);
```

## Importing a key

```js
let privateKeyPemString = fs.readFileSync(
  'alice_private.pem',
  { encoding: 'ascii' }
);

let privateKey = crypto.createPrivateKey(
  privateKeyPemString
);
```

## Signing data with RSA

```js
let message =
  'the holder of this token is logged in as user1';

let signature = crypto.sign(
  'SHA256',
  Buffer.from(message, 'utf-8'),
  privateKey
);
```

## Verifying a signature with RSA

verifying a genuine message:

```js
let message =
  'the holder of this token is logged in as user1';

let verifiedA = crypto.verify(
  'SHA256',
  Buffer.from(message, 'utf-8'),
  publicKey,
  signature
);
// true
```

## Verifying a signature with RSA

verification of fake message fails:

```js
let fakeMessage =
  'the holder of this token is logged in as admin';

let verifiedB = crypto.verify(
  'SHA256',
  Buffer.from(fakeMessage, 'utf-8'),
  publicKey,
  signature
);
// false
```

## Encrypting data via RSA

encrypting data to send to Alice:

```js
let message = 'Hello, Alice!';

let encryptedMessage = crypto.publicEncrypt(
  publicKey,
  Buffer.from(message, 'utf-8')
);
```

## Decrypting data via RSA

decrypting of data by Alice:

```js
let decryptedMessage = crypto
  .privateDecrypt(privateKey, encryptedMessage)
  .toString('utf-8');
```

# Sessions and tokens

## Sessions and tokens

Common procedure:

If a user logged in successfully they receive a secret token that identifies them for some time (e.g. for 30 minutes or for 1 day)

## Sessions and tokens

contents of tokens:

approach A: token contains a unique session id; associated session data is saved on a server

approach B: token contains all session data, signed by an authorization service

## JSON web tokens

JSON web tokens (JWT) are a means for a user to identify themselves to a web site

## JSON web tokens

example contents of a JWT (3 parts: algorithm, data, signature):

```json
{ "alg": "RS256" }
```

```json
{
  "iss": "google.com",
  "sub": "alice@gmail.com",
  "aud": "medium.com",
  "exp": 1577836800
}
```

```txt
eyJzdWIiOiJhbGljZSIsImlzcyI6ImF1dGguZ...
```

## JSON web tokens

translation:

```txt
This is a JSON web token signed with RS256
(RSA Signature with SHA-256)

We (google.com) confirm that the holder of this token is
logged in as "alice@gmail.com" with our service.
This confirmation is intended for use on medium.com.
This confirmation is valid until 2020-01-01 00:00.

signature: ...
```

# Sessions and tokens in node.js

## JWT-based authentication service

scenario:

- authentication service: `auth.foo-systems.com`
- desired resource: `forum.foo-systems.com`

## JWT-based authentication service

extension of the code from the previous section:

```js
const fs = require('fs');
const jsonwebtoken = require('jsonwebtoken');
```

```js
const publicKey = fs.readFileSync('./public.pem');
const privateKey = fs.readFileSync('./private.pem');
```

## JWT-based authentication service

updated start page handler:

```js
app.get('/', (req, res) => {
  res.end(
    'welcome to the auth service\n\n' +
      'resources:\n/register\n/login\n/public-key'
  );
});
```

make public key available:

```js
app.get('/public-key', (req, res) => {
  res.end(publicKey);
});
```

## JWT-based authentication service

```js
app.post('/login', async (req, res) => {
  const verified = await verifyCredentials(
    req.body.username,
    req.body.password
  );
  if (!verified) {
    return res.json({ status: 'error' });
  }
  const token = createToken(req.body.username);
  res.json({ status: 'success', token: token });
});
```

## JWT-based authentication service

```js
const createToken = username => {
  return jsonwebtoken.sign(
    {
      sub: username,
      iss: 'auth.foo-systems.com',
      aud: 'forum.foo-systems.com',
      // expires in 1 h
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    privateKey,
    { algorithm: 'RS256' }
  );
};
```

## JWT-based authentication service

using the `/login` endpoint from the browser console:

```js
let res = await fetch('/login', {
  method: 'post',
  body: JSON.stringify({
    username: 'alice',
    password: 'ecila',
  }),
  headers: { 'Content-Type': 'application/json' },
});
let data = await res.json();
console.log(data);
```

## Online playground

online version:

- code: <https://glitch.com/edit/#!/karuga-auth-service>
- app: <https://karuga-auth-service.glitch.me/>

# Authorization

## HTTP bearer token

A JWT can be sent in the HTTP authorization header as a so-called bearer token to verify the user's identity:

```http
Authorization: Bearer eyJhbGciOiJSUzI...
```

# Authorization in node.js

## Authorization in node.js

Middleware that restricts route access to clients that are logged in with the auth service:

```js
const restrictToLoggedin = expressJwt({
  secret: publicKey,
});

app.get('/public', (req, res) => {
  res.json(publicData);
});
app.get('/private', restrictToLoggedin, (req, res) => {
  if (req.user) {
    res.json(privateData);
  } else {
    res.json({ status: 'auth error' });
  }
});
```

## Accessing resources

complete code:

```js
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');

const publicKey = fs.readFileSync('./public.pem', {
  encoding: 'utf-8',
});

const secretData = ['foo', 'bar', 'baz'];

const app = express();

app.use(express.json());
app.use(cors());

const restrictToLoggedin = expressJwt({
  secret: publicKey,
});

app.get('/', (request, response) => {
  response.json({ page: 'public start page' });
});
app.get('/items', restrictToLoggedin, (req, res) => {
  res.json(secretData);
});
```

[glitch project](https://glitch.com/~karuga-secret)

# Authentication and authorization services

## Authentication and authorization services

authorization service: provides a token that enables the _holder_ to request some actions on behalf of the token's _subject_

example authorization token for GitHub:

```
authorization token for GitHub
the holder of this token may:

- create new repositories for user "marko-knoebl"
- delete repositories belonging to user "marko-knoebl"
```

## Technologies

- _openID_: authentication protocol
- _OAuth_: authorization protocol
- _openID connect_: authentication protocol based on _OAuth_

## OpenID connect

[standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) in openID connect:

- _sub_: Subject - Identifier for the End-User at the Issuer.
- _name_, _given_name_, _family_name_, _nickname_, ...
- _email_, _email_verified_
- _phone_number_, _phone_number_verified_
- _locale_
- ...

# Resources

## Resources

- [JSON Web Token (JWT) — The right way of implementing, with Node.js, Siddhartha Chowdhury](https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e)

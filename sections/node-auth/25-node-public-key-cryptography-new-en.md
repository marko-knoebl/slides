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

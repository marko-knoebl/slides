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

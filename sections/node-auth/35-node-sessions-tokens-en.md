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

- code: https://glitch.com/edit/#!/karuga-auth-service
- app: https://karuga-auth-service.glitch.me/

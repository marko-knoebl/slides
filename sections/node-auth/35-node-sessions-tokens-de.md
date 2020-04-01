# Sessions und Tokens in node.js

## JWT-basiertes Authentifizierungsservice

Szenario:

- Authentifizierungsservice: `auth.foo-systems.com`
- Gewünschte Resource: `forum.foo-systems.com`

## JWT-basiertes Authentifizierungsservice

Erweiterung des Codes aus dem letzen Abschnitt:

```js
const fs = require('fs');
const jsonwebtoken = require('jsonwebtoken');
```

```js
const publicKey = fs.readFileSync('./public.pem');
const privateKey = fs.readFileSync('./private.pem');
```

## JWT-basiertes Authentifizierungsservice

Geänderter Handler für die Startseite:

```js
app.get('/', (req, res) => {
  res.end(
    'welcome to the auth service\n\n' +
      'resources:\n/register\n/login\n/public-key'
  );
});
```

Öffentlichen Schlüssel zugänglich machen:

```js
app.get('/public-key', (req, res) => {
  res.end(publicKey);
});
```

## JWT-basiertes Authentifizierungsservice

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

## JWT-basiertes Authentifizierungsservice

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

## JWT-basiertes Authentifizierungsservice

Verwendung des `/login`-Endpunkts aus der Browserkonsole:

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

## Online Playground

Online-Version:

- code: https://glitch.com/edit/#!/karuga-auth-service
- app: https://karuga-auth-service.glitch.me/

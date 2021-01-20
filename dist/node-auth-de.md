# Authentifizierung mit node.js

## Themen

- Logins, Passwörter und Hashes
- Public-Key-Kryptographie
- Sessions und Tokens
- Authorisierung

# Logins, Passwörter und Hashes

## Logins, Passwörter und Hashes

Facebook kennt dein Facebook-Passwort _nicht_!

## Logins, Passwörter und Hashes

Eine Website sollte nie direkt Passwörter abspeichern

Stattdessen: Eine Variante des Passworts speichern, die _hashed_ und _salted_ ist

## Logins, Passwörter und Hashes

Daten in Klartext:

```
name    | password
--------+--------------------
Alice   | 123456
Bob     | 123456
Charlie | abc123
Dave    | correcthorsebattery
```

## Logins, Passwörter und Hashes

Daten mit Passwort-Hashes:

```
name    | password hash
--------+---------------------------------
Alice   | e10adc3949ba59abbe56e057f20f883e
Bob     | e10adc3949ba59abbe56e057f20f883e
Charlie | e99a18c428cb38d5f260853678922e03
Dave    | 3c077829151f03a4101bf36510d551b1
```

## Logins, Passwörter und Hashes

Daten mit Hashes und Salts

```
name    | salt     | hash
--------+----------+---------------------------------
Alice   | BzrYZGvv | c17dff0de6bbdfd0c8e7c2f35f2f74b0
Bob     | w6hxMeFz | 107b7047ae12bd19ca64f34b49fa1c98
Charlie | uOqA9bpX | c087747abdda0dc67ae9f31871692453
Dave    | nf7ExQnd | cd6bc62d87ad35d6ea4cbe83e89536f7
```

Für Alice werden der _Salt_ ("BzrYZGvv") und der Hash von "123456-BzrYZGvv" gespeichert

## Algorithmen

Sortiert von _am sichersten_ zu _nicht sicher_:

- Argon2
- scrypt
- bcrypt
- PBKDF2
- MD5

MD5 ist _nicht sicher_, wird aber der Einfachheit halber in diesen Beispielen verwendet

## Passwort-Hashes

Hash = Abgeleiteter Wert, der anstatt eines Passworts gespeichert werden kann

Beispiele für MD5-Hashes (unsicher) in Hex-Notation:

- `123456` → `e10adc3949ba59abbe56e057f20f883e`
- `abc123` → `e99a18c428cb38d5f260853678922e03`

## Passwort-Hashes

Registrierung von Benutzern:

Benutzer sendet Passwort (z.B. `123456`), Server speichert den Passwort-Hash (z.B. `e10adc3949ba59abbe56e057f20f883e`)

Login von Benutzern:

Benutzer sendet Passwort, Server berechnet dessen Hash und vergleicht diesen zum gespeicherten Passwort-Hash

## Salts

Zusätzliche Sicherheit: Passwörter werden nicht direkt gehashed, sondern zuvor mit zusätzlichen Zufallsdaten ergänzt

Würden Passwörter ohne Salt gehashed werden, wäre es z.B. einfach, Hashes von viel verwendeten oder einfachen Passwörtern zu erkennen

## Beispielhafter Prozess

basierend auf MD5 (unsicher):

Account-Erstellung:

- Registrierungs-Request mit Daten: Benutzername `alice`, Passwort `123456`
- Passwort mit zufälligem Suffix (Salt): `123456-BzrYZGvv`
- Hash dieses Strings: `c17dff0de6bbdfd0c8e7c2f35f2f74b0`
- Neuer Datenbankeintrag mit drei Feldern:
  - `alice`
  - `BzrYZGvv`
  - `c17dff0de6bbdfd0c8e7c2f35f2f74b0`

## Beispielhafter Prozess

basierend auf MD5 (unsicher):

Login-Versuch (nicht erfolgreich):

- Login-Request: Benutzername `alice`, Passwort `111111`
- Lesen des Salts von `alice` aus der Datenbank: `BzrYZGvv`
- Passwort-String mit Salt: `111111-BzrYZGvv`
- Hash dieses Strings: `c42f4b80513e7aee0ff1c5b7ebe339e0`
- Vergleich mit dem gespeicherten Hash (`c17dff0de6bbdfd0c8e7c2f35f2f74b0`)
- Hashes passen nicht - Loginversuch abgelehnt

# Logins, Passwörter und Hashes mit node.js

## Logins, Passwörter und Hashes mit node.js

Node-Pakete für Hashing-Algorithmen:

- via Argon2:
  - `argon2` (schnelle, native Implementierung)
  - `argon2-wasm-pro` (kompiliert zu WebAssembly)
- via scrypt:
  - `scrypt` (schnelle, native Implementierung)
  - `scrypt-js` (reines JavaScript)

## Beispiel

Implementierung mit `argon2-wasm-pro` und `mingodb` (reines JavaScript)

Pakete für echte Zwecke: `argon2` und `mongodb`

## Imports und Setup

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

## Registrierung (express)

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

## Registrierung (express)

Verwendung von `/register` aus der Browserkonsole:

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

Verwendung von `/login` aus der Browserkonsole:

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

# Public-Key-Kryptographie

## Public-Key-Kryptographie

Anwendungsfälle:

- digitales Signieren von Daten
- Versenden von Verschlüsselten Daten

## Public-Key-Kryptographie

Alice verfügt über einen geheimen privaten Schlüssel und veröffentlicht einen zugehörigen öffentlichen Schlüssel

Alice kann Daten mit ihrem privaten Schlüssel "signieren" - Empfänger dieser Daten können mittels des öffentlichen Schlüssels sicherstellen, dass die Daten von Alice stammen

Andere können Daten mittels Alices öffentlichem Schlüssel verschlüsseln und an Alice senden - nur Alice kann sie mittels des privaten Schlüssel entschlüsseln

## Schlüsselpaare

Weit verbreiteter kryptographischer Algorithmus: RSA

Schlüssel werden oft im `.pem`-Format gespeichert

## Schlüsselpaare

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

## Schlüsselpaare

Erstellen eines RSA-Schlüsselpaares im Browser:

<https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/>

- Key Size: beliebig (längere Schlüssel sind sicherer, aber langsamer)
- Format Scheme: PKCS #1

# Public-Key-Kryptographie mit node.js

## Erstellen eines RSA-Schlüsselpaares mittels crypto

```js
const crypto = require('crypto');

let { privateKey, publicKey } = crypto.generateKeyPairSync(
  'rsa',
  {
    modulusLength: 512,
  }
);
```

## Exportieren eines Schlüssels

```js
let privateKeyPemString = privateKey.export({
  type: 'pkcs1',
  format: 'pem',
});

fs.writeFileSync('alice_private.pem', privateKeyPemString);
```

## Importieren eines Schlüssels

```js
let privateKeyPemString = fs.readFileSync(
  'alice_private.pem',
  { encoding: 'ascii' }
);

let privateKey = crypto.createPrivateKey(
  privateKeyPemString
);
```

## Signieren von Daten mittels RSA

```js
let message =
  'the holder of this token is logged in as user1';

let signature = crypto.sign(
  'SHA256',
  Buffer.from(message, 'utf-8'),
  privateKey
);
```

## Verifizieren einer Signatur mit RSA

Verifizieren einer authentischen Nachricht:

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

## Verifizieren einer Signatur mit RSA

Verifizierungsversuch einer gefälschten Nachricht schlägt fehl:

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

## Verschlüsselung von Daten via RSA

Daten Verschlüsseln, um sie an Alice zu senden:

```js
let message = 'Hello, Alice!';

let encryptedMessage = crypto.publicEncrypt(
  publicKey,
  Buffer.from(message, 'utf-8')
);
```

## Entschlüsseln von Daten via RSA

Entschlüsselung durch Alice:

```js
let decryptedMessage = crypto
  .privateDecrypt(privateKey, encryptedMessage)
  .toString('utf-8');
```

# Sessions und Tokens

## Sessions und Tokens

Üblicher Prozess:

Wenn ein Benutzer sich erfolgreich eingeloggt hat erhält dieser ein geheimes Token, dass ihn für eine gewisse Zeit identifiziert (z.B. für 30 Minuten oder für 1 Tag)

## Sessions und Tokens

Inhalte von Tokens:

Variante A: Token enthält eine eindeutige Session-ID; zugehörige Session-Daten werden auf dem Server gespeichert

Variante B: Token enthält alle Session-Daten, signiert durch ein Authorisierungs-Service

## JSON Web Tokens

JSON Web Tokens (JWT) ermöglichen es einem Benutzer, sich gegenüber einer Website zu identifizieren

## JSON Web Tokens

Beispiel für Inhalte eines JWTs (3 Teile: Algorithmus, Daten, Signatur):

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

## JSON Web Tokens

Übersetzung:

```txt
Dies ist eine JSON Web Token, signiert mit RS256
(RSA Signatur mit SHA-256)

Wir (google.com) bestätigen, dass der Besitzer dieses
Tokens als "alice@gmail.com" bei uns eingeloggt ist.
Diese Bestätigung ist für Nutzung auf medium.com gedacht.
Diese Bestätigung ist gültig bis 2020-01-01 00:00.

Signatur: ...
```

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

- code: <https://glitch.com/edit/#!/karuga-auth-service>
- app: <https://karuga-auth-service.glitch.me/>

# Authorisierung

## HTTP bearer token

Ein JWT can im HTTP-Authrization-Header als sogenanntes Bearer Token übermittelt werden, um die Identität des Benutzers zu bestätigen:

```http
Authorization: Bearer eyJhbGciOiJSUzI...
```

# Authorisierung in node.js

## Authorisierung in node.js

Middleware, die Zugriff zu bestimmten Ressourcen auf Clients beschränkt, die beim Authentifizierungsservice eingeloggt sind:

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

## Authorisierung in node.js

kompletter Code:

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

[glitch Projekt](https://glitch.com/~karuga-secret)

# Authentifizierungs- und Authorisierungs- Services

## Authentifizierungs- und Authorisierungs- Services

Authorisierungs-Service: Kann Token zur verfügung stellen, welche den "Träger" des Tokens dazu berechtigen, Aktionen für das "Subjekt" des Tokens zu beantragen

Beispiel für ein Authorisierungs-Token für GitHub:

```
Authorisierungs-Token für GitHub
Der "Träger" dieses Tokens kann:

- neue Repositories für den User "marko-knoebl" erstellen
- Repositories des Users "marko-knoebl" löschen
```

## Technologien

- _openID_: Authentifizierungs-Protokoll
- _OAuth_: Authorisierungs-Protokoll
- _openID connect_: Authentifizierungs-Protokoll, das auf _OAuth_ basiert

## OpenID connect

[standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) in openID connect:

- _sub_: Subject - eindeutiger Identifier des End-Nutzers beim Aussteller
- _name_, _given_name_, _family_name_, _nickname_, ...
- _email_, _email_verified_
- _phone_number_, _phone_number_verified_
- _locale_
- ...

# Ressourcen

## Ressourcen

- [JSON Web Token (JWT) — The right way of implementing, with Node.js, Siddhartha Chowdhury](https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e)

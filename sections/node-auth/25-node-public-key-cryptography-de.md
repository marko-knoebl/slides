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

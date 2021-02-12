# Zusammenfassung: grundlegendes Setup

## Zusammenfassung: grundlegendes Setup

1. erstelle _package.json_
2. installiere Pakete
3. erstelle _.gitignore_
4. lade Konfiguration aus _.env_
5. erstelle App mit Rendering Engine und Routen
6. erstelle Views

## Erstelle package.json

```json
{
  "type": "module",
  "eslintConfig": {
    "sourceType": "module"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

## Installiere Pakete

installiere _express_, _dotenv_ und eine Template Engine

Template Engines:

- _pug_
- _express-handlebars_
- _ejs_
- _express-react-views_, _react_, _react-dom_

## Erstelle .gitignore-Datei

Beispiel für _.gitignore_:

```txt
.env
node_modules
```

## Lade Konfiguration aus .env

Beispiel für _.env_:

```txt
PORT=3000
```

Laden der Konfiguration:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
```

## Erstelle App mit Rendering Engine und Routen

```js
import express from 'express';
import expressReactViews from 'express-react-views';
const app = express();

app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  res.render('index', { name: 'world' });
});

app.listen(PORT);
```

## Erstelle Views

```js
// views/index.jsx
import React from 'react';

export default ({ name }) => {
  return (
    <html>
      <head>
        <title>Hello, {name}!</title>
      </head>
      <body>
        <h1>Hello, {name}!</h1>
      </body>
    </html>
  );
};
```

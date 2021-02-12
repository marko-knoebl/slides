# Summary: basic setup

## Summary: basic setup

1. create _package.json_
2. install packages
3. add _.gitignore_ file
4. load configuration from _.env_ file
5. configure rendering engine and routes
6. add views

## Create package.json

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

## Install packages

install _express_, _dotenv_ and a template engine

template engines:

- _pug_
- _express-handlebars_
- _ejs_
- _express-react-views_, _react_, _react-dom_

## Add .gitignore file

example _.gitignore_ file:

```txt
.env
node_modules
```

## Load configuration from .env file

.env file example:

```txt
PORT=3000
```

loading configuration:

```js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
```

## Create app with rendering engine and routes

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

## Add views

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

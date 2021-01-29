# Hosting on glitch.com

## Hosting on glitch.com

on <https://glitch.com>, select "get started" - "hello express"

```js
// server.js
const express = require('express');

const app = express();

app.use((req, res) => {
  // note: we should actually return a complete HTML file
  res.send('<h1>Hello World!</h1>\n');
});

app.listen(process.env.PORT);
```

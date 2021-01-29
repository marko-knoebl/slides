# Routing and redirects

## Routing and redirects

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!\n');
});
app.get('/about', (req, res) => {
  res.send('About page\n');
});
app.get('/articles/:id', (req, res) => {
  const articleId = req.params.id;
  // ...
});
app.get('/home', (req, res) => {
  res.redirect('/');
});

app.listen(3000);
```

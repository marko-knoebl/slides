# Rendering HTML

## Rendering HTML

express can generate HTML with _dynamic_ content - the HTML will be generated (rendered) for every request

## Rendering HTML

manually (can be open to attacks):

```js
app.get('/', (req, res) => {
  const name = 'world';
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Hello ${name}</title></head>
      <body>Hello ${name}</body>
    </html>
  `);
});
```

## Rendering HTML

via a template engine:

- ejs: [website](https://ejs.co/), [express integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars: [website](https://handlebarsjs.com/), [express integration](https://github.com/pillarjs/hbs)
- pug: [website](https://pugjs.org), [express integration](https://expressjs.com/en/guide/using-template-engines.html)

## Rendering HTML

general procedure:

```js
import express from 'express';
import myengine from 'myengine';

const app = express();

// specify the rendering engine
app.set('view engine', 'myengine');

app.get('/', (req, res) => {
  const name = 'world';
  // renders 'views/index.myengine'
  res.render('index', { name: name });
});
```

## Rendering HTML

example with handlebars:

```bash
npm install hbs
```

```js
app.set('view engine', 'hbs');

// ...

app.get('/', (req, res) => {
  const name = 'world';
  // renders the file 'views/index.hbs'
  res.render('index', { name: name });
});
```

(replace _hbs_ with _ejs_ / _pug_ for other template engines)

## Exercises

exercises:

- create a website with different pages (_home_, _about_, _newsletter_, ...)
- create a website that displays information from a public API (e.g. https://pokeapi.co/)
- create a website that displays information from a database on your computer

## Exercises

Pokeapi part 1:

```js
app.get('/pokemon/:id', async (req, res) => {
  const id = req.params.id;
  const dataRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const data = await dataRes.json();
  res.render('pokemon', {
    id: id,
    name: data.name,
    imgSrc: data.sprites.front_default,
  });
});
app.get('/pokemon', (req, res) => {
  res.redirect('/pokemon/1');
});
```

## Exercise: Pokeapi

Pokeapi part 2:

_views/pokemon.hbs_:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>{{name}}</title>
  </head>
  <body>
    <h1>{{name}}</h1>
    <img src="{{imgSrc}}" />
  </body>
</html>
```

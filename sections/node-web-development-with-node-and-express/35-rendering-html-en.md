# Rendering HTML

## Rendering HTML

manually:

```js
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Hello world</title></head>
      <body>Hello world</body>
    </html>
  `);
});
```

## Rendering HTML

via a template engine:

- ejs: [website](https://ejs.co/), [express integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars (or mustache): [website](https://handlebarsjs.com/), [express integration](https://github.com/express-handlebars/express-handlebars)
- pug: [website](https://pugjs.org), [express integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [website](https://reactjs.org/), [express integration](https://github.com/reactjs/express-react-views)
- ... ([list of options](https://expressjs.com/en/resources/template-engines.html))

## Rendering HTML via EJS

```js
import express from 'express';
import ejs from 'ejs';

const app = express();

app.set('view engine', ejs);

app.get('/', (req, res) => {
  // renders 'views/home.ejs'
  res.render('home');
});

// ...
```

## Rendering HTML via express-handlebars

```js
import express from 'express';
import expressHandlebars from 'express-handlebars';

const app = express();

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  // renders 'views/home.handlebars'
  res.render('home');
});
```

## Rendering HTML via express-react-views

install npm packages: _express-react-views_, _react_, _react-dom_

```js
import express from 'express';
import expressReactViews from 'express-react-views';

const app = express();

app.engine('jsx', expressReactViews.createEngine());
app.set('view engine', 'jsx');

app.get('/', (req, res) => {
  // renders 'views/home.jsx' with one property
  res.render('home', { foo: 'bar' });
});
```

## Rendering HTML via express-react-views

_views/home.jsx_:

```jsx
import React from 'react';

const Home = () => {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <div>Home</div>
      </body>
    </html>
  );
};

export default Home;
```

## Exercises

exercises:

- create a website with different pages (_home_, _about_, _newsletter_, ...)
- create a website that displays information from a public API (e.g. https://pokeapi.co/)

## Exercise: Pokeapi

part 1:

```jsx
app.get('/:id', async (req, res) => {
  const id = req.params.id;
  const dataRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const data = await dataRes.json();
  await res.render('pokemon', { id: id, data: data });
});
app.get('/', (req, res) => {
  res.redirect('/1');
});
```

## Exercise: Pokeapi

part 2:

```jsx
// views/pokemon.jsx
import React from 'react';

const Pokemon = (props) => {
  const id = Number(props.id);
  const data = props.data;
  return (
    <div>
      <article>
        <h1>{data.species.name}</h1>
        <img src={data.sprites.front_default} />
      </article>
      <a href={`/${id - 1}`}>prev</a>
      <br />
      <a href={`/${id + 1}`}>next</a>
    </div>
  );
};

export default Pokemon;
```

# Rendering HTML

## Rendering HTML

manually (dangerous):

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
- handlebars (or mustache): [website](https://handlebarsjs.com/), [express integration](https://github.com/pillarjs/hbs)
- pug: [website](https://pugjs.org), [express integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [website](https://reactjs.org/), [express integration](https://github.com/reactjs/express-react-views)
- marko: [website](https://markojs.com/), [express integration](https://markojs.com/docs/express/)
- ... ([list of options](https://expressjs.com/en/resources/template-engines.html))

## Rendering HTML

general procedure:

```js
import express from 'express';
import myengine from 'myengine';

const app = express();

app.engine('myengine', myengine());
app.set('view engine', 'myengine');

app.get('/', (req, res) => {
  const name = 'world';
  // renders 'views/index.myengine'
  res.render('index', { name: name });
});
```

## Rendering HTML

registering various template engines:

```js
import ejs from 'ejs';
import expressHandlebars from 'express-handlebars';
import expressReactViews from 'express-react-views';

app.engine('ejs', ejs);
app.engine('handlebars', expressHandlebars());
app.engine('jsx', expressReactViews.createEngine());
```

## Rendering HTML via express-react-views

install npm packages: _express-react-views_, _react_, _react-dom_

## Rendering HTML via express-react-views

_views/index.jsx_:

```jsx
import React from 'react';

const Index = ({ name }) => {
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

export default Index;
```

## Exercises

exercises:

- create a website with different pages (_home_, _about_, _newsletter_, ...)
- create a website that displays information from a public API (e.g. https://pokeapi.co/)

## Exercises

Pokeapi part 1:

```js
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

Pokeapi part 2:

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

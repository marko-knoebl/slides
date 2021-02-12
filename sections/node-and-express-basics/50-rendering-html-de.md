# Rendern von HTML

## Rendern von HTML

manuell (gefährlich):

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

## Rendern von HTML

mit Hilfe einer Template Engine:

- ejs: [Website](https://ejs.co/), [express Integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars (oder mustache): [website](https://handlebarsjs.com/), [express Integration](https://github.com/express-handlebars/express-handlebars)
- pug: [Website](https://pugjs.org), [express Integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [Website](https://reactjs.org/), [express Integration](https://github.com/reactjs/express-react-views)
- marko: [Website](https://markojs.com/), [express Integration](https://markojs.com/docs/express/)
- ... ([Liste von Möglichkeiten](https://expressjs.com/en/resources/template-engines.html))

## Rendern von HTML

allgemeines Prozedere:

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

## Rendern von HTML

registrieren verschiedener Template Engines:

```js
import ejs from 'ejs';
import expressHandlebars from 'express-handlebars';
import expressReactViews from 'express-react-views';

app.engine('ejs', ejs);
app.engine('handlebars', expressHandlebars());
app.engine('jsx', expressReactViews.createEngine());
```

## Rendern von HTML via express-react-views

npm-Pakete: _express-react-views_, _react_, _react-dom_

## Rendern von HTML via express-react-views

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

## Übungen

Übungen:

- erstelle eine Website mit verschiedenen Seiten (_home_, _about_, _newsletter_, ...)
- erstelle eine Website, die Informationen von einem öffentlichen API anzeigt (z.B. https://pokeapi.co/)

## Übungen

Pokeapi Teil 1:

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

## Übungen

Pokeapi Teil 2:

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

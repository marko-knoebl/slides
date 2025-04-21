# Rendern von HTML

## Rendern von HTML

express kann HTML mit _dynamischen_ Inhalten generieren - das HTML wird für jeden Request neu generiert (gerendert)

## Rendern von HTML

manuell (kann angreifbar sein):

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

- ejs: [website](https://ejs.co/), [express integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars: [website](https://handlebarsjs.com/), [express integration](https://github.com/pillarjs/hbs)
- pug: [website](https://pugjs.org), [express integration](https://expressjs.com/en/guide/using-template-engines.html)

## Rendern von HTML

allgemeines Verfahren:

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

## Rendern von HTML

Beispiel mit handlebars:

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

(ersetze _hbs_ durch _ejs_ / _pug_ für andere Template-Enginges)

## Übungen

Übungen:

- erstelle eine Website mit verschiedenen Seiten (_home_, _about_, _newsletter_, ...)
- erstelle eine Website, die Informationen von einem öffentlichen API anzeigt (z.B. https://pokeapi.co/)
- erstelle eine Website, die Informationen aus einer lokalen Datenbank darstellt

## Übungen

Pokeapi Teil 1:

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

## Übungen

Pokeapi Teil 2:

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

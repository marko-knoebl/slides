# Rendern von HTML

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

- ejs: [Website](https://ejs.co/), [express Integration](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
- handlebars (oder mustache): [website](https://handlebarsjs.com/), [express Integration](https://github.com/express-handlebars/express-handlebars)
- pug: [Website](https://pugjs.org), [express Integration](https://expressjs.com/en/guide/using-template-engines.html)
- react: [Website](https://reactjs.org/), [express Integration](https://github.com/reactjs/express-react-views)
- marko: [Website](https://markojs.com/), [express Integration](https://markojs.com/docs/express/)
- ... ([Liste von Möglichkeiten](https://expressjs.com/en/resources/template-engines.html))

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

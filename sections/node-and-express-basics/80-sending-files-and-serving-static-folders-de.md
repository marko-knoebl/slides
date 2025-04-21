# Statische Dateien und Ordner

## Statische Dateien und Ordner

senden von nur einer statischen Datei:

```js
app.get('/favicon.ico', (req, res) => {
  res.sendFile('public/favicon.ico');
});
```

## Statische Dateien und Ordner

mit Middleware kann ein Ordner für statische Dateien angegeben werden:

Um für jeden Request nach statischen Inhalten zu suchen:

```js
app.use(express.static('public'));
```

Um statische Inhalte nur für Requests nach _/static_ zu durchsuchen:

```js
app.use('/static', express.static('public'));
```

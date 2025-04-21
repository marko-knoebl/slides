# Senden und Empfangen von JSON-Daten

## Senden und Empfangen von JSON-Daten

senden von JSON (manuell):

```js
res.setHeader({"Content-Type", "application/json"});
res.send(JSON.stringify(data));
```

mit dem `.json()`-Helper:

```js
res.json(data);
```

## Senden und Empfangen von JSON-Daten

Empfangen (parsen) eines JSON-Bodys via middleware:

```js
app.use('/api', express.json());
```

Daten sind dann verfügbar als `req.body`

# Responses Senden

## Responses Senden

Methoden von Response-Objekten:

- `.status()` - um den Statuscode zu setzen
- `.set()` - um Header zu setzen
- `.send()` - um Inhalte zu senden

## Responses Senden

explizites Beispiel:

```js
res.set({ 'Content-Type': 'text/html' });
res.status(200);
res.send('<!DOCTYPE html><html>...</html>');
```

## Responses Senden

standardmäßig wird der _Content-Type_ auf _text/html_ und der Status auf 200 gesetzt

kürzere Version:

```js
res.send('<!DOCTYPE html><html>...</html>');
```

## Responses Senden

weiteres Beispiel:

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## Responses Senden

Response-Objekte unterstützen _Method Chaining_:

```js
res
  .status(404)
  .set({ 'Content-Type': 'text/plain' })
  .send('Document not found.\n');
```

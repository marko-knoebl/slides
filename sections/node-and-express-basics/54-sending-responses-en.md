# Sending responses

## Sending responses

methods of response objects:

- `.status()` - for setting the status code
- `.set()` - for setting headers
- `.send()` - for sending content

## Sending responses

explicit example:

```js
res.set({ 'Content-Type': 'text/html' });
res.status(200);
res.send('<!DOCTYPE html><html>...</html>');
```

## Sending responses

by _default_, the _Content-Type_ will be _text/html_ and the status will be 200

shorter version:

```js
res.send('<!DOCTYPE html><html>...</html>');
```

## Sending responses

another example:

```js
res.status(404);
res.set({ 'Content-Type': 'text/plain' });
res.send('Document not found.\n');
```

## Sending responses

response objects support _method chaining_:

```js
res
  .status(404)
  .set({ 'Content-Type': 'text/plain' })
  .send('Document not found.\n');
```

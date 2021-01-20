# JSON data

## JSON data

sending JSON (manually):

```js
res.setHeader({"Content-Type", "application/json"});
res.send(JSON.stringify(data));
```

with the `.json()` helper:

```js
res.json(data);
```

## JSON data

receiving (parsing) JSON via middleware:

```js
app.use(express.json());
```

data will be available as `req.body`

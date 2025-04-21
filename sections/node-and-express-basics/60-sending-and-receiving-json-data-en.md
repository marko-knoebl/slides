# Sending and receiving JSON data

## Sending and receiving JSON data

sending JSON (manually):

```js
res.setHeader({"Content-Type", "application/json"});
res.send(JSON.stringify(data));
```

with the `.json()` helper:

```js
res.json(data);
```

## Sending and receiving JSON data

receiving (parsing) a JSON body via middleware:

```js
app.use("/api", express.json());
```

data will be available as `req.body`

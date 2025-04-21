## extra topics

* - imports

## Redirects

```js
app.get('/home', (req, res) => {
  res.redirect('/');
});
```

## Sending responses

setting a cookie:

```js
res.cookie('a', '1');
```

or explicitly:

```js
res.set({ 'Set-Cookie': 'a=1' });
```

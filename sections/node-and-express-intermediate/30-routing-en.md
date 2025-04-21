# Routing

## Routing

We can restructure our routes definitions by using `Router` objects

## Routing

having everything in one place:

```js
app.get('/accounts', () => {
  // ...
});
app.get('/accounts/:id', () => {
  // ...
});
app.post('/accounts', () => {
  // ...
});

app.get('/transactions', () => {
  // ...
});
// ...
```

## Routing

cleaner structure:

```js
app.use('/accounts', accountsRouter);
app.use('/transactions', transactionsRouter);
```

## Routing

definition of `accountsRouter` in a separate file (e.g. _routes/accounts.route.js_)

```js
import { Router } from 'express';

export const accountsRouter = Router();

accountsRouter.get('/', () => {
  // ...
});
accountsRouter.get('/:id', () => {
  // ...
});
```

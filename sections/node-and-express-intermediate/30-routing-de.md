# Routing

## Routing

Wir können unsere Routendefinitionen mittels `Router`-Objekten strukturieren

## Routing

alles an einem Ort:

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

saubere Struktur:

```js
app.use('/accounts', accountsRouter);
app.use('/transactions', transactionsRouter);
```

## Routing

Definition von `accountsRouter` in separater Datei (z.B. _routes/accounts.route.js_)

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

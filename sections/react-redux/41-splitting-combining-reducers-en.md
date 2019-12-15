# Splitting / combining reducers

## Splitting / combining reducers

Reducers can be easily combined to form a "containing" reducer

## Splitting / combining reducers

example: online shop

- _root_ reducer: contains three entries managed by separate reducers:
  - _user_ reducer: data on the logged-in user
  - _products_ reducer: data on available products (from API)
  - _cart_ reducer: data on current contents of the cart

## Splitting / combining reducers

Combining reducers could be done manually - or via the function `combineReducers` from Redux

## Splitting / combining reducers

Reducers that directly manage data are usually implemented by using a `switch` statement.

Reducers that are composed of other reducers can be implemented like this:

```js
const shopReducer = (state, action) => ({
  user: userReducer(state.user, action),
  products: productsReducer(state.products, action),
  cart: cartReducer(state.cart, action),
});
```

## Splitting / combining reducers

via `combineReducers`:

```js
import { combineReducers } from '@reduxjs/toolkit';

const shopReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
```

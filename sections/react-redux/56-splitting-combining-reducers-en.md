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

Redux has a function for building reducers from sub-reducers:

```js
import { combineReducers } from '@redux/toolkit';

const shopReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
```

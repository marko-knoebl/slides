# Exercise: shop

## Exercise: shop

State consists of two important parts:

- product catalog
- number of products in the shopping cart

## Exercise: shop - state

```json
{
  "cart": {
    "addedIds": [2],
    "quantityById": { 2: 2 }
  },
  "products": [
    {
      "id": 1,
      "title": "iPad 4 Mini",
      "price": 500.01,
      "inventory": 2
    },
    {
      "id": 2,
      "title": "H&M T-Shirt White",
      "price": 10.99,
      "inventory": 10
    },
    {
      "id": 3,
      "title": "Charli XCX - Sucker CD",
      "price": 19.99,
      "inventory": 5
    }
  ]
}
```

## Exercise: shop

The two parts - `cart` and `products` - can be managed by two different reducers.

Combining the reducers into one reducer via the function `combineReducers`:

```js
import { combineReducers } from 'redux';

const shopReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(
  shopReducer,
  composeWithDevTools(applyMiddleware())
);
```

## Exercise: shop

```js
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'addToCart':
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    default:
      return state;
  }
};
```

## Exercise: shop

```js
const products = [];
const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'setProducts':
      return action.payload;
    case 'addToCart':
      return state.map(product =>
        product.id === action.payload
          ? { ...product, inventory: product.inventory - 1 }
          : product
      );
    default:
      return state;
  }
};
```

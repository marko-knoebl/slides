# State management in Redux

## State management in Redux

In Redux: application state is stored _globally_.

There is _one_ store that contains all data.

A store may be composed of different parts.

## Installation of Redux

```bash
npm install redux
```

## Example: Todos

Differences between Redux and the reducer hook:

In Redux the initial state is passed to the reducer as a default parameter:

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {
    ...
}
```

If a reducer does not recognize an action the Redux state should remain unchanged:

```js
default:
  return oldState;
```

## Example: Todos

```js
const initialState = [];
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...oldState,
        {
          title: action.title,
          completed: false,
          id: generateId(), // dummy function
        },
      ];
    case 'DELETE_TODO':
      return oldState.filter(todo => todo.id !== action.id);
    default:
      return oldState;
  }
};
```

## Example: todos store

```js
// store.js
import { createStore } from 'redux';
import todosReducer from 'todosReducer';

const todosStore = createStore(todosReducer);
```

## Example: todos store

direct use:

```js
todosStore.getState();
todosStore.dispatch({
  type: 'ADD_TODO',
  title: 'learn Redux',
});
todosStore.getState();
```

## Redux devtools

Browser plugin:

https://github.com/zalmoxisus/redux-devtools-extension

## Redux devtools

Including the devtools in an application:

```bash
npm install redux-devtools-extension
```

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
);
```

## Redux devtools

functionality:

- inspect state
- display changes to the state
- trigger (dispatch) actions
- restore previous state (time traveling)
- saving / restoring State from / to JSON

## Example: shopping cart

State consists of two important parts:

- product catalog
- number of products in the shopping cart

## Example: shopping cart - state

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

## Example: shopping cart

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

## Example: shopping cart

```js
const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1,
      };
    default:
      return state;
  }
};
```

## Example: shopping cart

```js
const products = [];
const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    case 'ADD_TO_CART':
      return state.map(product =>
        product.id === action.id
          ? { ...product, inventory: product.inventory - 1 }
          : product
      );
    default:
      return state;
  }
};
```

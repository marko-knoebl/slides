# State Management in Redux

## State Management in Redux

Bei Redux: Anwendungszustand wird _global_ gespeichert.

Es gibt _einen_ Store, in dem alle Daten gesammelt sind.

Ein Store kann in verschiedene Teile aufgeteilt sein.

## Installation

```bash
npm install redux
```

## Beispiel: Todos

Unterschiede zwischen Redux und dem Reducer Hook:

Der Anfangszustand wird bei Redux dem Reducer als Standardparameter übergeben

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {
    ...
}
```

Bei unbekannten Actions soll der Zustand in Redux unverändert bleiben:

```js
default:
  return oldState;
```

## Beispiel: Todos

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

## Beispiel: Todos Store

```js
// store.js
import { createStore } from 'redux';
import todosReducer from 'todosReducer';

const todosStore = createStore(todosReducer);
```

## Beispiel: Todos Store

Direkte Verwendung:

```js
todosStore.getState();
todosStore.dispatch({
  type: 'ADD_TODO',
  title: 'learn Redux',
});
todosStore.getState();
```

## Redux Devtools

Browser-plugn:

https://github.com/zalmoxisus/redux-devtools-extension

## Redux Devtools

einbinden:

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

## Redux Devtools

Funktionalitäten:

- State inspizieren
- Änderungen am State anzeigen
- Actions auslösen (dispatchen)
- Früheren State wiederherstellen (Time Traveling)
- State als JSON speichern / wiederherstellen

## Beispiel: Shopping cart

State des Beispiels besteht aus zwei wichtigen Teilen:

- Produktsortiment
- Anzahl der Produkte im Warenkorb

## Beispiel: Shopping cart - State

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

## Beispiel: Shopping cart

Die zwei Teile - `cart` und `products` - können von zwei verschiedenen Reducern verwaltet werden.

Zusammenführen zu einem Reducer mittels der vordefinierten Funktion `combineReducers`:

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

## Beispiel: Shopping cart

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

## Beispiel: Shopping cart

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

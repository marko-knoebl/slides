# Reducer aufteilen / kombinieren

## Reducer aufteilen / kombinieren

Mehrere Reducer können einfach zusammengeführt / kombiniert werden, um einen zusammengesetzten Reducer zu erstellen

## Reducer aufteilen / kombinieren

Beispiel: Online Shop

- _root_ Reducer: Enthält drei Einträge, die von separaten Reducern verwaltet werden:
  - _user_ Reducer: Daten zum eingeloggten Benutzer
  - _products_ Reducer: Daten zu verfügbaren Produkten (von API)
  - _cart_ Reducer: Daten zum Aktuellen Inhalt des Einkaufswagens

## Reducer aufteilen / kombinieren

Könnte manuell erfolgen - oder durch Verwendung der Funktion `combineReducers` aus Redux

## Reducer aufteilen / kombinieren

manuell:

```js
const shopReducer = (state, action) => ({
  user: userReducer(state.user, action),
  products: productsReducer(state.products, action),
  cart: cartReducer(state.cart, action),
});
```

mittels `combineReducers`:

```js
import { combineReducers } from '@reduxjs/toolkit';
const shopReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
```

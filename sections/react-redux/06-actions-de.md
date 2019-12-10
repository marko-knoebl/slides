# Actions

## Actions

- Beschreiben eine Zustandsänderung
- Sind js-Objekte mit einer _type_-Property und _optional_ beliebigen anderen Properties
- Die _type_-Property ist üblicherweise ein String, oft als Konstante in einem separaten Modul definiert
- Actions werden oft nach dem _FSA_-Standard definiert, der eine `payload`-Property definiert, sowie `error` und `meta`

## Actions - Beispiele

```js
import { ADD_TODO } from './constants';

let a = {
  type: ADD_TODO,
  payload: {
    title: 'Build my first redux app',
  },
};
```

## Actions - Beispiele

```js
let a = {
  type: TOGGLE_TODO,
  payload: {
    id: 2,
  },
};
```

## Action creators

Action creators: einfache Funktionen, die eine bestimmte Action erstellen

```js
const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title: title,
  },
});
```

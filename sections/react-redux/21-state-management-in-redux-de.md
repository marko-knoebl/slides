# State Management in Redux

## State Management in Redux

Bei Redux: Anwendungszustand wird _global_ gespeichert.

Der Zustand wird unabhängig von den React Komponenten gespeichert.

Es gibt _einen_ Store, in dem alle Daten gesammelt sind.

Ein Store kann in verschiedene Teile aufgeteilt sein.

## Redux Reducer

Besonderheiten von Redux Reducern (verglichen mit dem Reducer Hook):

der Anfangszustand wird als Standardparameter übergeben:

```js
const initialState = []
const todosReducer = (oldState = initialState, action) => {...}
```

unbekannte Actions sollten den Zustand unverändert lassen:

```js
default:
  return oldState;
```

## Beispiel: Todos

```js
const initialState = [];
const todosReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'addTodo':
      return [
        ...oldState,
        {
          title: action.payload,
          completed: false,
          id: Math.max(0, ...oldState.map((t) => t.id)) + 1,
        },
      ];
    case 'deleteTodo':
      return oldState.filter(
        (todo) => todo.id !== action.payload
      );
    default:
      return oldState;
  }
};
```

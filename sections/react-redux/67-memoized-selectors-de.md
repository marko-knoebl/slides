# Memoisierte Selektoren

## Memoisierung

Memoisierung bezeichnet das Cachen von Rückgabewerten reiner Funktionen

## Memoisierung in reselect

_Reselect_ = Library für Memoisierung von Selektoren.

## Memoisierung in reselect

Reselect kann zum Memoisieren komplexerer Selektoren verwendet werden

```js
import { createSelector } from 'reselect';

// normal selector
const todosSelector = (state) => state.todoData.todos;

// memoized selector
const numCompletedTodosSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => todo.completed).length
);
```

Der `numCompletedTodosSelector` ist vom `todosSelector` abhängig und wird nur neu asgewertet, wenn dieser einen neuen Wert zurückgibt.

## Memoisierung in reselect

```js
const lengthSelector = (rect) => rect.length;
const widthSelector = (rect) => rect.width;

const areaSelector = (rect) =>
  lengthSelector(rect) * widthSelector(rect);

const memoizedAreaSelector = createSelector(
  lengthSelector,
  widthSelector,
  // will only be evaluated if one of the selectors
  // returned a new value
  (length, width) => length * width
);
```

## Memoisierung in reselect

Der letzte Funktionsaufruf wird die Fläche nicht neu berechnen:

```js
areaSelector({ length: 2, width: 3, col: 'red' });
areaSelector({ length: 2, width: 3, col: 'blue' });

memoizedAreaSelector({ length: 2, width: 3, col: 'red' });
memoizedAreaSelector({ length: 2, width: 3, col: 'blue' });
```

# Libraries

## Libraries

verbreitete Libraries:

- _lodash_ (Sammlung nützlicher Funktionen)
- _jQuery_ (Erleichtert das Arbeiten mit dem DOM)
- _immer.js_ / _immutable.js_ (Arbeiten mit unveränderlichen Objekten)
- _moment.js_ (Arbeiten mit Zeitangaben)

## jQuery

Ändern von Elementen

- `$('#myelement')`
- `el.html('content')`
- `el.css('color', 'blue')`
- `el.addClass('abc')`
- `el.prop('style')`

## jQuery

Erstellen / hinzufügen / entfernen von Elementen

- `$('<div>')`
- `parent.append(child)`
- `child.remove()`

## jQuery

Abfragen von Events

- `$(element).on('click', ...)`
- `$(element).click(...)`

## immutable.js

Bietet insbesondere die Datenstrukturen _List_ und _Map_ als unveränderliche Alternativen zu _Array_ und _Object_.

```js
import { List, Map } from 'immutable';

const a1 = List([1, 2, 3]);
const a2 = a1.push(4);

const b1 = Map({ a: 1, b: 2 });
const b2 = b1.set('b', null);
```

## immutable.js

```js
import { fromJS, setIn } from 'immutable';

const todos = fromJS([
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
]);

const newTodos = todos.setIn([1, 'completed'], true);
```

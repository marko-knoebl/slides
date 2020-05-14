# Libraries

## Libraries

commonly used libraries:

- _lodash_ (collection of utility functions)
- _jQuery_ (simplifies working with the DOM)
- _immer.js_, _immutable.js_ (libraries for immutable/unchangeable data)
- _moment.js_ (working with time data)

## jQuery

modifying elements:

- `const el = $('#myelement')`
- `el.html('content')`
- `el.css('color', 'blue')`
- `el.addClass('abc')`
- `el.prop('style')`

## jQuery

creating / adding / removing elements:

- `const newEl = $('<div>')`
- `parent.append(child)`
- `child.remove()`

## jQuery

listening for events:

- `$(element).on('click', ...)`
- `$(element).click(...)`

## immutable.js

In particular, offers the data types _List_ and _Map_ as immutable alternatives for _Array_ and _Object_.

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

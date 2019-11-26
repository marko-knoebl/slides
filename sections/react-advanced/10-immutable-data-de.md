# Immutability

## Immutability (Unveränderlichkeit)

Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Datenverwaltung ohne Mutationen: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// nicht zulässig: verändert das ursprüngliche array
names.push('Dan');

// stattdessen: neues Array:
names = [...names, 'Dan'];

// Alternative:
let newNames = names.slice();
newNames.push('Dan');
// überschreiben des ursprünglichen Arrays
names = newNames;
```

## Datenverwaltung ohne Mutationen: Objekte

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
// nicht zulässig: verändert das Objekt
user.email = 'johndoe@gmail.com';

// stattedessen: Erzeugen eines neuen Objekts:
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immutable.js und immer.js

Libraries, die das Arbeiten ohne Mutationen erleichtern

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

## immer.js

wird insbesondere vom Redux-Team empfohlen

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, draftTodos => {
  draftTodos[1].completed = true;
});
```

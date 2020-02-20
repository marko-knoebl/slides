# Immutable state

## Immutable state

**Immutability**: Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Immutable state

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Das sollten wir _nicht_ tun - React bemerkt üblicherweise diese Änderungen nicht und aktualisiert die Ansicht nicht

Objekte im State sollten als _unveränderlich_ erachtet werden

## Datenverwaltung ohne Mutationen: Arrays

Ausgangsdaten:

```js
let names = ['Alice', 'Bob', 'Charlie'];
```

**Mutation**: Abändern des ursprünglichen Arrays

```js
names.push('Dan');
```

**keine Mutation**: Erstellen eines neuen Arrays

```js
let newNames = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen: Objekte

Ausgangsdaten:

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**Mutation**: Abändern des ursprünglichen Objekts

```js
user.email = 'johndoe@gmail.com';
```

**keine Mutation**: Erstellen eines neuen Objekts

```js
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js und immutable.js

Libraries, die das Arbeiten ohne Mutationen erleichtern

## immer.js

wird insbesondere vom Redux-Team empfohlen

Änderungen werden über ein _draft_-Objekt angegeben

## immer.js

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, todosDraft => {
  todosDraft[1].completed = true;
  todosDraft.push({
    id: 3,
    title: 'relax',
    completed: false,
  });
});
```

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

# Immutability

## Immutability

(Unveränderlichkeit)

Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

## Immutability

Bei der Verwendung von Redux bzw von Reacts PureComponent:

Objekte, die den Anwendungszustand (state) beschreiben, sollten nicht direkt abgeändert werden

Stattdessen sollten sie durch neue Objekte ersetzt werden

Vorteile: Bessere Performance, mehr Möglichkeiten beim debugging

## PureComponent

Statt von `React.Component` ist es möglich, von `React.PureComponent` zu erben:

Die Entsprechende Komponente wird nur neu gerendert, wenn sich entweder state oder props geändert haben.

In einer PureComponent gelten Einträge in state bzw props dann als geändert, wenn sie sich auf ein anderes Objekt als zuvor beziehen

## Verwaltung von Daten ohne Mutationen

## Datenverwaltung ohne Mutationen: Arrays

```js
let names = ['Alice', 'Bob', 'Charlie'];
// nicht zulässig: verändert das ursprüngliche array
names.push('Dan');

// stattdessen: neues Array;
let newNames = names.slice();
newNames.push('Dan');
// überschreiben des ursprünglichen Arrays
names = newNames;

// oder:
names = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen: Objekt

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

## immutable.js

**immutable.js** ist eine Library, die das Arbeiten ohne Mutationen noch erleichtert

Immutable.js bietet insbesondere die Datenstrukturen _List_ und _Map_, die als unveränderliche Alternativen zu _Array_ und _Object_ dienen können.

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

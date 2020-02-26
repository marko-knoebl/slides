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

## immer.js

Library, die das Arbeiten ohne Mutationen erleichtert

wird insbesondere vom Redux-Team empfohlen

## immer.js

this code would mutate the todos array:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

avoiding mutations by using immer:

```js
import produce from 'immer';

const newTodos = produce(todos, todosDraft => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```

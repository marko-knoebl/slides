# Immutable State

## Immutable State

**Immutability**: Wichtiges Konzept in der funktionalen Programmierung und bei React / Redux

Daten werden nicht direkt abgeändert - stattdessen werden neue Daten auf Basis der alten generiert

## Immutable State

Wenn unser State Arrays oder Objekte enthält, _könnten_ wir versuchen, diese direkt abzuändern

Das sollten wir _nicht_ tun - React bemerkt üblicherweise diese Änderungen nicht und aktualisiert die Ansicht nicht

Objekte im State sollten als _unveränderlich_ erachtet werden

## Immutable State

Wenn `setState` aufgerufen wird, vergleicht React:

- das Objekt, das der alte State referenziert
- das Objekt, das der neue State referenzeirt

Wenn der alte und neue State das gleiche Objekt referenzieren (auch wenn dieses verändert wurde), wird die Komponente nicht neu gerendert

## Immutable State

Demo (siehe <https://codesandbox.io/s/exciting-dust-w7hni>):

```js
function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button
        onClick={() => {
          // invalid - modifies state
          numbers.push(numbers.length);
          setNumbers(numbers);
        }}
      >
        add (mutate)
      </button>
      <button
        onClick={() => {
          // valid - replaces state
          setNumbers([...numbers, numbers.length]);
        }}
      >
        add (replace)
      </button>
    </div>
  );
}
```

## Immutable State

Code wie der folgende ist **nicht** erlaubt, um State abzuändern, da React die Mutation nicht "sieht":

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

## Datenverwaltung ohne Mutationen: Arrays

Ausgangsdaten:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**Mutation**: Abändern des ursprünglichen Arrays

```js
names.push('Dan');
```

**keine Mutation**: Erstellen eines neuen Arrays

```js
const newNames = [...names, 'Dan'];
```

## Datenverwaltung ohne Mutationen: Objekte

Ausgangsdaten:

```js
const user = {
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
const newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js

Library, die das Arbeiten ohne Mutationen erleichtert

wird insbesondere vom Redux-Team empfohlen

## immer.js

Code, der das todos-Array abändern würde:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

Mutation durch die Verwendung von _immer.js_ vermeiden:

```js
import produce from 'immer';

const newTodos = produce(todos, (todosDraft) => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```

# Datenverwaltung ohne Mutationen

## Datenverwaltung ohne Mutationen

Möglichkeiten, um aus bestehenden Daten aktualisierte Daten zu erhalten:

- abändern der ursprünglichen Daten
- erstellen neuer - abgeleiteter - Daten basieren aus den ursprünglichen Daten

## Datenverwaltung ohne Mutationen

Themen:

- Hinzufügen von Properties zu einem Objekt
- Ändern einzelner Properties in einem Objekt
- Hinzufügen von Elementen zu einem Array
- Ändern von Elementen in einem Array
- Entfernen von Elementen aus einem Array

## Datenverwaltung ohne Mutationen

Mechanismen:

- Spread-Syntax (`...`)
- besondere Array-Methoden (`.map`, `.filter`)

## Datenverwaltung ohne Mutationen

Spread Syntax für Arrays:

```js
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6];
// moreNumbers: [1, 2, 3, 4, 5, 6]
```

## Datenverwaltung ohne Mutationen

Spread Syntax für Objekte:

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Datenverwaltung ohne Mutationen

die `.map`-Methode:

- bestimmt für jeden Eintrag in einem Array einen neuen, abgeletiteten, Eintrag
- verwendet eine Funktion, um die "Transformation" jedes Eintrags anzugeben
- gibt ein neues Array mit diesen Einträgen zurück

```js
const myNumbers = [1, 2, 3, 4];

const tripledNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9, 12]
const squareRoots = myNumbers.map(Math.sqrt);
// [1, 1.41, 1.73, 2]
```

## Datenverwaltung ohne Mutationen

die `.filter`-Methode:

- erstellt ein neues Array, in dem nur bestimmte Einträge im Array verbleiben
- verwendet eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- gibt ein neues Array zurück

```js
const myNumbers = [1, 2, 3, 4];

const evenNumbers = myNumbers.filter((n) => n % 2 === 0);
// [2, 4]
```

## Datenverwaltung ohne Mutationen

Mechanismen:

- Hinzufügen von Properties zu einem Objekt: _Spread Syntax_
- Ändern einzelner Properties in einem Objekt: _Spread Syntax_
- Hinzufügen von Elementen zu einem Array: _Spread Syntax_
- Ändern von Elementen in einem Array: _map_
- Entfernen von Elementen aus einem Array: _filter_

## Übungen

**Arbeiten mit Todos**

Aufgabe: Vervollständige Funktionen, die Todos verwalten (ohne Mutationen)

[Codesandbox Ausgangspunkt](https://codesandbox.io/s/todo-data-without-mutations-ocvne6?file=/src/manageTodos.js)

## Übungen

Übung: Erstelle die folgende _reine_ Funktion, die ein Todo verarbeitet:

```js
const todo1 = { id: 1, title: 'foo', completed: false };

function changeTitle(todo, newTitle) {
  // TODO: FINISH IMPLEMENTATION HERE
}

const todo2 = changeTitle(todo1, 'bar');
console.log(todo2);
// { id: 1, title: 'bar', completed: false}
```

## Übungen

Lösung:

```js
function changeTitle(todo, newTitle) {
  return { ...todo, title: newTitle };
}
```

## Übungen

Übungen: Erstelle _reine_ Funktionen, die ein Array von Todo-Objekten behandeln:

```js
const todos = [
  { id: 1, title: 'foo', completed: false },
  { id: 5, title: 'bar', completed: true },
  { id: 7, title: 'baz', completed: false },
];
```

## Übungen

Vervollständige diesen Code, sodass er ein neues, unerledigtes Todo mit einem gegebenen Titel und einer neuen ID hinzufügt:

```ts
function addTodo(todos, newTitle) {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  // TODO: FINISH IMPLEMENTATION HERE
}

// add a todo with title 'qux'
const todosA = addTodo(todos, 'qux');
console.log(todosA);
```

## Übungen

mögliche Lösung:

```js
function addTodo(todos, newTitle) {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
}
```

## Übungen

Vervollständige diesen Code, sodass er ein bestimmtes Todo anhand der ID löscht:

```ts
function removeTodo(todos, id) {
  // TODO: FINISH IMPLEMENTATION HERE
}

const todosB = removeTodo(todos, 1);
console.log(todosB);
```

## Übungen

mögliche Lösung:

```ts
function removeTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}
```

## Übungen

Vervollständige diesen Code, sodass er den completed-Zustand eines bestimmten Todos ändert

```js
function changeTodoCompleted(todos, id, completed) {
  // TODO: FINISH IMPLEMENTATION HERE
}

// change the completed status of todo 1 to true
const todosC = changeTodoCompleted(todos, 1, true);
console.log(todosC);
```

## Übungen

mögliche Lösung:

```ts
function changeTodoCompleted(todos, id, completed) {
  return todos.map((todo) => {
    if todo.id === id {
      return {...todo, completed: completed}
    } else {
      return todo;
    }
  })
}
```

## Übungen

**Newsletter-Anmeldung** von zuvor: Speichere den State in einem einzelnen Objekt mit drei Einträgen

```js
const [data, setData] = useState({
  email: '',
  repeatEmail: '',
  acceptTerms: false,
});
```

**Todos**: Schreibe weitere reine Funktionen, die mit Todos arbeiten:

- `changeTodoTitle`
- `toggleTodo` (umschalten zwischen erledigt und nicht-erledigt)
- `updateTodo` (ändern von `title` und `completed` in einem Aufruf)
- `removeAllCompletedTodos`
- ...

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
- gibt ein neues Array mit diesen Einträgen zurück

```js
const myNumbers = [1, 2, 3, 4];

const tripledNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9, 12]
```

## Datenverwaltung ohne Mutationen

die `.filter`-Methode:

- erstellt ein neues Array, in dem nur bestimmte Einträge im Array verbleiben
- verwendet eine Funktion, um Einträge auf ein bestimmtes Kriterium zu testen
- gibt ein neues Array zurück

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
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

Wir erstellen _reine_ Funktionen, die mit Todos arbeiten

TypeScript-Deklaration, die ein Todo repräsentiert:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

## Übungen

Übung: Erstelle die folgende _reine_ Funktion:

```js
const todo1 = { id: 1, title: 'foo', completed: false };

function changeTitle(todo: Todo, newTitle: string): Todo {
  // TODO: FINISH IMPLEMENTATION HERE
}

const todo2 = changeTitle(todo1, 'bar');
console.log(todo2);
// { id: 1, title: 'bar', completed: false}
```

## Übungen

Lösung:

```js
function changeTitle(todo: Todo, newTitle: string): Todo {
  return { ...todo, title: newTitle };
}
```

## Übungen

Übung: Erstelle die folgenden _reinen_ Funktionen, die ein Array von Todo-Objekten behandeln:

```js
const todos = [
  { id: 1, title: 'foo', completed: false },
  { id: 5, title: 'bar', completed: true },
  { id: 7, title: 'baz', completed: false },
];
```

## Übungen

Vervollständige diesen Code, sodass er ein Todo mit einem gegebenen Titel und einer neuen ID hinzufügt:

```ts
function addTodo(
  todos: Array<Todo>,
  newTitle: string
): Array<Todo> {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  // TODO: FINISH IMPLEMENTATION HERE
}

// add a todo with title 'baz'
const todosA = addTodo(todos, 'baz');
console.log(todosA);
```

## Übungen

mögliche Lösung:

```js
function addTodo(
  todos: Array<Todo>,
  newTitle: string
): Array<Todo> {
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

Vervollständige diesen Code, sodass er den completed-Zustand eines bestimmten Todos ändert

```ts
function changeTodoCompleted(
  todos: Array<Todo>,
  id: number,
  completed: boolean
): Array<Todo> {
  // TODO: FINISH IMPLEMENTATION HERE
}

// change the completed status of todo 1 to true
const todosB = changeTodoCompleted(todos, 1, true);
console.log(todosB);
```

## Übungen

mögliche Lösung:

```ts
function changeTodoCompleted(
  todos: Array<Todo>,
  id: number,
  completed: boolean
): Array<Todo> {
  return todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: completed }
      : todo
  );
}
```

## Übungen

Vervollständige diesen Code, sodass er ein bestimmtes Todo anhand der ID löscht:

```ts
function removeTodo(
  todos: Array<Todo>,
  id: number
): Array<Todo> {
  // TODO: FINISH IMPLEMENTATION HERE
}

const todosC = removeTodo(todos, 1);
console.log(todosC);
```

## Übungen

mögliche Lösung:

```ts
function removeTodo(
  todos: Array<Todo>,
  id: number
): Array<Todo> {
  return todos.filter((todo) => todo.id !== id);
}
```

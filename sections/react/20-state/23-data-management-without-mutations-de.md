# Datenverwaltung ohne Mutationen

## Datenverwaltung ohne Mutationen

Möglichkeiten, um aus bestehenden Daten aktualisierte Daten zu erhalten:

- abändern der ursprünglichen Daten
- erstellen neuer - abgeleiteter - Daten basieren aus den ursprünglichen Daten

## Datenverwaltung ohne Mutationen

Ausgangsdaten:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**Mutation**: Abändern des ursprünglichen Arrays

```js
names.push('Dan');
```

**keine Mutation**: Erstellen eines neuen Arrays (spread Syntax)

```js
const newNames = [...names, 'Dan'];
```

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

Übung: Erstelle die folgenden _reinen_ Funktionen, die ein Todo-Element (Objekt) behandeln:

```js
const todo1 = { id: 1, title: 'foo', completed: false };

const todo2 = withCompletedToggled(todo1);
// { id: 1, title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, 'bar');
// { id: 1, title: 'bar', completed: true}
```

## Übungen

Lösungen:

```js
const withCompletedToggled = (todo) => ({
  ...todo,
  completed: !todo.completed,
});
```

```js
const withTitleChanged = (todo, newTitle) => ({
  ...todo,
  title: newTitle,
});
```

## Übungen

Übung: Erstelle die folgenden _reinen_ Funktionen, die ein Array von Todo-Objekten behandeln:

```js
const todos1 = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];

const todos2 = withNewTodoAdded(todos1, 'baz');
const todos3 = withTodoToggled(todos2, 1);
const todos4 = withCompletedTodosRemoved(todos3);
console.log(todos4);

// [{ id: 3, title: 'baz', completed: false }]
```

## Übungen

Lösung 1:

```js
const withNewTodoAdded = (todos, newTitle) => {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
};
```

## Übungen

Lösung 2:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
```

oder - mit Hilfe von `withCompletedToggled`:

```js
const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? withCompletedToggled(todo) : todo
  );
```

## Übungen

Lösung 3:

```js
const withCompletedTodosRemoved = (todos) =>
  todos.filter((todo) => !todo.completed);
```

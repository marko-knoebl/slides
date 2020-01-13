# TypeScript intermediate

## Any

Any: lässt alle Typen zu

```ts
let myInput: any = document.getElementById('myinput');

console.log(myInput.value);
```

## Type Assertions

ermöglichen das Behandeln eines vorhandenen Objekts als bestimmter Typ

```ts
let myInput = document.getElementById(
  'first-name'
) as HTMLInputElement;

console.log(myInput.value);
```

## Typen / Interfaces und Klassen

```ts
class AdvancedTodo implements TodoType {
  /* ... */
}

class AdvancedTodo implements TodoInterface {
  /* ... */
}
```

## Intersection Types

Mittels `&`:

```ts
type x = a & b;
```

Der Intersection Typ `x` kann gegenüber `a`:

- Werte von existierenden Properties weiter einschränken
- zusätzliche verpflichtende Properties hinzufügen

## Intersection Types: Konkretisierung von Typen

Beispiel aus Redux:

```ts
type Action = {
  type: string;
  payload?: any;
};

type AddTodoAction = Action & {
  type: 'ADD_TODO';
  payload: string;
};
```

## Intersection Types: Kombinieren von Typen

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objekte, die den Typ `SerializableAction` implementieren, müssen sowohl alle Einträge aus `Serializable` als auch aus `Action` implementieren.

## Union Types

Der Typ `x` muss entweder alle Kriterien von `a` erfüllen oder alle Kriterien von `b` erfüllen.

```ts
type x = a | b;
```

Alternative Schreibweise über mehrere Zeilen:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Private & Public Properties

```ts
class Clock {
  private formatTime(time) {
    return ...
  }
  public start() {
    ...
  }
}
```

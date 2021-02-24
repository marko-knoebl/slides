# Union types and intersection types

## Union Types

```ts
type x = a | b;
```

Der Typ `x` muss entweder alle Kriterien von `a` erfüllen oder alle Kriterien von `b` erfüllen.

Alternative Schreibweise über mehrere Zeilen:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
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
  type: 'addTodo';
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

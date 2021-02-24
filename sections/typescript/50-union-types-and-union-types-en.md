# Union types and intersection types

## Union Types

```ts
type x = a | b;
```

The type `x` must either fulfil all criteria of `a` or all criteria of `b`.

Alternative notation across multiple lines:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Intersection Types

Via `&`:

```ts
type x = a & b;
```

With regards to `a` the intersection type `x` may:

- restrict the values of existing properties
- add additional required properties

## Intersection Types: Restricting values

example from Redux:

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

## Intersection Types: Combining Types

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objects that implement the Type `SerializableAction` must implement all entries from both `Serializable` and `Action`.

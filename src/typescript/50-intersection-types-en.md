# Intersection types

## Intersection types

Via `&`:

```ts
type X = A & B;
```

With regards to `A` the intersection type `X` may:

- restrict the values of existing properties
- add additional required properties

## Intersection types: restricting values

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

## Intersection types: combining types

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objects that implement the Type `SerializableAction` must implement all entries from both `Serializable` and `Action`.

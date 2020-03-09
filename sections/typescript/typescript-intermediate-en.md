# TypeScript Intermediate

## Any

Any: variable can be of any type - disables the typechecker for this variable

```ts
const myInput: any = document.getElementById('myinput');

console.log(myInput.value);
```

## Type assertions

Enable treating an existing object as a specific type

```ts
const myInput = document.getElementById(
  'first-name'
) as HTMLInputElement;

console.log(myInput.value);
```

## Types / interfaces and classes

```ts
class AdvancedTodo implements TodoType {
  /* ... */
}

class AdvancedTodo implements TodoInterface {
  /* ... */
}
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

## Union Types

The type `x` must either fulfil all criteria of `a` or all criteria of `b`.

```ts
type x = a | b;
```

Alternative notation across multiple lines:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Private & public properties

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

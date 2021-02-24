# Type and interface declarations

## Type and interface declarations

**Interfaces** describe the structure of an object / of a class in detail (e.g.: `Todo`, `Person`)

**Types**: similar to interfaces, but are also applicable to strings, arrays, ...

## Types and interfaces

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## Types

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<Todo>;
```

## Types and objects

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // method
  toggle: (id: number) => void;
};
```

## Types / interfaces and classes

```ts
class ShoppingListItem implements Todo {
  // ...
}
```

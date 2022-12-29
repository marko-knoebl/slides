# Type aliases and interfaces

## Type aliases and interfaces

_Type aliases_ and _interfaces_: similar techniques that allow us to store a type declaration under a name

Type aliases can be somewhat more flexible and easy to use ([comparison on StackOverflow](https://stackoverflow.com/questions/37233735))

## Type aliases and interfaces

type alias for objects:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

interface for objects:

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

## Using type aliases / interfaces

```ts
const todos: Array<Todo> = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];
```

## Type aliases and interfaces

type aliases and interfaces should be _capitalized_ (e.g. `Todo`, not `todo`)

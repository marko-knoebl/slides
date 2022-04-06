# Type aliases and interfaces

## Type aliases and interfaces

_Type aliases_ and _interfaces_: similar techniques that allow us to store a type declaration under a name

Type aliases can be somewhat more flexible and easy to use ([comparison on StackOverflow](https://stackoverflow.com/questions/37233735))

## Type aliases and interfaces

type alias:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

interface:

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

## Using type aliases / interfaces

```ts
const todo: Todo = {
  id: 1,
  title: 'learn TypeScript',
  completed: false,
};
```

## Exporting

direct exports:

```ts
export type Foo = {
  // ...
};
export interface Bar {
  // ...
}
```

separate exports:

```ts
// ...
export type { Foo, Bar };
```

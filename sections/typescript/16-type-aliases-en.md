# Type aliases

## Type aliases

With _type aliases_ we can store a type declaration under a name

```ts
type Todo = {
  title: string;
  completed: boolean;
  description?: string;
};
```

```ts
type TodoCollection = Array<Todo>;
```

```ts
type Time = [number, number, number];
```

## Using type aliases

```ts
const todo: Todo = {
  title: 'learn TypeScript',
  completed: false,
};
```

```ts
const now: Time = [10, 45, 0];
```

## Type aliases and interfaces

_interfaces_ could be an alternative for type aliases - they can be applied in similar scenarios but have different syntaxes

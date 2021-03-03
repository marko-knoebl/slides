# Type Aliases

## Type Aliases

Mit _Type Aliases_ können wir eine Typendeklaration unter einem Namen speichern

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

## Type Aliases

```ts
const todo: Todo = {
  title: 'learn TypeScript',
  completed: false,
};
```

```ts
const now: Time = [10, 45, 0];
```

## Type Aliases und Interfaces

_Interfaces_ könnten eine Alternative für Type Aliases darstellen - Sie können in ähnlichen Szenarien angewendet werden, haben aber eine andere Syntax

# Type Aliases und Interfaces

## Type Aliases und Interfaces

Mit _Type Aliases_ oder _Interfaces_ können wir eine Typendeklaration unter einem Namen speichern

Type Aliases können etwas einfacher und flexibler sein als Interfaces

## Type Aliases und Interfaces

Type Alias:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

Interface:

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

## Verwendung von Type Aliases / Interfaces

```ts
const todo: Todo = {
  id: 1,
  title: 'learn TypeScript',
  completed: false,
};
```

## Exportieren

direkte Exports:

```ts
export type Foo = {
  // ...
};
export interface Bar {
  // ...
}
```

separate Exports:

```ts
// ...
export type { Foo, Bar };
```

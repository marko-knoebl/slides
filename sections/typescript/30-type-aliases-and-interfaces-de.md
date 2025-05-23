# Type Aliases und Interfaces

## Type Aliases und Interfaces

Mit _Type Aliases_ oder _Interfaces_ können wir eine Typendeklaration unter einem Namen speichern

Type Aliases können etwas einfacher und flexibler sein als Interfaces ([Vergleich auf StackOverflow](https://stackoverflow.com/questions/37233735))

## Type Aliases und Interfaces

Type Alias für ein Objekt:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

Interface für ein Objekt:

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

## Verwendung von Type Aliases / Interfaces

```ts
const todos: Array<Todo> = [
  { id: 1, title: 'foo', completed: false },
  { id: 2, title: 'bar', completed: true },
];
```

## Type Aliases und Interfaces

Type Aliases und Interfaces sollten groß geschrieben werden (z.B. `Todo`, nicht `todo`)

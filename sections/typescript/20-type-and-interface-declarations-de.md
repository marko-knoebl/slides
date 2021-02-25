<!-- closely realated content in presentations typescript and react-->

# Type- und Interface-Deklarationen

## Type- und Interface-Deklarationen

**Interfaces**: beschreiben die Struktur eines Objektes / einer Klasse genauer (z.B. `Todo`, `Person`)

**Types**: ähnlich wie Interfaces; auch auf Strings, Arrays, ... anwendbar

## Type- und Interface-Deklarationen

Types bieten im wesentlichen mehr Funktionalität als Interfaces

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

## Types bei Objekten

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

## Types / Interfaces und Klassen

```ts
class ShoppingListItem implements Todo {
  // ...
}
```

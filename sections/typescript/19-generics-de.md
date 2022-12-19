# Generics

## Generics

_Generic_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

Beispiel: Reacts `useState` ist ein Generic

```ts
const [name, setName] = useState<string>('');
```

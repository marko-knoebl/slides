# Generics

## Generics

_Generic_: allgemeine Typendeklaration, zu der bei der Anwendung nähere Informationen spezifiziert werden können (via `<...>`)

## Generics

Beispiel: `Array` ist ein Generic

```ts
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];
```

## Generics

Beispiel: Reacts `useState` kann als Generic verwendet werden

```ts
const [name, setName] = useState<string>('');
```

## Generics

Beispiel: Reacts Eventtypen können als Generics verwendet werden:

```ts
function handleChange(
  event: ChangeEvent<HTMLInputElement>
) {
  const newValue = event.target.value;
  // ...
}
```

# Komponenten-Props

## State und Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Komponenten-Props

Beispiel:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

## Komponenten-Props

Beispiel für Komponentendefinition mit Props:

```tsx
type Props = { value: number; color?: string };

const ProgressBar = (props: Props) => {
  // ...
};
```

# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Eine Komponente kann anzuzeigende Inhalte via `props.children` übergeben bekommen

mögliche Verwendung:

```jsx
<Notification type="error">
  <h1>Error</h1>
  <p>Changes could not be saved</p>
</Notification>
```

## Inhalte an Komponenten übergeben

Komponentendefinition:

```tsx
type Props = {
  type: string;
  children: React.ReactNode;
};

function Notification(props: Props) {
  const color =
    props.type === 'error' ? 'salmon' : 'lightblue';

  return (
    <div style={{ backgroundColor: color }}>
      {props.children}
    </div>
  );
}
```

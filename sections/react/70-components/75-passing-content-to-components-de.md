# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Eine Komponente kann anzuzeigende Inhalte via `props.children` übergeben bekommen

mögliche Verwendung:

```jsx
<Notification type="error">
  <p>Changes could not be saved</p>
</Notification>
```

## Inhalte an Komponenten übergeben

Komponentendefinition:

```jsx
type Props = {
  type: string,
  children: React.ReactNode,
};

const Notification = (props: Props) => {
  const style = {
    backgroundColor:
      props.type === 'error' ? 'salmon' : 'lightblue',
  };
  return <div style={style}>{props.children}</div>;
};
```

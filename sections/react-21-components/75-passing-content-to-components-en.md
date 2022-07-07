# Passing content to components

## Passing content to components

A component may receive content to be displayed via `props.children`

possible usage:

```jsx
<Notification type="error">
  <h1>Error</h1>
  <p>Changes could not be saved</p>
</Notification>
```

## Passing content to components

component definition:

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

# Inhalte an Komponenten übergeben

## Inhalte an Komponenten übergeben

Beispiele:

```jsx
<ConfirmationDialog
  header={<h1>Warning</h1>}
  body={<div>warning message</div>}
/>
```

```jsx
<PageLayout
  header={<div>...</div>}
  main={<div>...</div>}
  footer={<div>...</div>}
/>
```

```jsx
<Divider
  left={<div>...</div>}
  right={<div>...</div>}
>
```

## Inhalte an Komponenten übergeben

Implementierung eines `ConfirmationDialog`:

```js
interface Props {
  header: ReactNode;
  body: ReactNode;
}

function ConfirmationDialog({ header, body }: Props) {
  return (
    <div>
      <header>{header}</header>
      <div>{body}</div>
      <div>
        <button>OK</button>
      </div>
    </div>
  );
}
```

## Inhalte an Komponenten übergeben

diese Notationen sind gleichwertig:

```jsx
<Notification
  type="error"
  children={
    <div>
      <h1>Error</h1>
      <p>Changes could not be saved</p>
    </div>
  }
/>
```

```jsx
<Notification type="error">
  <div>
    <h1>Error</h1>
    <p>Changes could not be saved</p>
  </div>
</Notification>
```

## Inhalte an Komponenten übergeben

Was zwischen öffnendem und schließendem Tag übergeben wird, ist als `props.children` abrufbar

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

Übung: Card-Komponente mit Styling ([Beispiel](https://www.w3schools.com/howto/howto_css_cards.asp))

```jsx
<Card>
  <h1>heading</h1>
  <p>content</p>
</Card>
```

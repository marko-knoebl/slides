# Passing content to components

## Passing content to components

examples:

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

## Passing content to components

implementation of a `ConfirmationDialog`:

```js
interface Props {
  header: ReactNode;
  body: ReactNode;
}

function ConfirmationDialog(props: Props) {
  return (
    <div>
      <header>{props.header}</header>
      <div>{props.body}</div>
      <div>
        <button>OK</button>
      </div>
    </div>
  );
}
```

## Passing content to components

these notations are equivalent:

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

## Passing content to components

anything passed between opening and closing tags will be received as `props.children`

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

Exercise: Card component with Styling ([example](https://www.w3schools.com/howto/howto_css_cards.asp))

```jsx
<Card>
  <h1>heading</h1>
  <p>content</p>
</Card>
```

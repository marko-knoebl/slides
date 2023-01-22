# Passing content to components

## Passing content to components

example:

```jsx
<ConfirmationDialog
  header={<h1>Delete this folder?</h1>}
  body={
    <div>
      This will delete <i>foo/bar</i> and all its contents
    </div>
  }
/>
```

<!--
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
-->

## Passing content to components

implementation of a `ConfirmationDialog`:

```js
interface Props {
  header: ReactNode;
  body: ReactNode;
}

function ConfirmationDialog({ header, body }: Props) {
  return (
    <div className="ConfirmationDialog">
      <header className="ConfirmationDialog__Header">
        {header}
      </header>
      <div className="ConfirmationDialog__Body">{body}</div>
      <div className="ConfirmationDialog__Buttons">
        <button>Cancel</button>
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

Exercise: Card component with Styling ([example result](https://www.w3schools.com/howto/howto_css_cards.asp))

```jsx
<Card>
  <h1>heading</h1>
  <p>content</p>
</Card>
```

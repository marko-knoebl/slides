# Passing content to components

## Passing content to components

example with one "slot":

```jsx
<Notification type="error">
  <div>
    <h1>Error</h1>
    <p>Changes could not be saved</p>
  </div>
</Notification>
```

example with two named "slots":

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

## Passing content to components

equivalent notations:

```js
<Notification>
  <div>foo</div>
</Notification>
```

```js
<Notification children={<div>foo</div>} />
```

anything passed in between opening and closing tags will be received as `props.children`

## Passing content to components

implementation of a `Notification` component:

```ts
type Props = {
  children: ReactNode;
};

function Notification({ children }: Props) {
  return (
    <div className="Notification">{props.children}</div>
  );
}
```

## Passing content to components

Exercise: Card component with Styling ([example result](https://www.w3schools.com/howto/howto_css_cards.asp))

```jsx
<Card>
  <h1>heading</h1>
  <p>content</p>
</Card>
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

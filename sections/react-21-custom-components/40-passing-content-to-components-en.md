# Passing content to components

## Passing content to components

example with one "slot":

```jsx
<Notification type="error">
  <h1>Error</h1>
  <p>Changes could not be saved</p>
</Notification>
```

## Passing content to components

example with two named "slots":

```jsx
<Notification
  type="error"
  header={<h1>Error</h1>}
  body={<p>Changes could not be saved</p>}
/>
```

## Passing content to components

equivalent notations:

```js
<Notification type="error">
  <div>foo</div>
</Notification>
```

```js
<Notification type="error" children={<div>foo</div>} />
```

anything passed in between opening and closing tags will be received as `props.children`

## Passing content to components

implementation of a `Notification` component:

```ts
type Props = {
  type: 'info' | 'warning' | 'error';
  children: ReactNode;
};

function Notification({ type, children }: Props) {
  return (
    <div className={`Notification Notification--${type}`}>
      {children}
    </div>
  );
}
```

## Passing content to components

Exercise: Card component with Styling ([example result with CSS declarations](https://www.w3schools.com/howto/howto_css_cards.asp))

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

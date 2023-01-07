# Wrapping existing elements

## Wrapping existing elements

Example: a `Button` component which renders a `button` element with additional styling

The `Button` component should have the same properties as a `button` element

## Wrapping existing elements

```js
<Button type="submit" disabled={true}>
  foo
</Button>
```

should render:

```js
<button type="submit" disabled={true} className="Button">
  foo
</button>
```

## Wrapping existing elements

implementation:

```tsx
function Button(props: ComponentProps<'button'>) {
  // return a "button" element with one extra CSS class
  return <button {...props} className="Button" />;
}
```

## Extra properties

example: component with an extra property

```tsx
type Props = ComponentProps<'input'> & {
  label: string;
};

function InputWithLabel({ label, ...rest }: Props) {
  return (
    <label>
      {label}: <input {...rest} />
    </label>
  );
}
```

## Forwarding the ref property

Extra wish: The _ref_ property of the `Button` component should also point to the `button` element

## Forwarding the ref property

```tsx
const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'>
>((props, ref) => {
  return <button {...props} ref={ref} className="Button" />;
});
```

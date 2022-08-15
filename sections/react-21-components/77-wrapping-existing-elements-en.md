# Wrapping existing elements

## Wrapping existing elements

common use case: wrap existing elements for styling:

```tsx
function Button(props: ComponentPropsWithoutRef<'button'>) {
  // return a "button" element with one extra CSS class
  return (
    <button
      {...props}
      className={
        props.className ? props.className + ' btn' : 'btn'
      }
    />
  );
}
```

## Wrapping existing elements

```tsx
type Props = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

function InputWithLabel(props: Props) {
  const { label, ...rest } = props;
  return (
    <label>
      {label}: <input {...rest} />
    </label>
  );
}
```

# "Wrapper" für bestehende Elemente

## "Wrapper" für bestehende Elemente

verbreiteter Use Case: "Wrapper" für bestehende Elemente zwecks Styling:

```tsx
function Button(
  props: React.ComponentPropsWithoutRef<'button'>
) {
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

## "Wrapper" für bestehende Elemente

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

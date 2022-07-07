# "Wrapper" für bestehende Elemente

## "Wrapper" für bestehende Elemente

verbreiteter Use Case: "Wrapper" für bestehende Elemente zwecks Styling:

```tsx
function Button(
  props: React.ComponentPropsWithRef<'button'>
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

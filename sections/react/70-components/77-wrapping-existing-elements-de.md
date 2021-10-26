# "Wrappper" für bestehende Elemente

## "Wrappper" für bestehende Elemente

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

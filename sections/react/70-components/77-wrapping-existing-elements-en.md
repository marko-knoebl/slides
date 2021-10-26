# Wrapping existing elements

## Wrapping existing elements

common use case: wrap existing elements for styling:

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

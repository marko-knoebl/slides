# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Custom events

Event handlers are defined as functions and passed down via props.

## Custom events

Example:

```jsx
<Rating value={prodRating} onChange={onProdRatingChange} />
```

<img src="assets/rating.png" style="width: 16em" />

## Custom events

example prop types for a rating component:

```tsx
type Props = {
  value: number;
  onChange?: (value: number) => void;
};
```

## Custom events

```tsx
const Rating = (props: Props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span
          onClick={() => {
            // call .onChange if it exists
            props.onChange?.(id);
          }}
          key={id}
        >
          {id <= props.value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
```

## Custom events

Using the Rating component:

```jsx
const [prodRating, setProdRating] = useState(3);
```

```jsx
<Rating
  value={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

# Component props

## State and props

- state = internal to the component
- props = parameters that are passed down from the parent

## State and props

If we know a component's props and state, we will usually know how it is rendered pretty accurately

## Component props

example:

```jsx
<Rating value={prodRating} />
```

<img src="assets/rating.png" style="width: 16em" />

## Component props

Props are passed to function components via parameters:

```tsx
type RatingProps = { value: number };

function Rating(props: RatingProps) {
  // we can access "props.value"
}
```

## Component props

alternative notation with object destructuring:

```tsx
type RatingProps = { value: number };

function Rating({ value }: RatingProps) {
  // we can access "value" directly
}
```

## Component props

implementation of a Rating component:

```tsx
type RatingProps = { value: number };

function Rating({ value }: RatingProps) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span key={id}>{id <= value ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
```

## Component props

exercise: create a progress bar component:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

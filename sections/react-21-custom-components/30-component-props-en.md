# Component props

## Component props

example:

```jsx
<Rating value={prodRating} />
```

<img src="assets/rating.png" style="width: 16em" />

## Component props

props are passed to function components via a _props_ parameter:

```tsx
type Props = { value: number };

function Rating(props: Props) {
  // we can access "props.value"
}
```

## Component props

alternative notation with object destructuring:

```tsx
type Props = { value: number };

function Rating({ value }: Props) {
  // we can access "value" directly
}
```

## Component props

implementation of a Rating component:

```tsx
type Props = { value: number };

function Rating({ value }: Props) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div className="Rating">
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
<ProgressBar percentage={75} color="lightgreen" />
```

<img src="assets/progress-bar.png" style="width:16em" />

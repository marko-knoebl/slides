# Komponenten-Props

## State und Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## State und Props

Wenn wir Props und State einer Komponente kennen, wissen wir üblicherweise ziemlich genau, wie sie dargestellt wird

## Komponenten-Props

Beispiel:

```jsx
<Rating value={prodRating} />
```

<img src="assets/rating.png" style="width: 16em" />

## Komponenten-Props

Props werden Funktionskomponenten via Parametern übergeben:

```tsx
type RatingProps = { value: number };

function Rating(props: RatingProps) {
  // ...
}
```

## Komponenten-Props

Implementierung einer Rating-Komponente:

```tsx
type RatingProps = { value: number };

function Rating(props: RatingProps) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span key={id}>
          {id <= props.value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}
```

## Komponenten-Props

Übung: Erstelle eine ProgressBar-Komponente:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

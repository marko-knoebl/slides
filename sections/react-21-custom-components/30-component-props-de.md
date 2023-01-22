# Komponenten-Props

## Komponenten-Props

Beispiel:

```jsx
<Rating value={prodRating} />
```

<img src="assets/rating.png" style="width: 16em" />

## Komponenten-Props

Props werden Funktionskomponenten via Parametern übergeben:

```tsx
type Props = { value: number };

function Rating(props: Props) {
  // we can access "props.value"
}
```

## Komponenten-Props

alternative Notation mit Destrukturierung:

```tsx
type Props = { value: number };

function Rating({ value }: Props) {
  // we can access "value" directly
}
```

## Komponenten-Props

Implementierung einer Rating-Komponente:

```tsx
type Props = { value: number };

function Rating({ value }: Props) {
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

## Komponenten-Props

Übung: Erstelle eine ProgressBar-Komponente:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

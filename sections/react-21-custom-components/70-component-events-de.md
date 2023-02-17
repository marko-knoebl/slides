# Komponenten-Events

## Komponenten-Events

Props:

Eine Komponente (z.B. _App_) kann Daten (aus dem eigenen State) an eine Unterkomponente (z.B. _Rating_) übergeben

Events:

Eine Unterkomponente kann ein Event auslösen, wodurch sich dann State in einer drüberliegenden Komponente ändert

## Komponenten-Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

Eventnamen beginnen üblicherweise mit `on`, z.B. `onChange`, `onClose`, ...

## Komponenten-Events

Beispiel:

```jsx
<Rating
  value={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

<img src="assets/rating.png" style="width: 16em" />

## Komponenten-Events

Beispiel für Prop-Types einer Rating-Komponente:

```tsx
type Props = {
  value: number;
  onChange?: (value: number) => void;
};
```

## Komponenten-Events

```tsx
function Rating({ value, onChange }: Props) {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div className="Rating">
      {starIds.map((id) => (
        <span
          onClick={() => {
            if (onChange) {
              onChange(id);
            }
          }}
          key={id}
        >
          {id <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}
```

## Komponenten-Events

Verwendung einer Rating-Komponente:

```jsx
const [prodRating, setProdRating] = useState(3);
```

```jsx
<Rating
  value={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

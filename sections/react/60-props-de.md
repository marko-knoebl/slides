# Komponenten-Props

## State & Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Props in eigenen Komponenten

Beispiel:

```jsx
<Rating stars={3} />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

## Props in Funktionskomponenten

Beispiel (einfach):

```jsx
const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);
```

oder

```jsx
const Rating = ({ stars }) => (
  <div className="rating">{'*'.repeat(stars)}</div>
);
```

## props.children

Über `props.children` können Inhalte an eine Komponente übergeben werden

Beispiel: `Bordered`-Komponente:

```jsx
<Bordered>lorem ipsum</Bordered>
```

Definition der Komponente:

```jsx
const Bordered = props => (
  <div class="bordered">{props.children}</div>
);
```

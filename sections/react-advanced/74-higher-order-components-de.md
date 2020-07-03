# Higher-order components

### Funktionen, die eine Komponentendefinition verändern

## Higher-order components

verwirrende Terminologie:

Eine _higher-order component_ (HOC) ist **keine** Komponente 😲

Eine HOC ist eine Funktion, die eine Komponentendefinition verändert / erweitert (ein "Komponenten-Decorator")

## Higher-order components

Beispiel:

Reacts `memo` ist eine HOC

Es erhält eine Komponente und gibt eine memoisierte Komponente zurück:

```js
const MemoizedRating = memo(Rating);
```

## Higher-order components

Beispiel:

`connect` aus _react-redux_ gibt eine HOC zurück:

```js
// connector is a HOC
const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
```

Die entstehende HOC erhält eine normale Komponente und gibt eine Komponente zurück, die mit dem Redux Store verbunden ist:

```js
const RatingContainer = connector(Rating);
```

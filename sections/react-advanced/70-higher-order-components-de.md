# Higher-order components

### Funktionen, die eine Komponentendefinition verändern

## Higher-order components

verwirrende Terminologie:

Eine _higher-order component_ (HOC) ist **keine** Komponente 😲

HOCs sind Funktionen, die eine Komponentendefinition verändern / erweitern

## Higher-order components

Beispiel:

_React_'s `memo` ist eine HOC

Es rehält eine Komponente und gibt eine memoisierte Komponente zurück:

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

Die entstehende HOC rehält eine normale Komponente und gibt eine Komponente zurück, die mit dem Redux Store verbunden ist:

```js
const RatingContainer = connector(Rating);
```

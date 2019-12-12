# React mit Redux: Klassenkomponenten

## Container-Komponenten

`connect`-Funktion aus `react-redux`:

- wird zum Erstellen einer Container-Komponente verwendet
- die einzige Aufgabe der Container-Komponente ist es, ihre Unterkomponente mit dem Redux Store zu verbinden

## Container-Komponenten

`connect`: verbindet React-Komponenten mit dem Redux Store

- `mapStateToProps`: verbindet React props mit dem Redux state
- `mapDispatchToProps`: verbindet React props/events mit Redux actions

Aufruf von `connect`:

```js
import { connect } from 'react-redux';

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

## Beispiel

Wir verbinden eine einfache `NumberInput`-Komponente mit dem Redux Store

```js
const NumberInput = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <button onClick={onDecrement}>-</button>
    {value}
    <button onClick={onIncrement}>+</button>
  </div>
);
```

## Beispiel

Interface der `NumberInput`-Komponente:

- property: `value`
- event: `onIncrement`
- event: `onDecrement`

Redux Store:

- state-Eintrag: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Beispiel

mit dem Redux State verbinden:

```jsx
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.fontSize,
});

const FontSizeInput = connect(mapStateToProps)(NumberInput);
```

## Beispiel

mit Redux Actions verbinden:

```js
// dispatch refers to the dispatch function of the store;
// it is provided to us via dependency injection
const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: 'increaseFontSize' }),
  onDecrement: () => dispatch({ type: 'reduceFontSize' }),
});

const FontSizeInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput);
```

## Counter: Dispatch mit TypeScript

```ts
import { Action, Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch<MyAction>
) => ({
  onIncrement: () => dispatch({ type: 'increaseFontSize' }),
  onDecrement: () => dispatch({ type: 'reduceFontSize' }),
});
```

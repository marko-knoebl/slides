# React mit Redux: Container-Komponenten

## Container-Komponenten

Oft sinnvolle Einteilung:

**presentational components**:

- "normale" React-Komponenten, die unabhängig von Redux funktionieren
- interagieren nur mit ihrer Elternkomponente
- einfach wiederzuverwenden

**container components**:

- Komponenten, die mit dem Redux Store interagieren
- Aufgabe ist das Rendern von Unterkomponenten

## Container-Komponenten

Beispiel:

Allgemeine `TodoList`-Komponente mit folgenden Props/Events:

- `todos`
- `onToggle`
- `onDelete`

`TodoListContainer`-Komponente, die die `TodoList`-Komponente mit dem Redux-Store verbindet:

- Props von `TodoList` erhalten Werte aus dem State des Redux Stores
- Events von `TodoList` lösen im Redux Store Actions aus

## Container-Komponenten

Manuelle Verbindung:

```js
const TodoListContainer = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <TodoList
      todos={todos}
      onToggle={(id) =>
        dispatch({ type: 'toggle', payload: id })
      }
      onDelete={(id) =>
        dispatch({ type: 'delete', payload: id })
      }
    />
  );
};
```

## Container-Komponenten

Verbindung mittels `connect`:

```js
import { connect } from 'react-redux';

const TodoListContainer = connect(
  (state) => ({ todos: state }),
  (dispatch) => ({
    onToggle: (id) =>
      dispatch({ type: 'toggle', payload: id }),
    onDelete: (id) =>
      dispatch({ type: 'delete', payload: id }),
  })
)(TodoList);
```

## Container-Komponenten

Verbindung mittels `connect`:

`connect` erhält zwei Funktionen als Argumente; diese können auch separat definiert sein und tragen meist die Namen `mapStateToProps` und `mapDisptachToProps`:

```js
import { connect } from 'react-redux';

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

## Beispiel

Wir verbinden eine einfache `NumberInput`-Komponente mit dem Redux Store:

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

Interface des Redux Stores:

- state-Eintrag: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Beispiel (manuell)

```js
import { useSelector, useDispatch } from 'react-redux';

const FontSizeInput = () => {
  const fontSize = useSelector(
    (state) => state.ui.fontSize
  );
  const dispatch = useDispatch();

  return (
    <NumberInput
      value={fontSize}
      onIncrement={dispatch({ type: 'increaseFontSize' })}
      onDecrement={dispatch({ type: 'reduceFontSize' })}
    />
  );
};
```

## Beispiel (via connect)

```js
const FontSizeInput = connect(
  (state) => ({
    value: state.fontSize,
  }),
  (dispatch) => ({
    onIncrement: () =>
      dispatch({ type: 'increaseFontSize' }),
    onDecrement: () => dispatch({ type: 'reduceFontSize' }),
  })
)(NumberInput);
```

# React with Redux: container components

## Container components

distinction that can be useful:

**presentational components**:

- "regular" React components that are unaware of the Redux store
- interact with their parent component normally
- easily reusable

**container components**:

- components that interact with the Redux store
- main role is to render subcomponents and connect them to the Redux store

## Container components

example:

generic React `TodoList` component with these props/events:

- `todos`
- `onToggle`
- `onDelete`

`TodoListContainer` component which connects the `TodoList` component with the Redux store:

- props of `TodoList` receive values from the Redux store's state
- events of `TodoList` trigger actions in the Redux store

## Container components

manual connection:

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

## Container components

The `connect` function:

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

## Container components

The `connect` function:

`connect` receives two functions; these functions are often defined separately under the names `mapStateToProps` and `mapDispatchToProps`:

```js
import { connect } from 'react-redux';

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

## Example

We connect a simple `NumberInput` component to the Redux store

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

## Example

interface of the component:

- property: `value`
- event: `onIncrement`
- event: `onDecrement`

interface of the Redux store:

- state entry: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Example (manual)

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

## Example (via connect)

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

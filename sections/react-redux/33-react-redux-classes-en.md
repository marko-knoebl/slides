# React with Redux: class components

## Container components

function `connect` from `react-redux`:

- is used to create container components
- the container component's job is to connect its child component to the Redux store

## Container components

`connect`: connects React components to the Redux store

- `mapStateToProps`: connects React props to Redux state
- `mapDispatchToProps`: connects React props/events to Redux actions

calling connect:

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

component interface:

- property: `value`
- event: `onIncrement`
- event: `onDecrement`

redux store:

- state entry: `fontSize`
- action: `increaseFontSize`
- action: `reduceFontSize`

## Example

connecting to the Redux state:

```jsx
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.fontSize,
});

const FontSizeInput = connect(mapStateToProps)(NumberInput);
```

## Example

connecting to Redux actions:

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

## Example: dispatch with TypeScript

```ts
import { Action, Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch<MyAction>
) => ({
  onIncrement: () => dispatch({ type: 'increaseFontSize' }),
  onDecrement: () => dispatch({ type: 'reduceFontSize' }),
});
```

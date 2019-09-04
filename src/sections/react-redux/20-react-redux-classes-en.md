# React with Redux (with classes)

## React with Redux (with classes)

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

TypeScript: `npm install @types/react-redux`

## Presentational and Container Components

- presentational components: "ordinary" React components (reusable)
- container components: Have access to the redux store / are connected to the Redux store

## React-Redux: < Provider >

Provider: Helps with adding a redux store to a React app

## React-Redux: < Provider >

```js
// index.js
import { Provider } from 'react-redux';

[...]

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
);
```

## Counter: Connect

connect: connects React components to the Redux store

- `mapStateToProps`: connects React props to Redux state
- `mapDispatchToProps`: connects React props to Redux actions

calling connect:

```js
component = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
```

## Counter: Connect (state)

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { count: state.count };
}

[...]
    <div className="App">
      {JSON.stringify(this.props)}
    </div>
[...]

export default connect(mapStateToProps)(App);
```

## Counter: Connect (actions)

```jsx
const mapDispatchToProps = dispatch => {
  // dispatch refers to the dispatch function of the store;
  // it is provided to us via dependency injection.
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};
```

```xml
<button onClick={this.props.increment}>+</button>
<button onClick={this.props.decrement}>-</button>
```

## Counter: Dispatch with TypeScript

```ts
import { Action, Dispatch } from 'redux';

interface MyAction extends Action {
  payload: any;
}

const mapDispatchToProps = (
  dispatch: Dispatch<MyAction>
) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT', payload: 1 });
  },
});
```

## Redux with TypeScript

see https://github.com/piotrwitek/react-redux-typescript-guide

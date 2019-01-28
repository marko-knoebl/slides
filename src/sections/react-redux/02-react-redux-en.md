# React with Redux

---

## React with Redux

https://redux.js.org/basics/usage-with-react

Setup: `npm install redux react-redux`

TypeScript: `npm install @types/react-redux`

---

## Presentational and Container Components

- presentational components: "Ordinary" React components (reusable)
- container components: Have access to the redux store / are connected with the Redux store

---

## React-Redux: < Provider >

Provider: Helps in adding a redux store to a React App

---

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

---

## Redux devtools

Browser-plugin:

https://github.com/zalmoxisus/redux-devtools-extension

---

## Redux devtools

include via:

```js
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// typescript: (window as any)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware())
);
```

---

## Counter: Connect

connect: connects React components with the Redux store

- mapStateToProps: connects React props to Redux state
- mapDispatchToProps: connects React props to Redux actions

calling connect:

```js
component = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
```

---

## Counter: Connect (state)

```jsx
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { count: state };
}

[...]
    <div className="App">
      {JSON.stringify(this.props)}
    </div>
[...]

export default connect(mapStateToProps)(App);
```

---

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

---

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

---

## Redux mit TypeScript

siehe https://github.com/piotrwitek/react-redux-typescript-guide

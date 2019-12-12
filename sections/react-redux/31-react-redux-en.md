# React with Redux

## React with Redux

npm packages:

- `react-redux`
- `@types/react-redux`

## React with Redux: &lt;Provider&gt;

Provider: is used to add a Redux store to a React app

## React-Redux: &lt;Provider&gt;

```js
// index.js
import { Provider } from 'react-redux';

[...]

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
  ...
);
```

## Presentational and container components

distinction that can be useful:

**presentational components**:

- "regular" React components that are unaware of the Redux store
- interact with their parent component normally
- easily reusable

**container components**:

- components that interact with the Redux store
- main role is to render subcomponents and connect them to the Redux store

## Presentational and Container Components

example:

generic React `TodoList` component that can be used to render any list of todos

`TodoListContainer` component which retrieves data from the Redux store and renders a `TodoList` component

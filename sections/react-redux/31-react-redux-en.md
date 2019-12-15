# React with Redux

## React with Redux

npm packages:

- `react-redux`
- `@types/react-redux`

## React with Redux: &lt;Provider&gt;

Provider: is used to add a Redux store to a React app

All sub-components of the provider can access the store

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

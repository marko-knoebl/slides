# React mit Redux

## React mit Redux

npm Pakete:

- `react-redux`
- `@types/react-redux`

## React-Redux: &lt;Provider&gt;

Provider: zum Hinzufügen eines Redux-Stores zu einer React-App

Alle Unterkomponenten des Providers haben Zugriff auf den Store

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

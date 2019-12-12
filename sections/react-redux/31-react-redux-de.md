# React mit Redux

## React mit Redux

npm Pakete:

- `react-redux`
- `@types/react-redux`

## React-Redux: &lt;Provider&gt;

Provider: zum Hinzufügen eines Redux-Stores zu einer React-App

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

## Presentational components / container components

Oft sinnvolle Einteilung:

**presentational components**:

- "normale" React-Komponenten, die unabhängig von Redux funktionieren
- interagieren nur mit ihrer Elternkomponente
- einfach wiederzuverwenden

**container components**:

- Komponenten, die mit dem Redux Store interagieren
- Hauptaufgabe ist das Rendern von Unterkomponenten

## Presentational components / container components

Beispiel:

Allgemeine `TodoList`-Komponente, die beliebige über Props übergebene Todos rendern kann

`TodoListContainer`-Komponente, die Daten aus dem Redux Store ausliest und eine `TodoList`-Komponente rendert

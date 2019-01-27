# Context

---

## Context

Möglichkeit, Werte aus einer Komponente direkt allen weiter unten im Dokumentenbaum liegenden Komponenten zur Verfügung zu stellen - ohne den state über jede Ebene übergeben zu müssen

---

## Context

zwei Elemente:

- `Provider`: stellt Werte zur Verfügung
- `Consumer`: verwendet diese Werte (kann weit unten in der Komponentenhierarchie liegen)

---

## Context

Das Interface von Context kann sowohl Daten (aus dem State) als auch Eventhandler übergeben.

---

## Context - Beispiel: Provider

```jsx
const MyContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <MyContext.Provider
        value={{
          todos: this.state.todos,
          onToggle: this.handleToggle,
        }}>
        <TodoList />
      </MyContext.Provider>
    );
  }
}
```

---

## Context - Beispiel: Consumer

```jsx
class TodoList extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div>
            {JSON.stringify(context)}
            <button onClick={() => context.onToggle(2)} />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
```

# Side Effects in Klassenkomponenten

## Side Effects in Klassenkomponenten

Drei wichtige Methoden zum Abfragen von Ereignissen im Lebenszyklus einer Komponente:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Side Effects in Klassenkomponenten

`componentDidUpdate` bekommt die vorhergehenden Props als Parameter übergeben:

```js
class MyComponent extends Component {
  // ...
  componentDidUpdate(prevProps, prevState) {
    if (this.state.foo !== prevState.foo) {
      doSomething();
    }
  }
}
```

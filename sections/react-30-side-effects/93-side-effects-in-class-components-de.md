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

## Side Effects in Klassenkomponenten

Beispiel: Komponente, die Wechselkurse zwischen zwei Währungen lädt:

```js
class ExchangeRate extends Component {
  // ...
  componentDidMount() {
    this.loadExchangeRate();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.from !== prevState.from ||
      this.state.to !== prevState.to
    ) {
      this.loadExchangeRate();
    }
  }
}
```

## Side Effects in Klassenkomponenten

Erweitertes Beispiel: Abbrechen veralteter API-Anfragen

```js
class ExchangeRate extends Component {
  // ...
  componentDidMount() {
    this.loadExchangeRate();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.from !== prevState.from ||
      this.state.to !== prevState.to
    ) {
      this.cancelPreviousQuery();
      this.loadExchangeRate();
    }
  }
  componentWillUnmount() {
    this.cancelPreviousQuery();
  }
}
```

# Side effects in class components

## Side effects in class components

three main lifecycle methods that can be implemented in a component class:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Side effects in class components

`componentDidUpdate` will receive the previous props and previous state as parameters:

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

## Side effects in class components

example: component that loads the exchange rate between two currencies

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

## Side effects in class components

extended example: cancelling outdated API queries

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

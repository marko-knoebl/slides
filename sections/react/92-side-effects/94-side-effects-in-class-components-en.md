# Side effects in class components

## Component lifecycle methods

three main lifecycle methods that can be implemented in a component class:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Component lifecylcle methods

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

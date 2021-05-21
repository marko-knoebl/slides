# Component lifecycle

## Component lifecycle

three main lifecycle methods that can be implemented in a component class:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.value;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.props.value;
  }

  render() {
    return null;
  }
}
```

## Example: Clock component

```jsx
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }
```

## Example: Clock component

```jsx
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
```

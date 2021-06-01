# Examples and Exercises

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

implementation as a function component:

```jsx
function DocumentTitle(props) {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);

  return null;
}
```

## Example: DocumentTitle component

implementation as a class component:

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.value;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.title !== prevProps.title) {
      document.title = this.props.value;
    }
  }
  render() {
    return null;
  }
}
```

## Example: Clock component

partial implementation of a clock component as a class component:

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

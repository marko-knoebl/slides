# Examples and Exercises

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

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

## Example: DocumentTitle component

implementation as a function component:

```jsx
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

(will work correctly, but will show a warning concerning _exhaustive dependencies_)

## Example: DocumentTitle component

implementations that don't show a warning:

```jsx
function DocumentTitle(props) {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);
  return null;
}
```

```jsx
function DocumentTitle(props) {
  const updateTitle = useCallback(() => {
    document.title = props.value;
  }, [props.value]);
  useEffect(updateTitle, [updateTitle]);
  return null;
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

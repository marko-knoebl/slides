# Examples and exercises

## Examples and exercises

Examples and exercises for use cases that don't interact with APIs

## Example: persistent counter

Counter that saves its value to localStorage whenever the value changes:

```jsx
function PersistentCounter() {
  const [count, setCount] = useState(null);
  function loadCount() {
    const lsCount = localStorage.getItem('count');
    if (lsCount !== null) {
      setCount(Number(lsCount));
    } else {
      setCount(0);
    }
  }
  function saveCount() {
    if (count !== null) {
      localStorage.setItem('count', count);
    }
  }
  useEffect(loadCount, []);
  useEffect(saveCount, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Exercises

Exercise: save the state of one of the previous applications (e.g. slideshow) to _localStorage_

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

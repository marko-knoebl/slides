# Beispiele und Übungen

## Beispiele und Übungen

Beispiele und Übungen, die nicht mit APIs interagieren

## Beispiel: Counter

Counter, der seinen Wert in localStorage speichert, wenn sich dieser ändert:

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

## Übungen

Übung: Speichere den state einer der vorigen Anwendungen, (z.B. slideshow) in _localStorage_

## Exercises

Exercise: save the state of one of the previous applications (e.g. slideshow) to _localStorage_

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

Implementierung als Klassenkomponente:

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

## Beispiel: DocumentTitle-Komponente

Implementierung als Funktionskomponente:

```jsx
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

(funktioniert wie gewünscht, aber zeigt eine Warnung bezüglich _exhaustive dependencies_)

## Beispiel: Clock-Komponente

Teil der Implementierung einer Clock-Komponente als Klassenkomponente:

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

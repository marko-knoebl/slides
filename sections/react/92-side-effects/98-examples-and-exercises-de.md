# Beispiele und Übungen

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

Implementierung als Funktionskomponente:

```jsx
function DocumentTitle(props) {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);

  return null;
}
```

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

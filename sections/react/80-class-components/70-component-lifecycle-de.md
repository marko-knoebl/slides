# Komponenten-Lebenszyklus

## Komponenten-Lebenszyklus

Drei wichtige Methoden zum Abfragen von Ereignissen im Lebenszyklus einer Komponente:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

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

## Beispiel: Clock-Komponente

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

## Beispiel: Clock-Komponente

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

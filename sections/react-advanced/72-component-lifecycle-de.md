# Komponenten-Lebenszyklus

## Komponenten-Lebenszyklus

In React können bestimmte Ereignisse im Lebenszyklus einer Komponente abgefragt werden. Insbesondere sind folgende Ereignisse oft von Interesse:

- die Komponente wurde neu eingebunden
- state oder props der Komponente haben sich geändert
- die Komponente wird entfernt

## Komponenten-Lebenszyklus

Die Ereignisse können wie folgt abgefragt werden:

In funktionalen Komponenten mittels `useEffect`

In Klassenkomponenten mittels Lebenszyklus-Methoden, wie `componentDidMount`, `componentDidUpdate` oder `componentWillUnmount`

## Komponenten-Lebenszyklus

Einsatzgebiete der genannten Ereignisse:

- Abfragen von APIs
- manuelle Änderungen am DOM
- Aufräumen vor dem Entfernen einer Komponente

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

mit useEffect

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.value;
  }, [props.value]);
  return null;
};
```

## useEffect im Detail

`useEffect` bekommt zwei Parameter übergeben: Eine Funktion und ein Array von Werten.

Die Funktion nach dem Rendering einer Komponente ausgeführt, wenn sich einer der Werte geändert hat.

Die Funktion wird auch ausgeführt, wenn die Komponente neu eingebunden und zum ersten Mal gerendert wurde.

## useEffect im Detail

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

## useEffect im Detail

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese wird z.B. vor dem Entfernen einer Komponente aufgerufen

## useEffect: Entfernen einer Komponente

```jsx
const Clock = () => {
  const [time, setTime] = useState('');
  // will be called when the component was mounted
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // will be called when the component will be removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{time}</div>;
};
```

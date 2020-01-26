# Komponenten-Lebenszyklus

## Komponenten-Lebenszyklus

In React können bestimmte Ereignisse im Lebenszyklus einer Komponente abgefragt werden. Insbesondere sind folgende Ereignisse oft von Interesse:

- die Komponente wurde neu eingebunden
- state oder props der Komponente haben sich geändert
- die Komponente wird entfernt

## Komponenten-Lebenszyklus

Einsatzgebiete der genannten Ereignisse:

- Abfragen von APIs
- manuelle Änderungen am DOM
- Aufräumen vor dem Entfernen einer Komponente

## Komponenten-Lebenszyklus

Die Ereignisse können wie folgt abgefragt werden:

In Klassenkomponenten mittels Lebenszyklus-Methoden:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

In funktionalen Komponenten mittels `useEffect`

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle>my custom title</DocumentTitle>
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

mit useEffect

```jsx
const DocumentTitle = props => {
  useEffect(() => {
    document.title = props.children;
  });

  return null;
};
```

## useEffect im Detail

`useEffect` bekommt zwei Parameter übergeben: Eine Funktion und ein Array von Werten.

Die Funktion nach dem Rendering einer Komponente ausgeführt, wenn sich einer der Werte geändert hat.

Die Funktion wird auch ausgeführt, wenn die Komponente neu eingebunden und zum ersten Mal gerendert wurde.

## useEffect im Detail

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

Wenn ein leeres Array als zweiter Parameter übergeben wird, wird die Funktion nur nach dem ersten Rendering ausgeführt.

Es gibt auch die Möglichkeit, eine Funktion zu definieren, die vor dem _Entfernen_ einer Komponente aufgerufen wird (mehr dazu später).

## useEffect: Beispiel: Weather

```js
const [weatherData, setWeatherData] = useState(null);
const [stale, setStale] = useState(true);

// fetch data whenever data is stale
useEffect(() => {
  if (stale) {
    refetch();
  }
}, [stale]);
```

## useEffect: Beispiel: Weather

```js
const refetch = () => {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather' +
      `?q=${city}&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      setWeatherData({ temperature: data.main.temp });
      setStale(false);
    });
};
```

## useEffect: Entfernen einer Komponente

```jsx
const Clock = () => {
  ...
  // wird aufgerufen, wenn die Komponente eingebunden wird
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // wird aufgerufen, wenn die Komponente entfernt wird
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  ...
};
```

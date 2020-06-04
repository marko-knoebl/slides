# Effect Hook

## Effect Hook

kann verwendet werden, um bestimmte Aktionen zu setzen, wenn eine Komponente neu eingebunden wurde oder wenn ihre Props / State sich geändert haben

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect Hook

Kann verwendet werden, um Nebeneffekte (side effects) auszulösen:

- Abfragen von APIs
- manuelle Änderungen am DOM
- Timer starten
- ...

## Beispiel: DocumentTitle-Komponente

Wir erstellen eine Komponente, die den Dokumenttitel dynamisch setzen kann:

```xml
<DocumentTitle value="my custom title" />
```

Diese Komponente kann irgendwo in der React-Anwendung vorkommen.

## Beispiel: DocumentTitle-Komponente

```jsx
const DocumentTitle = props => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Effect Hook: Cleanup

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese Funktion wird aufgerufen, wenn z.B. die Komponente entfernt wird

## Effect Hook: Cleanup

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

## Effect hook: nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

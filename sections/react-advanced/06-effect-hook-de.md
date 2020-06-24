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
const DocumentTitle = (props) => {
  const updateTitle = () => {
    document.title = props.value;
  };
  useEffect(updateTitle, [props.value]);
  return null;
};
```

## Cleanup

Ein Effect kann eine "Aufräumfunktion" zurückgeben

Diese Funktion wird vor der nächsten Ausführung des Effekts bzw vor dem Unmounting der Komponente ausgeführt

Beispiel für Verwendung: Abbrechen einer alten API-Suchanfrage, wenn sich der Suchbegriff geändert hat

## Cleanup

Beispiel: Hook, der eine hackernews-API-Abfrage durchführt

```jsx
const useHackernewsQuery = (query) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let isLatestRequest = true;
    fetch(
      'https://hn.algolia.com/api/v1/search?query=' + query
    )
      .then((res) => res.json())
      .then((data) => {
        if (isLatestRequest) {
          setData(data);
        }
      });
    return () => {
      isLatestRequest = false;
    };
  }, [query]);
  return articles;
};
```

## Cleanup

Beispiel: Benutzer wird nach 10 Sekunden Inaktivität automatisch ausgeloggt

```jsx
const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(
    new Date()
  );
  // restart the logout timer on user interaction
  useEffect(() => {
    const logout = () => setLoggedIn(false);
    const timeoutId = setTimeout(logout, 10000);
    return () => clearTimeout(timeoutId);
  }, [lastInteraction]);
  return (
    <button onClick={() => setLastInteraction(new Date())}>
      {loggedIn
        ? 'click to stay logged in'
        : 'logged out automatically'}
    </button>
  );
};
```

## Effect nach jedem Rendering

Wenn kein zweiter Parameter übergeben wird, wird die Funktion nach jedem Rendering ausgeführt.

```jsx
const RenderLogger = () => {
  useEffect(() => {
    console.log('logger was rendered');
  });
  return <div>Render logger</div>;
};
```

# Vermeiden von Rerenderings und Eventhandler

## Vermeiden von Rerenderings und Eventhandler

Wenn `Rating` eine "memoisierte" Komponente ist, welche der folgenden Renderings werden beim Re-Rendering der Elternkomponente auch neu gerendert?

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

## Vermeiden von Rerenderings und Eventhandler

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

Die Pfeilfunktion wäre bei jedem angeforderten Rendering ein anderes Objekt

## Vermeiden von Rerenderings und Eventhandler

Lösungen:

- Memoisieren des Eventhandlers
- Übergeben einer `dispatch`-Funktion statt neu definierter Eventhandler
- Definieren des zu übergebenden Eventhanlders in einer Klassenkomponente (soweit möglich)

## Vermeiden von Rerenderings und Eventhandler

Memoisierung von Eventhandlern:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const deleteTodoA = useMemo(
    () => (id) => {
      setTodos((todos) => todos.filter((t) => t.id !== id));
    },
    []
  );

  const deleteTodoB = useCallback((id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }, []);
}
```

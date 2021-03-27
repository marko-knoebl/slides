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

- Übergeben einer `dispatch`-Funktion statt neu definierter Eventhandler
- Definieren des zu übergebenden Eventhanlders in einer Klassenkomponente (soweit möglich)
- Memoisieren des Eventhandlers

## Vermeiden von Rerenderings und Eventhandler

Memoisierung von Eventhandlern:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const todosWithEventHandlers = useMemo(
    () =>
      todos.map((todo) => ({
        ...todo,
        onToggle: () => {
          // ...
        },
      })),
    [todos]
  );
  return (
    <ul>
      {todosWithEventHandlers.map((todo) => (
        <li onClick={todo.onToggle}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Vermeiden von Rerenderings und Eventhandler

Memoisierung eines einzelnen Eventhandlers:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useMemo(
    () => (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```

## Vermeiden von Rerenderings und Eventhandler

verkürzte Memoisierung eines einzelnen Eventhandlers via `useCallback`:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = useCallback(
    (newTitle) => {
      setTodos([
        ...todos,
        { title: newTitle, completed: false },
      ]);
    },
    [todos]
  );
};
```

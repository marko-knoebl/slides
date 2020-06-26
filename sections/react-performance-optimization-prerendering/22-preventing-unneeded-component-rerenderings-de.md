# Vermeiden unnötiger Rerenderings

## Vermeiden unnötiger Rerenderings

Im Allgemeinen muss eine Komponente nur neu gerendert werden, wenn sich entweder props oder state tatsächlich ändern

## Vermeiden unnötiger Rerenderings

in Funktionskomponenten gilt:

- Ein Setzen eines geänderten States bewirkt ein neues Rendering
- Ein erneutes Setzen des gleichen States bewirkt kein neues Rendering
- Ein neues Rendering einer Komponente bewirkt üblicherweise das neue Rendering _aller Unterkomponenten_

## Vermeiden unnötiger Rerenderings

Demo: Komponente rendert sich nur, wenn ihr State sich ändert

```jsx
function Coin() {
  const [coin, setCoin] = useState('heads');
  const throwCoin = () => {
    setCoin(Math.random() > 0.5 ? 'heads' : 'tails');
  };
  return (
    <div>
      {coin}
      <button onClick={throwCoin}>throw</button>
      <div>last rendering: {new Date().toISOString()}</div>
    </div>
  );
}
```

## Vermeiden unnötiger Rerenderings

Das Rerendering einer Komponente löst üblicherweise das Rerendering _aller Unterkomponenten_ aus

\- dies kann optimiert werden!

## Vermeiden unnötiger Rerenderings

Wenn nur jene Unterkomponenten neu gerendert werden sollen, deren props sich geändert haben:

Verwenden von Reacts `memo`-Funktion und des callback Hooks

## Vermeiden unnötiger Rerenderings

Die `memo`-Funktion aus React:

```jsx
import React, { memo } from 'react';

function Rating(props) {
  // ...
}

export default memo(Rating);
```

## Vermeiden unnötiger Rerenderings

Die `Rating`-Komponente wird nicht neu gerendert, wenn ihre Props die gleichen sind wie zuvor:

```jsx
<Rating stars={prodRating} />
<Rating stars={prodRating} onChange={setProdRating} />
```

## Vermeiden unnötiger Rerenderings

Wie ist es mit diesem Event-Listener?

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

Die Pfeilfunktion wäre bei jedem angeforderten Rendering ein anderes Objekt

## Vermeiden unnötiger Rerenderings

Ermöglichen von Memoisation in komplexeren Event Handlern / Callbacks:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (newTitle) =>
    setTodos([
      ...todos,
      { title: newTitle, completed: false },
    ]);
  // useCallback will return the same reference
  // - unless an entry in the passed-in array changes
  const memoizedHandleAddTodo = useCallback(handleAddTodo, [
    todos,
  ]);
  return (
    <div>
      <TodoList todos={todos} />
      <AddTodo onAdd={memoizedHandleAddTodo} />
    </div>
  );
}
```

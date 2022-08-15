# JSX: Elemente wiederholen

## Elemente wiederholen

Mehrere Elemente können via Arrays eingebunden werden:

<!-- prettier-ignore -->
```jsx
const elements = [
  <li>foo</li>,
  <li>bar</li>,
  <li>baz</li>,
];
```

```jsx
<h1>three elements</h1>
<ul>
  {elements}
</ul>
```

## Elemente wiederholen

Beispiel: Auflisten aller Einträge des _React_-Objekts

Codesandbox: https://codesandbox.io/s/react-api-list-tjq60t?file=/src/ReactApiList.tsx

```js
import * as React from 'react';
```

```jsx
const reactApi = [];
for (let entry in React) {
  reactApi.push(<li>{entry}</li>);
}
```

```jsx
<div>
  List of React API entries:
  <ul>{reactApi}</ul>
</div>
```

## Elemente wiederholen

oft werden wiederholte Elemente aus Arrays von Daten via `.map` erstellt:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];

function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## Elemente wiederholen

Bei obigem Code:  
Warnung in der Browser-Konsole (Wegen Effizienz)

Lösung: **key**:

```jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

## Übung

Übung: für die Slideshow, erstelle kleine Vorschaubilder für 5 Bilder (2 vorhergehende, aktuelles, 2 folgende)

Hinweise: möglicher Code, um Vorschau-IDs zu generieren:

```js
const previewIds = [];
for (let i = img - 2; i <= img + 2; i++) {
  if (i >= 0) {
    previewIds.push(i);
  }
}
```

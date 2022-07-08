# JSX: Elemente wiederholen

## Elemente wiederholen

Mehrere Elemente können via Arrays eingebunden werden:

```jsx
const elements = [
  <li>foo</li>,
  <li>bar</li>,
  <li>foobar</li>,
];
```

```jsx
<h1>three elements</h1>
<ul>
  {elements}
</ul>
```

## Elemente wiederholen

Beispiel: Auflisten aller Methoden des _React_-Objekts

Codesandbox: https://codesandbox.io/s/react-api-list-tjq60t?file=/src/ReactApiList.tsx

```jsx
const reactApi = [];
for (let method in React) {
  reactApi.push(<li>{method}</li>);
}
```

```jsx
<div>
  List of React API entries:
  <ul>{reactApi}</ul>
</div>
```

## Elemente wiederholen

oft werden wiederholte Elemente via `.map` erstellt:

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

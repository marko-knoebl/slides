# JSX: repeating elements

## Repeating elements

multiple elements may be added via arrays:

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

## Repeating elements

example: displaying all method names of the _React_ object inside a _ul_ element

codesandbox: https://codesandbox.io/s/react-api-list-tjq60t?file=/src/ReactApiList.tsx

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

## Repeating elements

typically, repeated elements are created via `.map`:

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

## Repeating elements

With the above code:  
warning in the browser console (concerning efficiency)  
solution: **key**:

```jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>
```

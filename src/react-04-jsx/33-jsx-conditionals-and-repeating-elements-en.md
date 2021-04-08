# JSX: conditionals and repeating elements

## JSX: conditionals and repeating elements

- if / else
- if
- repeating elements

## if / else

inline condition:

```jsx
<div>
  {gameActive ? (
    <span>score: {score}</span>
  ) : (
    <span>Game over. Final score: {score}</span>
  )}
</div>
```

## if / else

if / else statement:

```jsx
let statusMessage;
if (gameActive) {
  statusMessage = <span>score: {score}</span>;
} else {
  statusMessage = (
    <span>Game over. Final score: {score}</span>
  );
}

return <div>{statusMessage}</div>;
```

## if

```jsx
<div>{error ? <div>{error.message}</div> : null}</div>
```

## if

shorter version that could be used:

```jsx
<div>{error && <div>error.message</div>}</div>
```

The operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

## Repeating elements

multiple elements may be added via arrays:

```jsx
const elements = [
  <li>alfa</li>,
  <li>bravo</li>,
  <li>charlie</li>,
];
```

```jsx
<h1>three elements</h1>
<ul>
  { elements }
</ul>
```

## Repeating elements

example: displaying all method names of the _React_ object inside a _ul_ element

```jsx
const reactMethods = [];
for (let method in React) {
  reactMethods.push(<li>{method}</li>);
}
```

```jsx
<div>
  React Methods:
  <ul>{reactMethods}</ul>
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

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
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

# JSX: repeating elements

## Repeating elements

multiple elements may be added via arrays:

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

## Repeating elements

example: listing all entries in the _react_ package

codesandbox: https://codesandbox.io/s/react-api-list-tjq60t?file=/src/ReactApiList.tsx

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

## Repeating elements

typically, repeated elements are created from arrays of data via `.map`:

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

## Exercise

exercise: for the slideshow, create small previews for 5 images (2 previous, current, 2 upcoming)

hint: example code for creating preview ids:

```js
const previewIds = [];
for (let i = img - 2; i <= img + 2; i++) {
  if (i >= 0) {
    previewIds.push(i);
  }
}
```

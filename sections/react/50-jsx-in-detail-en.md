# JSX in detail

## JSX in detail

topics:

- attribute names
- repeating elements
- if / else
- if
- whitespace
- comments
- fragments
- valid elements
- compilation

## property names

Some element properties have different names than in HTML (reflecting standard DOM properties)

- `className` (instead of `class`)
- `onClick` (instead of `onclick`)
- `htmlFor` (instead of `for`)

## property names

example: CSS classes

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

there are many helper libraries that will generate the _className_ property dynamically

## style property

In JSX the _style_ property takes an object:

```jsx
<div
  style={{
    backgroundColor: '#333',
    fontSize: getFontSize(),
  }}
/>
```

## JSX: repeating elements

Task: building an HTML list (ul) from this data:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## JSX: repeating elements

Multiple Elements may be added via arrays:

```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const todoElements = [];
  for (let todo of todos) {
    todoElements.push(<li>{todo.title}</li>);
  }
  return <ul>{todoElements}</ul>;
};
```

## JSX: repeating elements

In practice this is mostly done via `.map()`

## JSX: repeating elements

The `.map` method creates a new array by transforming each element in an existing array

example:

```js
const originalNumbers = [2, 3, 4];

const triple = (n) => 3 * n;

const newNumbers = originalNumbers.map(triple);
// [6, 9, 12]
```

## JSX: repeating elements

```jsx
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

## JSX: repeating elements

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

## JSX: if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## JSX: if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

## Whitespace

In HTML the following examples are equivalent (displaying a single space between the images):

<!-- prettier-ignore-start -->

```html
<img src="foo.png"> <img src="bar.png">
```

```html
<img src="foo.png">    <img src="bar.png">
```

```html
<img src="foo.png">
<img src="bar.png">
```

<!-- prettier-ignore-end -->

## Whitespace

rules in JSX:

- whitespace between two elements in one line is interpreted as a single space
- whitespace between two elements on different lines is ignored

<!-- prettier-ignore-start -->

Single space:

```xml
<img src="foo.png" />     <img src="bar.png" />
```

no space:

```xml
<img src="foo.png" />
<img src="bar.png" />
```

<!-- prettier-ignore-end -->

## Whitespace

"force" a space in JSX:

```xml
<img src="foo.png" />{" "}
<img src="bar.png" />
```

## Comments

Comments can be written as JavaScript comments:

```jsx
a = <div>Hello World!{/*this is a comment*/}</div>;
```

## Fragments

Fragments enable returning multiple elements from a component / function:

```jsx
return (
  <>
    <td>Hello</td>
    <td>World</td>
  </>
);
```

## valid elements in JSX

- string
- number
- components (e.g. `<div>`, `<img>`, `<MyComponent>`)
- Arrays of other elements
- null, undefined, true, false (these are not rendered)

## JSX compilation

```jsx
const element = <a href="https://google.com">Google</a>;
```

compiles to:

```js
const element = React.createElement(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

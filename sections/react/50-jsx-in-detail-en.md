# JSX in detail

## JSX in detail

topics:

- properties
- repeating elements
- if / else
- if
- whitespace
- comments
- fragments
- valid elements
- compilation

## Property names

Some element properties have different names than in HTML (sometimes reflecting standard DOM properties)

- `className` (instead of `class`)
- `onClick` (instead of `onclick`)
- `htmlFor` (instead of `for`)

## Property names

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

## Style property

In JSX the _style_ property takes an object:

```jsx
<div
  style={{
    backgroundColor: '#333',
    fontSize: getFontSize(),
  }}
/>
```

The _style_ property is mostly used for values that may change dynamically

## Repeating elements

Task: building an HTML list (ul) from this data:

```js
const initialTodos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];
```

## Repeating elements

Generating an array of JSX elements via `.map`:

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

## if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## if / else

```jsx
let face;
if (Math.random() > 0.5) {
  face = 'heads';
} else {
  face = 'tails';
}

return <div>{face}</div>;
```

## if

```jsx
<div>{state.hasError && state.errorMessage}</div>
```

The operator `&&` in JavaScript:

```js
true && 'my message'; // 'my message'

false && 'my message'; // false
```

## Whitespace

In HTML the following examples are equivalent (displaying a single space between the images):

<!-- prettier-ignore-start -->

```html
<img src="foo.png" /> <img src="bar.png" />
```

```html
<img src="foo.png" />    <img src="bar.png" />
```

```html
<img src="foo.png" />
<img src="bar.png" />
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

XML elements are compiled to calls to:

- `_jsx()` (React 17)
- `React.createElement()` (React 16 - `React` must be imported when writing JSX)

## JSX compilation

```jsx
const element = <a href="https://google.com">Google</a>;
```

compiles to:

```js
const element = _jsx(
  'a',
  { href: 'https://google.com' },
  'Google'
);
```

## JSX compilation

```jsx
const element = (
  <MyComponent prop1={1} prop2={2}>
    <div>test 1</div>
    <div>test 2</div>
  </MyComponent>
);
```

compiles to:

```js
const element = _jsx(
  MyComponent,
  { prop1: 1, prop2: 2 },
  _jsx('div', null, 'test 1'),
  _jsx('div', null, 'test 2')
);
```

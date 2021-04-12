# React

## Major topics

- state (declarative rendering)
- JSX (template language)
- components (custom HTML tags)

## Topics in detail

- overview and simple example
- JavaScript basics for React
- state
- JSX
- inputs and forms
- VS Code and React projects
- React developer tools
- React and TypeScript
- Components
- Querying APIs

# React overview

## What is React?

one of the 3 big JavaScript UI libraries / frameworks (besides Angular, Vue.js)

## Basics of modern JavaScript UI libraries

- declarative
- component-based

## Declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

## Component-based

- "custom" HTML-Tags
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

## Example: components and state in a todo app

<img src="assets/todo-components-state.svg" />

## Example: props and events in a todo app

<img src="assets/todo-components-state-props-events.svg" />

## What makes React special?

- JavaScript-based template syntax: JSX
- explicit state changes via setters
- immutable (unchangeable) state objects

## History of React

- open-sourced by Facebook in 2013
- February 2019: React 16.8: introduction of _hooks_
- August 2020: React 17: no big changes
- upcoming additions: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) and [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

# Online editors

## Online editors

recommended:

<https://codesandbox.io>

- has templates for _React_ and _React TypeScript_
- based on _VS Code_
- Prettier-based formatting via _Shift_ + _Alt_ + _F_
- hosting under e.g. _<https://abcde.csb.app>_

## Online editors

other options:

- Glitch: <https://glitch.com/edit/#!/remix/starter-react-template>
- CodePen: <https://reactjs.org/redirect-to-codepen/hello-world>

# Basic example: slideshow

## Basic example: slideshow

example _slideshow_ app that demonstrates:

- component definition as a function
- component state (image id)
- JSX template language: mix of JavaScript and XML

## Basic example: slideshow

```jsx
import { useState } from 'react';

const baseUrl = 'https://picsum.photos/300/200?image=';
function SlideshowApp() {
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
export default SlideshowApp;
```

can be tried on <https://codesandbox.io>

## Basic example: slideshow

```jsx
function SlideshowApp() {
  // ...
}
```

A component is defined as a function that returns an XML tree

The function is called every time the component needs to be (re-)rendered

## Basic example: slideshow

<!-- prettier-ignore -->

```jsx
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
```

A component can have internal state entries

`useState` returns the current state entry and a corresponding setter on every render

Other values (like `imgUrl`) can be derived from the state values

## Basic example: slideshow

<!-- prettier-ignore -->

```jsx
  return (
    <div>
      ...
    </div>
  );
```

An XML tag switches from JavaScript to XML mode

## Basic example: slideshow

<!-- prettier-ignore -->

```jsx
      <h1>Image {img}</h1>
```

A curly brace switches back to JavaScript

## Basic example: slideshow

<!-- prettier-ignore -->

```jsx
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
```

Event handlers can be defined as JavaScript functions

# JavaScript basics for React

## JavaScript basics for React

- JavaScript standardization and versions
- imports and exports
- arrow functions
- template literals and tagged template literals
- automatic semicolon insertion
- destructuring assignment
- spread syntax
- optional chaining
- map and filter

## JavaScript standardization

JavaScript is standardized under the name [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/)

## JavaScript versions

_ES5_: Supported by all browsers, including Internet Explorer (standardized in 2009)

Since 2015: yearly updates in June of each year (ES2015, ES2016, ...)

Common practice: Modern JavaScript is transpiled to older versions with better support (via Babel, webpack)

## Imports and exports

named imports and exports:

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };
```

```js
// index.js
import { foo, bar } from 'mymodule.js';
```

## Imports and exports

there may be one default export

```js
// mymodule.js
const foo = 1;
const bar = 2;
const baz = 3;

export { foo, bar, baz };

const main = 0;

export default main;
```

```js
// index.js
import main, { foo, bar } from 'mymodule.js';
```

## Imports in webpack

Bundlers like webpack can deviate from standard JavaScript import behavior:

- the import does not require a file name extension like `.js`
- if the import leads to a folder webpack will look for an `index.js` file in the folder

## Arrow functions

- short notation for anonymous functions
- leaves _this_ unchanged (does not reassign)

```js
const multiply = (a, b) => {
  return a * b;
};

const multiply = (a, b) => a * b;
```

## Arrow functions

if we want to return an object directly: wrap it in parentheses

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## Template literals

- syntax for _creating_ strings
- delimited via backticks
- enables multiline string literals and interpolation

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## Tagged template literals

**Tagged** template literals enable additional processing when values are included

use cases:

- escaping values from "unsafe" sources
- changing indentation
- including styles in React
- ...

## Tagged template literals

example: escaping HTML

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

result:

```html
<div>I &lt;3 U</div>
```

Note: React will automatically escape HTML, so we don't need to use this function with React

## The semicolon in JavaScript

The semicolon for ending statements is mostly optional in JavaScript (_automatic semicolon insertion_)

<!-- prettier-ignore -->

```js
const a = 3
console.log(a)
```

is treated as:

```js
const a = 3;
console.log(a);
```

## The semicolon in JavaScript

Sometimes the behavior is not as intended:

<!-- prettier-ignore -->

```jsx
const Foo = () => {
  return
    <div>
      <h1>some content</h1>
    </div>;
};
```

would be treated as:

```jsx
const Foo = () => {
  return;
  <div>
    <h1>some content</h1>
  </div>;
};
```

## Destructuring assignment

```js
const [result, errors] = someComputation();

// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## Destructuring assignment

```js
const person = { name: 'John', age: 48 };
const { name, age } = person;

const TodoItem = ({ title, completed }) => (
  <div>
    {completed ? 'DONE: ' : 'TODO: '}
    {title}
  </div>
);
```

## Spread syntax (arrays and objects)

```js
const squares = [1, 4, 9];
const moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

```js
const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 31,
};
const newPerson = { ...person, email: 'j@d.com', age: 32 };
// {firstName: 'Joe', lastName: 'Doe', email: 'j@d.com', age: 32}
```

## Optional chaining

example for _optional chaining_:

```js
const userNickname = user?.nickname;
```

if `user` is defined, get its `.nickname` property, otherwise use `undefined`

"conventional" long form:

```js
const userNickname = user ? user.nickname : undefined;
```

## Optional chaining

optional chaining with methods calls:

```js
props.onClick?.();
```

if `props.onClick` is defined, call it, otherwise evaluate to `undefined`

## Map and filter

array methods for functional programming

## Map

- modifies each entry in an array via a function
- returns a new array

```js
const myNumbers = [1, 2, 3, 4];

const tripledNumbers = myNumbers.map((n) => 3 * n);
// [3, 6, 9, 12]
```

## Filter

- only keeps specific entries in an array
- uses a function to check entries for a specific condition
- returns a new array

```js
const myNumbers = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;

const evenNumbers = myNumbers.filter(isEven);
// [2, 4]
```

# State

## State

Components may have an internal _state_

The state can be referenced in the template. The view will automatically update if parts of the state are changed.

## State hook

In function components we make use of the _state hook_:

```js
import { useState } from 'react';
```

## State hook

`useState` may be called (repeatedly) inside the component function

- `useState` takes one parameter - the initial state value
- on each call `useState` returns an array with two entries: the current state and a function to set the state to a new value

```js
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Using the minimal state

We should always try to use the _minimal_ state possible (i.e. no redundant data)

Other data can be computed from the minimal state in the component function

Example: For the slideshow, storing the image ID is enough - we don't have to store the entire image URL

## When are state changes applied?

State changes are applied _after_ the event handler function has finished executing

<!-- prettier-ignore -->

```js
  function changeSomeStateEntries() {
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // still 0
    setTitle('Demo');
  }
```

If multiple state changes are triggered by the same event, they will be applied at the same time - the component will only re-render once

## Exercise: Slideshow

Re-implement the slideshow demo we saw before; try not to look at the old code

- show images like `https://picsum.photos/300/200?image=0`
- buttons for _previous_ and _next_
- button for _back to start_

optional:

- prevent the index from becoming negative
- button for _random image_

# Input state

## Input state

In a React application, everything that can change in the UI should be part of the _state_

If we include a simple input element:

```jsx
<input />
```

there would be an aspect of the UI state which would not be captured in the React state.

## Input state

This is how we can capture the value of an input and track it in the state:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Input state

explanation:

```txt
value={inputText}
```

binds from the _state_ to the input value

```txt
onChange={(event) => {
  setInputText(event.target.value);
}}
```

updates the state whenever the input value changes

## Input state

why `event.target.value`?

- `event.target` represents the input element
- `event.target.value` is the new value of the input element

## Input state

Example: Input that also displays the number of characters:

```js
function App() {
  const [text, setText] = useState('');
  const len = text.length;

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>This string has {len} characters.</p>
    </div>
  );
}
```

## Input state

Exercise:

Show two inputs where the user should input matching passwords that are at least 4 characters long.

If both passwords match and are long enough, display "valid" underneath, otherwise display "invalid"

Make sure you store the minimal state

# Immutable state

## Immutable state

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

state should be considered as _immutabe_ (unchangeable)

## Immutable state

When `setState` is called, React will compare:

- the object the old state points to
- the object the new state points to

If the old state and the new state reference the same object (even if it has changed), the component will not be rerendered.

## Immutable state

demo (see <https://codesandbox.io/s/immutable-state-demo-r2x1i>):

```js
function App() {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  return (
    <div>
      <div>{JSON.stringify(numbers)}</div>
      <button
        onClick={() => {
          // invalid - modifies state
          numbers.push(numbers.length);
          setNumbers(numbers);
        }}
      >
        add (mutate)
      </button>
      <button
        onClick={() => {
          // valid - replaces state
          setNumbers([...numbers, numbers.length]);
        }}
      >
        add (replace)
      </button>
    </div>
  );
}
```

## Immutable state

good:

```js
const randomize = () => {
  const newImages = [];
  for (let i = 0; i < 5; i++) {
    newImages.push(Math.floor(Math.random() * 100));
  }
  setImages(newImages);
};
```

bad:

```js
const randomize = () => {
  for (let i = 0; i < 5; i++) {
    images[i] = Math.floor(Math.random() * 100);
  }
  setImages(images);
};
```

## Data management without mutations: Arrays

initial data:

```js
const names = ['Alice', 'Bob', 'Charlie'];
```

**mutation**: this modifies the original array

```js
names.push('Dan');
```

**no mutation**: creates a new array (spread syntax)

```js
const newNames = [...names, 'Dan'];
```

## Data management without mutations: Objects

initial data:

```js
const user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**mutation**: this modifies the object

```js
user.email = 'johndoe@gmail.com';
```

**no mutation**: creates a new object (spread syntax)

```js
const newUser = { ...user, email: 'johndoe@gmail.com' };
```

# Data management without mutations

NOTE:

topics: functional programming / data management without mutations / array methods

## Data management without mutations

topics:

- creating derived variants from arrays and objects
- array methods: `.map()` and `.filter()`

## Data management without mutations

- adding properties to a an object
- adding entries to an array
- removing entries from an array
- changing entries in an array
- changing individual properties of an object

## Data management without mutations

- adding properties to a an object (_spread syntax_)
- changing individual properties of an object (_spread syntax_)
- adding elements to an array (_spread syntax_)
- removing elements from an array (_filter_)
- changing elements in an array (_map_)

## Data management without mutations

```js
const todo1 = { title: 'foo', completed: false };

const todo2 = withCompletedToggled(todo1);
// { title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, 'bar');
// { title: 'bar', completed: true}
```

## Data management without mutations

```js
const todos1 = [
  { title: 'foo', completed: false },
  { title: 'bar', completed: true },
];

const todos2 = withUniqueIdsAdded(todos1);
const todos3 = withNewTodoAdded(todos2, 'baz');
const todos4 = withCompletedTodosRemoved(todos3);
const todos5 = withTodoToggled(todos4, 1);
console.log(todos5);

/*
[
  { id: 1, title: "foo", completed: true },
  { id: 3, title: "baz", completed: false },
]
*/
```

## Data management without mutations

```js
const withCompletedToggled = (todo) => ({
  ...todo,
  completed: !todo.completed,
});
```

```js
const withTitleChanged = (todo, newTitle) => ({
  ...todo,
  title: newTitle,
});
```

```js
const withNewTodoAdded = (todos, newTitle) => {
  let maxId = 0;
  for (let todo of todos) {
    maxId = Math.max(maxId, todo.id);
  }
  return [
    ...todos,
    { id: maxId + 1, title: newTitle, completed: false },
  ];
};

const withUniqueIdsAdded = (todos) => {
  const newTodos = [];
  let id = 0;
  for (let todo of todos) {
    id++;
    newTodos.push({ ...todo, id: id });
  }
};

const withCompletedTodosRemoved = (todos) =>
  todos.filter((todo) => !todo.completed);

const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? withCompletedToggled(todo) : todo
  );

const withTodoToggled = (todos, id) =>
  todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
```

# JSX

## JSX

JSX = template language of React

- **&lt;** switches from JS to XML/HTML
- **{** switches back to JS

## Using JSX

for React &lt; 17, we need to import the `React` object in order to write _JSX_:

```js
import React from 'react';
```

## Valid elements in JSX

- string
- number
- components (e.g. `<div>`, `<img>`, `<MyComponent>`)
- Arrays of other elements
- null, undefined, true, false (these are not rendered)

# JSX: binding content, properties and events

## Binding content

we can include _numbers_ and _strings_ as basic types:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

## Binding properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note: no quote characters around the value of _href_

## Binding events

```jsx
function sayHello() {
  alert('hello world');
}
```

```jsx
<button onClick={() => sayHello()}>Say Hello</button>
```

list of browser events:
<https://www.w3schools.com/jsref/dom_obj_event.asp>

## Binding events

note: an event handler must be a **function**, not a function call

OK:

```js
<button onClick={alert}>Say something</button>
```

not OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

## Property and event names

Some element properties have different names than in HTML (sometimes reflecting standard DOM properties)

- `className` (instead of `class`)
- `onClick` (instead of `onclick`)
- `htmlFor` (instead of `for`)

# JSX: whitespace, comments and fragments

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
<div>Hello World!{/* this is a comment */}</div>
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

## Exercise: math trainer

Create a math trainer as demonstrated on <https://8h0os.csb.app/>

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

# JSX and styling basics

## JSX and styling basics

In React, style definitions are usually located close to the component definition

possibilities:

- CSS file with the same base name as the JSX file
- style definition at the top of a component definition file
- inline style definition in the component template

## JSX and styling basics

```js
import './TodoItem.css';
```

```jsx
<li
  className={
    isCompleted ? 'todoitem completed' : 'todoitem'
  }
>
  [...]
</li>
```

there are helper libraries that will generate the _className_ property dynamically

## JSX and styling basics

In JSX the _style_ property takes an object, e.g.:

```jsx
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  display: 'block',
};
```

```jsx
<div style={containerStyle}>
  <h1>Slideshow image {img}</h1>
  <button>prev</button>
  <img style={imageStyle} src="..." alt="..." />
  <button>next</button>
</div>
```

## JSX and styling basics

note:

Binding to the _style_ property directly is inefficient and is usually avoided; in practice, libraries like _styled-components_ or _emotion_ are used to write style declarations inside JavaScript

## JSX and styling basics

basic styling example via the library _emotion_:

```jsx
import { css } from '@emotion/css';
```

```jsx
<div
  className={css`
    display: flex;
    justify-content: center;
  `}
>
  ...
</div>
```

# JSX and security

## JSX and security

when binding _content_, XML tags will be escaped automatically

this will just display plain text content:

```jsx
const userSuppliedValue = 'abc <script>alert()</script>';

element = <div>{userSuppliedValue}</div>;
```

## JSX and security

some attributes - notably _href_ - offer some attack targets

```jsx
<h1>profile</h1>
<p>name: {userName}</p>
<p><a href={userWebsite}>website</a></p>
```

an attacker may have set their website to e.g.: `javascript:alert("foo")`

possible solution: make sure user-supplied external URLs start with _http&#x3A;//_ or _https&#x3A;//_

<small>see also: [article on pragmaticwebsecurity.com](https://pragmaticwebsecurity.com/articles/spasecurity/react-xss-part1.html), [article by Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412), [React pull request with more details](https://github.com/facebook/react/pull/15047)</small>

# JSX: compilation

## JSX: compilation

XML elements are compiled to calls of:

- `_jsx()` (React 17)
- `React.createElement()` (React 16 - `React` must be imported when writing JSX)

## JSX: compilation

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

## JSX: compilation

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

# Forms and inputs

## Form actions

Default behavior of a form when it is submitted: directly send data to the server

Replacing the default behavior:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```

## Input labels

Adding a label for an input without using IDs:

```jsx
<label>
  first name:
  <input
  // ...
  />
</label>
```

# Input types

## Input types

- text
- textarea
- checkbox
- dropdown
- numeric input
- ...

## Input types

text and text area:

```jsx
<input
  value={title}
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>

<textarea
  value={message}
  onChange={(e) => {
    setMessage(e.target.value);
  }}
/>
```

## Input types

checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(e) => setAccept(e.target.checked)}
/>
```

## Input types

dropdown with hard-coded options:

```jsx
<select
  value={unit}
  onChange={(e) => setUnit(e.target.value)}
>
  <option value="px">px</option>
  <option value="em">em</option>
  <option value="%">%</option>
</select>
```

## Input types

dropdown with options from an array:

```jsx
const UnitDropdown = () => {
  const units = ['px', 'em', '%'];
  const [unit, setUnit] = useState(units[0]);
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
    >
      {units.map((u) => (
        <option value={u} key={u}>
          {u}
        </option>
      ))}
    </select>
  );
};
```

## Numeric input fields

The value of a numeric input field should usually be stored as a string (not as a number)

Reasoning: possible contents of a numeric input field (while the user is typing):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numeric inputs with direct "results"

example: keeping the content of a numeric input field as a string, updating an associated numeric value whenever possible:

```jsx
const FontSizeDemo = () => {
  const [size, setSize] = useState(16);
  const [sizeStr, setSizeStr] = useState(size.toString());
  const updateSize = (s) => {
    setSizeStr(s);
    // source: https://stackoverflow.com/questions/18082
    if (!isNaN(parseFloat(s)) && isFinite(s)) {
      setSize(Number(s));
    }
  };
  return (
    <div>
      <input
        type="number"
        value={sizeStr}
        onChange={(event) => updateSize(event.target.value)}
      />
      <div style={{ fontSize: size }}>Sample text</div>
    </div>
  );
};
```

# Input validation

## Input validation

When can a form input be validated?

- when the form is submitted (on submit)
- when the input loses focus (on blur)
- on every value change (on change)

The best approach depends on the use case

## Validation: examples

validation on every change:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const emailValid = isEmail(email);

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validation: examples

validation on blur / on change:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  // call from onBlur / onChange:
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validation: examples

full example: validation on blur and on submit

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validateEmail();
        if (isEmail(email)) {
          console.log(`Signed up: ${email}`);
        }
      }}
    >
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => validateEmail()}
      />
      <button>sign up</button>
      {!emailValid ? <div>invalid email</div> : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Validation

more complex validation schemas are possible

example: initial validation of an input on its first _blur_, then live validation on each _change_

# VS Code basics and plugins

## VS Code basics and plugins

see presentation [VS Code](./vs-code-en.html)

# Initializing a React project

## Developing with node.js and npm

- node.js: JS-Runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

## Initializing a React project

possibilities:

- **create-react-app** (most-used method)
- gatsby (includes static site generation)
- next.js (includes static site generation and server-side rendering)

## Initializing a React project

possible commands for initializing a project named "todolist":

```bash
npx create-react-app todolist
npx create-react-app todolist --template typescript
npx create-react-app todolist --template cra-template-pwa-typescript
```

```bash
npx create-next-app todolist
npx create-next-app todolist --example with-typescript
```

```bash
npx gatsby new
```

<!--
gatsby and creact-next-app will ask for more config
during creation
gatsby has built-in support for typescript -
just change .js to .tsx -->

see also: <https://reactjs.org/docs/create-a-new-react-app.html>

## Initializing a React project

many aspects can be preconfigured by the initializer:

- webpack and babel for building
- local development server
- unit testing framework
- SCSS and CSS modules
- ...

## Create-react-app: default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## Create-react-app: development server and build

inside the project directory:

- `npm run start` (or `npm start`): starts the local development server
- `npm run build`: creates a build (for deployment)

## Create-react-app: development server

note:

sometimes the development server will keep displaying an error even though it has been fixed

stop the server (ctrl-C) and restart it to fix this

# Build and deployment

## Build and deployment

A React project can be hosted on any static hosting service

## Build

build with create-react-app:

```bash
npm run build
```

minified and bundled app is created in the _build_ folder

## Deployment

simple options for trying out deployment options without login:

- <https://netlify.com/drop> (hosting for 24 hours)
- <https://tiiny.host/> (upload via a zip folder, hosting for a couple of days)

# React developer tools

## React developer tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)
- [Edge Plugin](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

features:

- display component structure
- show component state and props
- change state and props
- analyze render performance of components

## React developer tools

possible approach when looking for issues:

- check state update logic: state updates correctly in response to events
- check rendering logic: state is rendered as expected

# React and TypeScript

## TypeScript basics

see presentation [TypeScript](./typescript-en.html)

## Event types

When using _inline_ event handlers, event types can be inferred directly:

```jsx
<button
  onClick={(event) => {
    // automatic type: React.MouseEvent<HTMLButtonElement>
    event.stopPropagation();
    // ...
  }}
>
  test
</button>
```

## Event types

explicit type declaration for separate event handler:

```tsx
const handleClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();
  // ...
};
```

```tsx
<button onClick={handleClick}>test</button>
```

## Event types

common event types:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLButtonElement>`

## useState and TypeScript

often no annotation is necessary:

```ts
const [filterText, setFilterText] = useState('');
```

use with annotation:

```ts
const [todos, setTodos] = useState<Array<Todo>>([]);
```

## Props and events with TypeScript

Props and and events in custom components:

```tsx
type TodoListProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## Resource

React+TypeScript Cheatsheets: <https://github.com/typescript-cheatsheets/react>

# Exercise: todolist

## Exercise: todolist

Create a todolist application with the following functionality:

- displaying completed and incomplete todos
- adding a new todo from a form
- toggling the completed state of a todo
- deleting a todo

# Components

## Components

React applications can be split into separate components

purposes:

- code reuse
- code organization

## Components and state

parent components can pass down parts of their state to child components

child components can trigger events that cause the state in their parent component to update

## Where should state live?

If multiple components need to access the same state, the state is usually stored in their common ancestor component and is passed down via props (see: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

Often, the main parts of the state will be stored in the top-level component (e.g. in `App`)

## Example: components and state in a todo app

<img src="assets/todo-components-state.svg" />

## Example: props and events in a todo app

<img src="assets/todo-components-state-props-events.svg" />

## Component definition

options:

- defining a component as a function
- defining a component as a class (was especially common / necessary before the introduction of hooks)

## Component definition

In order to distinguish them from ordinary tags, components start with a capital letter

# Component libraries

## Component libraries

- Material UI: React components in material design
- React Native & React Native Web: React components & framework for mobile & web apps
- React Bootstrap
- Blueprint
- Ant Design
- ...

## Material-UI

Predefined React components conforming to material design style (style of Google/Android)

npm package: _@material-ui/core_

```jsx
import { Button } from '@material-ui/core';
```

```jsx
<Button color="primary">Hello World</Button>
```

documentation: <https://material-ui.com>

## React-Bootstrap

npm packages: _react-bootstrap_, _bootstrap_

```jsx
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
```

```jsx
import { Button } from 'react-bootstrap';
```

```jsx
<Button variant="primary">Hello World</Button>
```

documentation: <https://react-bootstrap.github.io/>

# Component props

## State and props

- state = internal to the component
- props = parameters that are passed down from the parent

## Component props

example:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

## Component props

example component definition with props:

```tsx
type Props = { value: number; color?: string };

const ProgressBar = (props: Props) => {
  // ...
};
```

## Component props

component definition with object destructuring for props:

```tsx
const ProgressBar = ({ value, color }: Props) => {
  // ...
};
```

# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Custom events

Event handlers are defined as functions and passed down via props.

## Custom events

Example:

```jsx
<Rating value={prodRating} onChange={onProdRatingChange} />
```

<img src="assets/rating.png" style="width: 16em" />

## Custom events

example prop types for a rating component:

```tsx
type Props = {
  value: number;
  onChange?: (value: number) => void;
};
```

## Custom events

```tsx
const Rating = (props: Props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span
          onClick={() => {
            // call .onChange if it exists
            props.onChange?.(id);
          }}
          key={id}
        >
          {id <= props.value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
```

## Custom events

Using the Rating component:

```jsx
const [prodRating, setProdRating] = useState(3);
```

```jsx
<Rating
  value={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

shorter notation:

```jsx
<Rating value={prodRating} onChange={setProdRating} />
```

# Passing content to components

## Passing content to components

A component may receive content to be displayed via `props.children`

possible usage:

```jsx
<Notification type="error">
  <p>Changes could not be saved</p>
</Notification>
```

## Passing content to components

component definition:

```jsx
type Props = {
  type: string,
  children: React.ReactNode,
};

const Notification = (props: Props) => {
  let style = {
    backgroundColor:
      props.type === 'error' ? 'salmon' : 'lightblue',
  };
  return <div style={style}>{props.children}</div>;
};
```

# Exercises (components)

## Exercises (components)

Task: draft component interfaces (props and events) for various components (e.g. _Calendar_, _Color Picker_, _BarChart_, _Tabs_)

Task: "recreate" one of the components listed at [awesome-react-components](https://github.com/brillout/awesome-react-components) (e.g. bar chart, color picker, table / data grid, tabs)

Task: split the todo app into smaller components (e.g. _TodoList_, _TodoItem_, _AddTodo_)

Task: extract reusable components that are mainly used for styling - e.g. a `Button` component or a `TextInput` component

# Effect hook and querying APIs

## Topics

- network requests in JavaScript
  - fetch with `await`
  - fetch with `.then`
- side effects
  - triggering requests to APIs
  - loading from / saving to _localStorage_ / _indexeddb_
  - ...

# Network requests in JavaScript

## Network requests in JavaScript

see also: [Promises, fetch and axios](./javascript-promises-fetch-and-axios-en.html)

## Network requests in JavaScript

asynchronous function that fetches todos from an API:

```js
// todosApi.js
async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}
```

## Network requests in JavaScript

loading todos in a React component - with `await`:

```js
const [todos, setTodos] = useState([]);
async function loadTodosAsync() {
  const todos = await fetchTodos();
  setTodos(todos);
}
```

```jsx
<button onClick={loadTodosAsync}>
  load todos from API
</button>
```

## Network requests in JavaScript

loading todos - with `.then`:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  fetchTodos().then((todos) => {
    setTodos(todos);
  });
}
```

```jsx
<button onClick={loadTodos}>fetch todos from API</button>
```

## Return values

note:

- `loadTodos` (implicitly) returns `undefined`
- `loadTodosAsync` returns a _promise_ that resolves to `undefined`

this difference will be important later

## Return values

We can create a regular `loadTodos` function based on `loadTodosAsync`:

```js
function loadTodos() {
  loadTodosAsync();
}
```

## Loading indicators

code for adding a loading indicator:

```js
const [todos, setTodos] = useState([]);
const [isLoading, setIsLoading] = useState(false);
async function loadTodosAsync() {
  setIsLoading(true);
  const todos = await fetchTodos();
  setTodos(todos);
  setIsLoading(false);
}
```

# Effect hook basics

## Effect hook

The _effect hook_ can be used to perform actions when a component was mounted for the first time or when its props / state have changed.

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Effect hook

may be used to perform _side effects_ in components:

- triggering requests to APIs
- loading from / saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
- starting timers
- ...

## Effect hook

example: loading exchange rates when the component is first mounted and whenever a currency changes:

```js
const [from, setFrom] = useState('USD');
const [to, setTo] = useState('EUR');
const [rate, setRate] = (useState < number) | (null > null);
function loadExchangeRate() {
  // ...
}
useEffect(loadExchangeRate, [from, to]);
```

## Effect hook

example: loading a set of todos when the component is first mounted:

```js
const [todos, setTodos] = useState([]);
function loadTodos() {
  // ...
}
useEffect(loadTodos, []);
```

# Effect hook for querying APIs

## Effect hook for querying APIs

Often, API queries must be initiated when a component is included for the first time or when a component's props or state have changed

## Example: loading exchange rate data

example: loading exchange rate data from an API when selected currencies change:

```js
function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState(null);
  function loadExchangeRate() {
    fetchExchangeRate(from, to)
      .then((r) => setRate(r))
      .catch(() => setRate(null));
  }
  useEffect(loadExchangeRate, [from, to]);

  // render two dropdowns for selecting currencies
  // and show the exchange rate
}
```

## Example: loading exchange rate data

function that fetches data:

```ts
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangeratesapi.io/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}
```

## Example: loading exchange rate data

complete code:

```tsx
// https://codesandbox.io/s/use-effect-exchange-rate-szje3
import { useState, useEffect } from 'react';

const currencies = ['USD', 'EUR', 'JPY', 'GBP'];
async function fetchExchangeRate(
  from: string,
  to: string
): Promise<number> {
  const res = await fetch(
    'https://api.exchangeratesapi.io/latest?base=' +
      from.toUpperCase() +
      '&symbols=' +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

function ExchangeRate() {
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rate, setRate] = useState<number | null>(null);
  function loadExchangeRate() {
    fetchExchangeRate(from, to)
      .then((r) => setRate(r))
      .catch(() => setRate(null));
  }
  useEffect(loadExchangeRate, [from, to]);
  return (
    <div>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <div>{rate !== null ? rate : 'no data'}</div>
    </div>
  );
}

export default ExchangeRate;
```

## Effect hook and async functions

note: the effect function **must not be** an async function

The effect function should usually (implicitly) return _undefined_; an async function would always return a promise

## Effect hook and async functions

correctly querying an API with async syntax:

```js
const [todos, setTodos] = useState([]);
async function loadExchangeRate() {
  setTodos(await fetchTodos());
}
useEffect(
  // regular function that calls the async function:
  () => {
    loadExchangeRate();
  },
  []
);
```

## Exercises

example APIs:

- todos: <https://jsonplaceholder.typicode.com/todos>
- SpaceX launch data: <https://api.spacexdata.com/v3/launches/1>
- pokémon data: <https://pokeapi.co/api/v2/pokemon/1>
- hacker news search query: <https://hn.algolia.com/api/v1/search?query=foo>

## Exercises

- Load todos when the user opens the todolist application
- Show data for a specific SpaceX launch based on the launch number
- Show data for a pokémon based on its number
- Show hacker news articles based on a search term

## Example: SpaceX launch data

```js
function SpaceXLaunch() {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  function loadLaunch() {
    fetchLaunch(launchNr).then(setLaunchData);
  }
  useEffect(loadLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
}

async function fetchLaunch(launchNr) {
  const url =
    'https://api.spacexdata.com/v3/launches/' +
    launchNr.toString();
  const res = await fetch(url);
  const launchData = await res.json();
  return launchData;
}
```

## Example: Pokemon

```js
function Pokemon() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  function loadPokemon() {
    fetchPokemon(id).then(setData);
  }
  useEffect(loadPokemon, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setId(id + 1)}>next</button>
    </div>
  );
}

async function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
```

# Other uses of the effect hook

## Other uses of the effect hook

- saving to _localStorage_ / _indexeddb_
- explicitly manipulating the DOM
- starting timers
- ...

## Example: localStorage

Counter that saves its value whenever the value changes:

```jsx
function PersistentCounter() {
  const [count, setCount] = useState(null);
  function loadCount() {
    setCount(Number(localStorage.getItem('count')));
  }
  function saveCount() {
    if (count !== null) {
      localStorage.setItem('count', count);
    }
  }
  useEffect(loadCount, []);
  useEffect(saveCount, [count]);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

## Exercise: localStorage

Save the state of one of the previous applications (e.g. _tic-tac-toe_, _todo list_) to _localStorage_

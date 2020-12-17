# React

## Topics

- overview of React
- JS basics for React
- declarative rendering / working with state
- JSX template language
- using predefined components
- defining custom components
- querying web APIs from components

# React.js overview

## What is React?

one of the 3 big JavaScript UI frameworks (besides Angular, Vue.js)

## Basics of modern JavaScript UI frameworks

- declarative
- component-based

## Declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

## Component-based

- "custom" HTML-Tags
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

## Example: data model and data flow in a todo app

<img src="assets/todo-components-datamodel.svg" />

## What makes React special?

- JavaScript-based template syntax
- explicit state changes via setters
- immutable state objects

## History of React

- open-sourced by Facebook in 2013
- February 2019: introduction of hooks
- upcoming additions: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) and [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

# React Basics

## Online editors

recommendation: <https://codesandbox.io>

others:

- Glitch: <https://glitch.com/edit/#!/remix/starter-react-template>
- CodePen: <https://reactjs.org/redirect-to-codepen/hello-world>

## Example component definition

```jsx
import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default CounterApp;
```

## Example component definition

```jsx
import React, { useState } from 'react';

function SlideshowApp() {
  const [img, setImg] = useState(0);
  return (
    <div>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img
        src={`https://picsum.photos/200?image=${img}`}
        alt="slideshow"
      />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}

export default SlideshowApp;
```

## Function components and class components

options:

- defining a component as a function
- defining a component as a class (was especially common / necessary before the introduction of hooks)

## Component definition

In order to distinguish them from ordinary tags, components start with a capital letter

# JSX Basics

## JSX: JS + XML

JSX = Template language of React

- **&lt;** switches from JS to XML/HTML
- **{** switches back to JS

## Binding content

```jsx
<div>A year has {365 * 24} hours</div>
```

## Binding content

Tasks:

- Show the current date
- Show either "heads" or "tails" inside a div

## Binding content

date:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

heads or tails:

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## Binding Properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note: no quote characters around the value of _href_

## Binding Events

```jsx
const hello = () => {
  console.log('hello world');
  // ...
};
```

```jsx
<button onClick={hello}>Say Hello</button>
```

list of browser events:
<https://www.w3schools.com/jsref/dom_obj_event.asp>

## Binding Events

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

## Repeating elements

multiple elements may be added via arrays:

```jsx
const elements = [
  <div>alpha</div>,
  <div>bravo</div>,
  <div>charlie</div>,
];
```

```xml
<h1>three elements</h1>
{ elements }
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

## Example: Counter

We will add a button to our application. At the start this button will display the value 0. On each click the value will increment by 1.

## Example: Counter

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};
```

## Example: Slideshow

implement a slideshow that shows images like the following:

`https://picsum.photos/200?image=10`

- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index becoming negative

# JavaScript basics for React

## JavaScript standardization

JavaScript is standardized under the name [_ECMAScript_ (ES)](https://www.ecma-international.org/ecma-262/)

## JavaScript versions

_ES5_: Supported by all browsers, including Internet Explorer (standardized in 2009)

Since 2015: yearly updates in June of each year (ES2015, ES2016, ...)

Common practice: Modern JavaScript is transpiled to ES5 (via Babel, webpack)

## Imports and exports

named imports / exports:

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

## Template strings

- new syntax for _creating_ strings
- delimited via backticks
- enables multiline string literals and interpolation

```js
const name = 'Mike';
const greeting = `Hello, ${name}!
                  This is ES2015!`;
```

## The semicolon in JavaScript

The semicolon for ending statements is mostly optional in JavaScript (JavaScript "features" automatic semicolon insertion)

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

## Destructuring

```js
const [result, errors] = someComputation();

// swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
```

## Destructuring

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

# Immutable state

## Immutable state

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

state should be viewed as _immutabe_ (unchangeable)

## Immutable state

When `setState` is called, React will compare:

- the object the old state points to
- the object the new state points to

If the old state and the new state reference the same object (even if it has changed), the component will not be rerendered.

## Immutable state

demo (see <https://codesandbox.io/s/exciting-dust-w7hni>):

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

code like this is **not** allowed for changing state as React will not "see" the mutation:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
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

## immer.js

**immer.js** is a library that helps with immutable data

is recommended by the Redux team

## immer.js

this code would mutate the todos array:

```js
todos[0].completed = true;
todos.push({ title: 'study', completed: false });
```

avoiding mutations by using _immer.js_:

```js
import produce from 'immer';

const newTodos = produce(todos, (todosDraft) => {
  todosDraft[0].completed = true;
  todosDraft.push({ title: 'study', completed: false });
});
```

# Inputs & forms

## Inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be directly modified by the user

Therefore there would be aspects of the UI state which would not be captured in the React state.

## Inputs

This is how we can capture changes and track them in the state:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Form actions

Default behaviour of a form when submitted: directly send data to the server

Replacing the default behaviour:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit
  }}
>
  <input />
</form>
```

## Form validation

Form validation "by hand":

```js
const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailEdited, setEmailEdited] = useState(false);
  const emailInvalid = !isEmail(email);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email);
      }}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => setEmailEdited(true)}
      />
      <button disabled={emailInvalid}>subscribe</button>
      {emailEdited && emailInvalid ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

# React developer tools

## React developer tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)

features:

- display component structure
- show component state and props
- change state
- analyse render performance of components

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
const element = React.createElement(
  MyComponent,
  { prop1: 1, prop2: 2 },
  React.createElement('div', null, 'test 1'),
  React.createElement('div', null, 'test 2')
);
```

# Exercise: todolist

## Exercise: todolist

Create a todolist application with the following functionality:

- displaying completed and incomplete todos
- toggling the completed state of a todo
- deleting a todo
- adding a new todo from a form

# Component libraries

## Component libraries

- Material UI: React components in material design
- React Native & React Native Web: React components & framework for mobile & web apps
- React Bootstrap
- Blueprint
- ...

## Material-UI

Predefined React components conforming to material design style (style of Google/Android)

## Material-UI: installation and usage

<https://material-ui.com>

see info boxes on _Installation_ und _Usage_

## Material-UI: exercises

- Button
- Todo-App in Material Style

# Component props

## State & props

- state = internal to the component
- props = parameters that are passed down from the parent

## Props in custom components

Example:

```jsx
<Rating stars={3} />
```

<img src="assets/rating.png" style="width: 16em" />

## Props in function components

example (simple Rating component):

```jsx
const Rating = (props) => (
  <div className="rating">
    {'★'.repeat(props.stars) + '☆'.repeat(5 - props.stars)}
  </div>
);
```

with object destructuring for props:

```jsx
const Rating = ({ stars }) => (
  <div className="rating">
    {'★'.repeat(stars) + '☆'.repeat(5 - stars)}
  </div>
);
```

## props.children

A component may receive content to be displayed via `props.children`

Example: a `Bordered` component:

```jsx
<Bordered>lorem ipsum</Bordered>
```

Defining the component:

```jsx
const Bordered = (props) => (
  <div className="bordered">{props.children}</div>
);
```

# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Custom events

Event handlers are defined as functions and passed down via props.

## Custom events

Example: Event `onChange` in the `Rating` component (each star is a `span` element)

## Custom events

```jsx
const Rating = (props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span onClick={() => props.onChange(id)} key={id}>
          {id <= props.stars ? '★' : '☆'}
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
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

shorter notation:

```jsx
<Rating stars={prodRating} onChange={setProdRating} />
```

## Custom events

Example `ToggleButton`: Button which displays either "off" or "on":

Prop: `active` - may be set to `true` or `false`  
Event: `onToggle` - function which is called with the new state

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}
>
  {props.active ? 'on' : 'off'}
</button>
```

## Custom events

The `ToggleButton` can be included like this:

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={(newIsActive) => {
    setMyOption(newIsActive);
  }}
/>;
```

# Exercises

## Exercises

Task: draft component interfaces (props and events) for various components (e.g. _Calendar_, _Color Picker_, _BarChart_, _Tabs_)

Task: "recreate" one of the components listed at [awesome-react-components](https://github.com/brillout/awesome-react-components) (e.g. bar chart, color picker, table / data grid, tabs)

Task: split the todo app into smaller components (e.g. _TodoList_, _TodoItem_, _AddTodo_)

# Type checkers for React

## Type checkers for React

Declaring types can be useful, especially when it comes to component props and events

possibilities:

- using TypeScript as a language
- library _prop-types_

## React with TypeScript

creating a new project:

```bash
npx create-react-app my-app --template typescript
```

## TypeScript

TypeScript basics: see presentation on [TypeScript](./typescript-en.html)

## React with TypeScript

extensive resource: <https://github.com/typescript-cheatsheets/react-typescript-cheatsheet>

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props with TypeScript (function components)

```tsx
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  // ...
};
```

## useState with TypeScript

often no annotation is necessary:

```ts
const [filterText, setFilterText] = useState('');
```

with annotation:

```ts
const [todos, setTodos] = useState<Array<TodoType>>([]);
```

## Event types

With inline event handlers no event type must be declared:

```jsx
<button
  onClick={(event) => {
    event.stopPropagation();
  }}
>
  test
</button>
```

## Event types

Event types for event handlers that are defined separately:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

## prop-types

library for annotating React component properties in JavaScript

## prop-types

example:

```js
import PropTypes from 'prop-types';

// definition of Rating component here

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func,
};
```

## prop-types in VS Code

Plugin: _React PropTypes IntelliSense_

# Querying APIs (effect hook)

## Querying APIs (effect hook)

Often API data needs to be queried when a component was mounted for the first time or when its props / state have changed

## Querying APIs (effect hook)

The _effect hook_ can be used to perform actions when a component was mounted for the first time or whent its props / state have changed

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Querying APIs (effect hook)

Example: load todos when component has mounted

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  };
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## Querying APIs (effect hook)

Example: load SpaceX launch data when component mounted or when `launchNr` changed

```js
const SpaceXLaunch = () => {
  const [launchNr, setLaunchNr] = useState(1);
  const [launchData, setLaunchData] = useState({});
  const fetchLaunch = () => {
    fetch(
      `https://api.spacexdata.com/v3/launches/${launchNr}`
    )
      .then((res) => res.json())
      .then((data) => setLaunchData(data));
  };
  useEffect(fetchLaunch, [launchNr]);
  return (
    <div>
      <h1>{launchData.mission_name}</h1>
      <div>date: {launchData.launch_date_utc}</div>
      <button onClick={() => setLaunchNr(launchNr + 1)}>
        next
      </button>
    </div>
  );
};
```

## Querying APIs (effect hook)

Example: load pokémon data when component mounted or when `id` changed

```js
const Pokemon = () => {
  const [id, setItd] = useState(1);
  const [data, setData] = useState({});
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(fetchPokemon, [id]);
  return (
    <div>
      <h1>{data.name}</h1>
      <p>id: {id}</p>
      <p>height: {data.height}</p>
      <button onClick={() => setItd(id + 1)}>next</button>
    </div>
  );
};
```

## Querying APIs (effect hook)

Tasks:

- load and display more data
- add a loading indicator
- add automatic refresh every 10 seconds

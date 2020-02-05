# React

## Slides

https://marko-knoebl.github.io/slides/

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- current projects
- prior knowledge
- expectations

## Organizational

- duration
- breaks
- lunch
- materials
- questions, feedback?

## Code

Code available at: https://github.com/marko-knoebl/courses-code

# Topics

## Topics

- overview of React
- modern JS / JS basics for React
- declarative rendering / working with application state
- JSX template language
- components
- using predefined components
- querying web APIs from components

# React.js

## What is React?

- One of the 3 big JavaScript UI libraries (besides Angular, vue.js)

## Basics of modern JavaScript UI libraries

- declarative
- component-based

## declarative

- In the background there is a data model which describes the entire application state
- The data model changes in response to user interactions, causing the view to update automatically (and efficiently)

## component-based

- "custom" HTML-Tags
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

## Example: data model and data flow in a Todo app

<img src="assets/todo-components-datamodel.svg" type="text/svg" style="width: 300px">

## What makes React special?

- JavaScript-based template syntax
- explicit state mutations via setters

## History of React

- used internally at Facebook from 2011
- open source since 2013
- current major version: React 16 (September 2017)
- February 2019: introction of hooks

# Basics for the course

## Basics for the course

- [VS Code basics and plugins](./vs-code-en.html)
- [Modern JavaScript (ES2015+)](./javascript-es-2015-en.html)

# Create-React-App

## Developing with node.js and npm

- node.js: JS-Runtime
  - running the local development server
  - unit tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ directory
  - configuration via _package.json_

## create-react-app

most-used method for generating React projects

run it via:

```bash
npx create-react-app playground
```

or

```bash
npx create-react-app playground --template typescript
```

see also: https://reactjs.org/docs/add-react-to-a-new-app.html

## create-react-app

Creates a simple React app which can be used as a starting point

many aspects are preconfigured:

- local development server
- unittesting framework jest
- webpack and babel
- SCSS and CSS modules

## default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## development server and build

inside the project directory:

- `npm start`: starts the local development server
- `npm run build`: creates a build (for deployment)

# React & JSX Basics

## Defining a component as a function

```jsx
import React from 'react';

const App = () => {
  return <div>Hello, World!</div>;
};

export default App;
```

## Defining a component as a class

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
```

## Component definition

In order to distinguish them from ordinary tags, components start with a capital letter

## JSX: JS + XML

JSX = Template language of React

- **<** switches from JS to XML/HTML
- **{** switches back to JS

## JSX: JS + XML

```jsx
<div>A year has {365 * 24} hours</div>
```

## JSX: Simple tasks

- Show the current date
- Show either "heads" or "tails" inside a div

## JSX: Properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note there are no quote characters around the value of _href_

## JSX: events

```jsx
const hello = () => {...}

<button onClick={hello}>Say Hello</button>
```

list of browser events:
https://www.w3schools.com/jsref/dom_obj_event.asp

# State

## State

React components may have an internal _state_

The state can be referenced in the template. The view will automatically update if parts of the state are changed.

## state in function components

In function components we make use of `useState`:

```js
import { useState } from 'react';
```

## state in function components

The function `useState` may be called (repeatedly) at the beginning of the component function.

- `useState` takes one parameter - the initial state value
- on each call `useState` returns an array with two entries: the current state and a function which can be used to set the state to a different value

```js
const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React app');

  return ...
};
```

## Example: counter

We will add a button to our application. At the start this button will display the value 0. On each click the value will increment by 1.

## Example: Counter

```jsx
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}>
      {count}
    </button>
  );
};
```

## Example: Counter

Task: Add a _reset_ button to the application

## Example: Slideshow

implement a slideshow that shows images like the following:

`https://picsum.photos/200?image=10`

- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index becoming negative

## Don't mutate state directly

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

## Don't mutate state directly

initial situation:

```js
const [todos, setTodos] = useState(['groceries', 'bills']);
```

**correctly** updating the state:

```js
setTodos([...todos, 'learn React']);
```

**incorrect** attempt at updating the state:

```js
todos.push('learn React');
setTodos(todos);
```

# Immutable state

## Immutability

**Immutability**: important concept in functional programing and with React / Redux

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will usually not notice the changes and will not rerender the view

state should be viewed as _immutabe_ (unchangeable)

## Data management without mutations: Arrays

initial data:

```js
let names = ['Alice', 'Bob', 'Charlie'];
```

**mutation**: this modifies the original array

```js
names.push('Dan');
```

**no mutation**: create a new array

```js
let newNames = [...names, 'Dan'];
```

## Data management without mutations: Objects

initial data:

```js
let user = {
  name: 'john'
  email: 'john@doe.com'
}
```

**mutation**: this modifies the object

```js
user.email = 'johndoe@gmail.com';
```

**no mutation**: create a new object

```js
let newUser = { ...user, email: 'johndoe@gmail.com' };
```

## immer.js and immutable.js

libraries that simplify working without mutations

## immer.js

is recommended by the Redux team

changes are specified via a _draft_ object

## immer.js

```js
import produce from 'immer';

const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
];

const newTodos = produce(todos, todosDraft => {
  todosDraft[1].completed = true;
  todosDraft.push({
    id: 3,
    title: 'relax',
    completed: false,
  });
});
```

## immutable.js

In particular, offers the data types _List_ and _Map_ as immutable alternatives for _Array_ and _Object_.

```js
import { List, Map } from 'immutable';

const a1 = List([1, 2, 3]);
const a2 = a1.push(4);

const b1 = Map({ a: 1, b: 2 });
const b2 = b1.set('b', null);
```

## immutable.js

```js
import { fromJS, setIn } from 'immutable';

const todos = fromJS([
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'gardening', completed: false },
]);

const newTodos = todos.setIn([1, 'completed'], true);
```

# Inputs & forms

## Inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be directly modified by the user

Therefore there are aspects of the UI state which would not be captured in the state.

## Inputs

This is how we can capture changes and track them in the state:

```jsx
<input
  value={inputText}
  onChange={event => {
    setInputText(event.target.value);
  }}
/>
```

## Forms

Default behaviour of a form when submitted: directly send data to the server

Replacing the default behaviour:

```jsx
<form
  onSubmit={event => {
    event.preventDefault();
    // handle submit
  }}>
  <input />
</form>
```

# Developer tools for React

## React Developer Tools

- [Chrome Plugin](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Plugin](https://addons.mozilla.org/de/firefox/addon/react-devtools/)

Features:

- display component structure
- show state and props
- change state
- analyse render performance of components

## Debugging in VS Code

Extensions:

- **Debugger for Chrome**
- Debugger for Firefox

## Debugging in VS Code: configuration

creating config file: in the debugger sidebar, click on the gear symbol (_Configure or fix 'launch.json'_)

in _launch.json_:

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome for React",
  "url": "http://localhost:3000"
}
```

## Debugging in VS Code: starting

The development server has to be running in the background

Start debugging in VS Code via _F5_

# map, filter, reduce

### Array methods for functional programming

## map

- modifies each entry in an array via a function
- returns a new array

```js
let myNumbers = [2, 10, 23];

let triple = n => 3 * n;

let newNumbers = myNumbers.map(triple);
// [6, 30, 69]
```

## filter

- only keeps specific entries in an array
- uses a function to check entries for a specific criterion
- returns a new array

```js
let myNumbers = [2, 10, 23];

let isEven = n => n % 2 === 0;

let newNumbers = myNumbers.filter(isEven);
// [2, 10]
```

## reduce

- computes one value based on a start value and all entries in an array
- uses a function that computes a resulting value from two given values - this function will be called repeatedly

## reduce - example

```js
let transactions = [
  { amount: -56, title: 'groceries' },
  { amount: +1020, title: 'salary' },
  { amount: -13, title: 'dinner' },
  { amount: -96, title: 'electricity' },
];
let initialBalance = 317;

let reducer = (aggregator, transaction) =>
  aggregator + transaction.amount;

let currentBalance = transactions.reduce(
  reducer,
  initialBalance
);

// 317 -> 261 -> 1281 -> 1268 -> 1172
```

# JSX in detail

## JSX: repeating elements

Multiple Elements may be added via arrays:

```xml
<ul>
  { [
    <li>1</li>,
    <li>2</li>
  ] }
</ul>
```

## JSX: repeating elements

In practice this is mostly done via `.map()`:

<!-- prettier-ignore -->
```jsx
const todos = [
  { id: 1, title: 'groceries', completed: false },
  { id: 2, title: 'cooking', completed: true },
  { id: 3, title: 'gardening', completed: false },
];

<ul>
  {todos.map(todo => (
    <li>{todo.title}</li>
  ))}
</ul>
```

## JSX: repeating elements

With the above code:  
warning in the browser console (concerning efficiency)  
solution: **key**:

```jsx
<ul>
  {todos.map(todo => (
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

# Styling in JSX

## CSS classes

```jsx
<div
  className={'todoitem' + isCompleted ? ' completed' : ''}>
  [...]
</div>
```

## CSS classes

helper utility: npm package _classnames_:

```jsx
import classNames from 'classnames';

<div
  className={classNames({
    todoitem: true,
    completed: isCompleted,
  })}>
  [...]
</div>;
```

## CSS modules

When using create-react-app CSS modules are preconfigured. They allow using CSS class names that are guaranteed to be unique across CSS files.

```js
import styles from './TodoItem.module.css';

<div className={styles.todoItem}>...</div>;

<div className={`${styles.todoItem} ${styles.completed}`}>
  ...
</div>;
```

## using SCSS

```bash
npm install node-sass
```

```js
import styles from './TodoItem.module.scss';
```

```scss
/* TodoItem.module.scss */
@import '../colors';
...
```

```scss
/* colors.scss */
$primary: lightblue;
```

## JSX: dynamic styles

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
```

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

https://material-ui.com

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

<img src="assets/rating.png" type="image/png" style="width: 16em">

## Props in function components

example (simple):

```jsx
const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);
```

or

```jsx
const Rating = ({ stars }) => (
  <div className="rating">{'*'.repeat(stars)}</div>
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
const Bordered = props => (
  <div class="bordered">{props.children}</div>
);
```

# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Custom events

Event handlers are defined as functions and passed down via props.

## Custom events

Example `ToggleButton`: Button which displays either "off" or "on":

Prop: `active` - may be set to `true` or `false`  
Event: `onToggle` - function which is called with the new state

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}>
  {props.active ? 'on' : 'off'}
</button>
```

## Custom events

The `ToggleButton` can be included like this:

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>;
```

## Custom events

examples:

- Rating component with clickable stars
- NumberInput component that lets the user specify an integer with + and - buttons
  - bonus: make the API compatible with that of ordinary input elements so input elements may be easily replaced by NumberInput-components
  - bonus: add a min / max property that can be specified

# Exercises

## Exercises

List of React components: [awesome-react-components](https://github.com/brillout/awesome-react-components)

Task: "recreate" one of the components

examples:

- bar chart
- color picker
- table / data grid
- tabs

# Type checkers for React

## Type checkers for React

Declaring types can be useful, especially when it comes to component props and events

possibilities:

- library `prop-types`
- using `TypeScript` as a language

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

## React with TypeScript

new Project:

```bash
npx create-react-app my-app --template typescript
```

## TypeScript

TypeScript Basics: see presentation on [TypeScript](./typescript-en.html)

## React with TypeScript

extensive resource: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

<!--

redux with typescript:

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/@resir014/a-type-safe-approach-to-redux-stores-in-typescript-6474e012b81e
- https://www.carlrippon.com/strongly-typed-react-redux-code-with-typescript/

-->

## Props with TypeScript (function components)

```tsx
import React, { FC } from 'react';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: FC<TodoListProps> = props => {
  // ....
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
  onClick={event => {
    event.stopPropagation();
  }}>
  test
</button>
```

## Event types

Event types for event handlers that are defined separately:

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

# Querying APIs (effect hook)

## Querying APIs (effect hook)

Often API data needs to be queried when a component is first mounted or when its props / state change

## Querying APIs (effect hook)

The _effect hook_ can be used to perform some actions when a component is first mounted or when its props / state change

```js
useEffect(
  effect, // what should happen
  dependencies // array of values to watch
);
```

## Querying APIs (effect hook)

Example: load todos when component is mounted

```js
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const loadTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => setTodos(todos));
  };
  useEffect(loadTodos, []);
  return (
    <ul>
      {todos.map(todo => (
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
      .then(res => res.json())
      .then(data => setLaunchData(data));
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
      .then(res => res.json())
      .then(data => setData(data));
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


# React

## Presentation and code

Presentations available at: https://karuga.eu/courses-presentations

Code available at: https://github.com/marko-knoebl/courses-code

## Your Trainer

Marko Knöbl

- Frontend Web-Development
  - JavaScript
  - React, Angular
- Programming
  - Python, JavaScript

## Introduction of Participants

- Name
- Company
- Current Projects
- Prior Knowledge
- Expectations

## Organizational

- Duration
- Breaks
- Materials
- Questions, Feedback?

# Agenda

## Agenda

### Basics

- Overview of React
- Modern JS / JS-Basics for React
- Declarative rendering / Working with application state
- Components
- Using predefined Components

## Agenda

### Advanced

- Lifecycle
- Routing
- Testing components
- Redux
- Progressive Web Apps with React

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

## JSX Properties: task

Show a picture based on an id; make use of this function:

```js
const getImgUrl = id =>
  'https://picsum.photos/200?image=' + id.toString();
```

## JSX: events

```jsx
const hello = () => {...}

<button onClick={hello}>Say Hello</button>
```

list of browser events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## State example

(we will look into the topic of state in detail later)

```jsx
const Counter = () => {
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

# VS Code

## VS Code

https://code.visualstudio.com

open source IDE

independent of _Visual Studio_ itself

## VS Code: open folder

via _File_ - _Open Folder_

## VS Code: File explorer, split editor

## VS Code: Terminal

Open / close the terminal view via _ctrl_ + _`_

Open an additional terminal via the _+_ Symbol

Terminals will run in the currently open folder

## VS Code: Configuration

Via _File - Preferences - Settings_

Is split in _User Settings_ and _Workspace Settings_

## VS Code: Configuration options

Recommendations:

- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_
- Auto Save: _afterDelay_
- Tab Size: _2_ or _4_

Further Options:

- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code: Shortcuts

- _F1_ or _Ctrl_ + _Shift_ + _P_: command palette

<!-- list separator -->

- _Ctrl_ + _F_: Search in File
- _Alt_ + _Shift_ + _F_: Auto-format file contents
- _Ctrl_ + _#_: comment / uncomment
- _F12_: Go to definition
- _Shift_ + _F12_: Peek definition
- _F2_: rename variables
- _Alt_ + mouse click: Activate multiple text cursors

# Prettier

## Prettier

https://prettier.io/

- Code formatting according to strict rules
- VS Code plugin (via Alt + Shift + F)

## Prettier configuration

in VS Code: via File - Preferences - Settings

or via `.prettierrc.json`:

```json
{
  "bracketSpacing": false,
  "singleQuote": true,
  "trailingComma": true,
  "jsxBracketSameLine": true
}
```

# ESLint

## ESLint

Linter for JavaScript (and TypeScript)

VS Code Plugin is available

# ES2015+

## Modern JavaScript

## JavaScript standardisation

JavaScript is standardised under the name _ECMAScript_ (ES)

## JavaScript: versions

- Supported by all Browsers: ES5 (standardised in 2009)
- Next big version: _ES2015_ (or ES6)
- Since then: yearly updates (ES2016, ES2017, ...)

## JavaScript: version support

- Overview: see http://kangax.github.io/compat-table/es6/
- In practice: Modern JavaScript is transpiled to ES5 (via Babel, webpack)

## Important changes in ES2015

## modules & imports

- It's possible to import objects from other js-files - no more global namespace
- Is handled by webpack in most cases

```js
// user.js
export class User {
  ...
}
```

```js
// main.js
import { User } from 'user.js';
```

## modules & imports

```js
// user.js
// there may be 1 default export
export default class User {
   ...
}
```

```js
// main.js
import User from 'user.js';
```

## imports in webpack

Bundlers like webpack can deviate from standard JavaScript import behavior:

- the import doesn't require a file name extension like `.js`
- if the import leads to a folder webpack will look for an `index.js` file in the folder

## let

- New alternative to `var` - with different scoping
- variables scope: surrounding curly braces (instead of surrounding function)

```js
if (true) {
  let a = 3;
}
console.log(a); // ReferenceError
```

## const

Declares a variable that cannot be reassigned.
However, the named object itself may be modified.

```js
const names = ['Alice', 'Bob', 'Claire'];
names = ['Andrew', 'Bob', 'Claire']; // invalid!
names[0] = 'Andrew'; // valid
```

## destructuring assignment

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

const [result, errors] = someComputation();
```

## destructuring assignment

```js
const person = { name: 'John', age: 48 };

const { name, age } = person;
```

## arrow functions

- short notation for anonymous functions
- leaves _this_ unchanged (does not reassign)

```js
let multiply = (a, b) => {
  return a * b;
};
let multiply = (a, b) => a * b;
```

## arrow functions

if there's exactly one parameter: parentheses are optional

```js
const square = a => a * a;
```

if we want to return an object directly: wrap it in parentheses

```js
const getState = () => ({
  loggedIn: true,
  userName: 'mike',
});
```

## classes

Class syntax replaces the old constructor functions and prototypes

## classes

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  hello() {
    return `My name is ${this.firstName}`;
  }
}
```

## inheritance

```js
class User extends Person {
  constructor(firstName, lastName, userName) {
    // calls Person.constructor
    super(firstName, lastName);
    this.userName = userName;
  }
}
```

## Array iteration (for ... of)

Iterating over entries of an array:

```js
let names = ['Anna', 'Bernhard', 'Caro'];
for (let name of names) {
  console.log(name);
}
```

## spread syntax (arrays)

```js
let squares = [1, 4, 9];
let moreSquares = [...squares, 16, 25];
// moreSquares: [1, 4, 9, 16, 25]
```

## spread syntax (objects)

```js
let person = {
  fName: 'John',
  lName: 'Doe',
  age: 31,
};
let updatedPerson = {
  ...person,
  email: 'j@d.com',
  age: 32,
};
// {fName: 'John', lName: 'Doe', email: 'j@d.com', age: 32}
```

## template strings

- new syntax for _creating_ strings
- delimited via backticks
- enables multiline string literals and interpolation

```js
let name = 'Anton';
let greeting = `Hello, ${name}!
                This is ES2015!`;
```

## default arguments

Functions may now have default arguments

```js
let join = (strings, separator='') => {
  ...
}
```

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

## State in class components

In class components, `this.state` represents the state.

`this.state` is always a JavaScript object which can have varois entries (properties)

State changes happen via `this.setState()`

## structure of this.state

_this.state_ is always an object:

```js
constructor() {
  [...]
  this.state = {
    loggedIn: true,
    todos: ['laundry', 'groceries', 'taxes'],
  }
}
```

## modifying this.state

only via `setState()`:

```js
this.setState({ loggedIn: false });
```

`setState` will change all specified entries

## Repeated calls to this.setState

Advice: In an event handler `setState` should only be called once.

If you do want to call `setState` multiple times and one call depends on the modifications of the previous call:

```js
this.setState(oldState => ({ count: oldState.count + 1 }));
this.setState(oldState => ({ count: oldState.count + 1 }));
```

Pass a function to `setState`. This function will transform the old state into the new state.

# Inputs

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

## JSX: CSS classes

```jsx
<div className={getClassName()}>[...]</div>
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

# Props

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

example:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
```

## Props in class components

example:

```jsx
import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    return (
      <div className="rating">
        {'*'.repeat(this.props.stars)}
      </div>
    );
  }
}
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

# Events

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

# Component Library: Material-UI

Predefined React components conforming to material design style (style of Google/Android)

## Material-UI: Installation and Usage

https://material-ui.com

see info boxes on _Installation_ und _Usage_

## Exercises

- Button
- Todo-App in Material Style

# Exercises

Liste an verfügbaren React-Komponenten:

[awesome-react-components](https://github.com/brillout/awesome-react-components)

Aufgabe: "Nachbau" einer der Komponenten

Beispiele:

- table / data grid
- tabs
- bar chart
- color picker

# Type checkers for React

## Type checkers for React

Declaring the component interface made up by props and events can be very useful

This can be done via the library `prop-types`

An alternative is using TypeScript as a programming language, which offers type checking throughout a program

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
npx create-react-app my-app --typescript
```

## Components with TypeScript (functions)

```tsx
type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  const [filterText, setFilterText] = useState<string>('');

  return <div>...</div>;
};
```

## Components with TypeScript (Classes)

```tsx
// TodoList.tsx
type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: int) => void;
};
type TodoItemState = {};
```

```tsx
class TodoItem extends React.PureComponent<
  TodoItemProps,
  TodoItemState
> {}
```

## Event types

- `React.FormEvent`
- `React.FormEvent<HTMLFormElement>`
- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLDivElement>`

# TypeScript

## TypeScript

= superset of JavaScript with extensions:

- **static typing**
- public / private properties
- decorators

## Static typing

data types may be specified in order to support the development environment:

- auto completion
- errors when types mismatch

## Static typing

when building: TypeScript is translated to JavaScript, all type information is discarded

## Type system: variables

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## Type system: arrays

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative syntax:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## Type system: functions

<!-- prettier-ignore -->
```ts
function repeatString(
  text: string,
  times: number
): string {
  return ...
}
```

```ts
const repeatString = (
  text: string,
  times: number
): string => {
  return ...
};
```

## Type system: void

Void: can either be _undefined_ or _null_ - is mostly used with functions that don't return anything

```ts
function warnUser(): void {
  alert('warning!');
}
```

## Type system: any

Any: variable can be of any type - disables the typechecker for this variable

```ts
let myInput: any = document.getElementById('myinput');
console.log(myInput.value);
```

## Type system: type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## Type system: types & interfaces

Interfaces describe the structure of an object / of a class in detail  
e.g.: `TodoInterface`, `PersonInterface`

Types are similar to interfaces, but are also applicable to strings, arrays, ...

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## Type system: types

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoCollection = Array<TodoType>;
```

## Types and objects

```ts
type TodoType = {
  id: number;
  title: string;
  completed: boolean;
  // optional
  description?: string;
  // method
  toggle: (id: number) => void;
};
```

## Types and objects

```ts
class AdvancedTodo implements TodoType {
  ...
}
```

## Intersection Types

Via `&`:

```ts
type x = a & b;
```

With regards to `a` the intersection type `x` may:

- restrict the values of existing properties
- add additional required properties

## Intersection Types: Restricting values

```ts
type ActionType = {
  type: string;
  payload?: object;
};

type AddTodoActionType = ActionType & {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
};
```

## Intersection Types: Combining Types

```ts
type Serializable = {
  serialize: () => string;
};

type SerializableAction = Action & Serializable;
```

Objects that implement the Type `SerializableAction` must implement all entries from both `Serializable` and `Action`.

## Union Types

The type `x` must either fulfil all criteria of `a` or all criteria of `b`.

```ts
type x = a | b;
```

Alternative notation across multiple lines:

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## Generics

Generic type declarations that can receive more specific type information when applied (via `<...>`)

## Generics

example: `Array` is a generic

```ts
let a: Array<number> = [1, 2, 3];
let b: Array<string> = ['one', 'two', 'three'];
```

example: React's `Component` is a generic

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## Private & public properties

```ts
class Clock {
  private formatTime(time) {
    return ...
  }
  public start() {
    ...
  }
}
```

## Type declarations for libraries

Several JavaScript Libraries come with type declarations for TypeScript - e.g. _react_, _redux_.

For other libraries there are usually external declaration packages that are prefixed with _@types/_; e.g. for _react-redux_ there's the package _@types/react-redux_.


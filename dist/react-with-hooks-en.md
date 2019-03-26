# {{title}}

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
- Declarative Rendering / Working with application state
- Components
- Using predefined Components

## Agenda

### Advanced

- Lifecycle
- Routing
- Testing Components
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

## What makes React special?

- JavaScript-based template syntax
- explicit state mutations via setters

## History of React

- used internally at Facebook from 2011
- open source since 2013
- current major version: React 16 (September 2017)
- February 2019: introction of hooks

## Example: data model and data flow in a Todo app

<img src="assets/todo-components-datamodel.svg" type="text/svg" style="width: 300px">

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

## Defining a component as a function

```jsx
import React from 'react';

const App = () => {
  return <div>Hello, World!</div>;
};

export default App;
```

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

## VS Code: saving

Unsaved files are marked with a circle instead of an "X" in the tab

Save via _Ctrl_ + _S_

or: _File_ - _Auto Save_

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

- Auto Save: _activate_
- Accept Suggestions on Commit Character (Autocomplete on other keys than _Enter_): _deactivate_
- Tab Size: _2_

Further Options:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

## VS Code: Shortcuts

- _Ctrl_ + _F_: Search in File
- _Alt_ + _Shift_ + _F_: Auto-format file contents
- _F2_: rename variables
- _Alt_ mouse click: Activate multiple text cursors

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

let currentBalance = transactions.reduce(
  (aggregator, transaction) =>
    aggregator + transaction.amount,
  initialBalance
);

// 317 -> 261 -> 1281 -> 1268 -> 1172
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

## Example: Diashow

implement a diashow that shows images like the following:

`https://picsum.photos/200?image=10`

- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index becoming negative

## State in class components

In class components, `this.state` represents the state.

`this.state` is always a JavaScript object with properties

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
this.setState({ todos: ['learn react'] });
```

`setState` will change all specified entries

## Repeated calls to this.setState

Advice: In an event handler `setState` should only be called once.

If you do want to call `setState` multiple times and one call depends on the modifications of the previous call:

```js
this.setState(oldState => ({ count: oldState.count + 1 }));
this.setState(oldState => ({ count: oldState.count + 1 }));
```

We pass a function to `setState`. This function will transform the old state into the new state.

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

## JSX: dynamic style

```jsx
<div
  style={{
    color: '#333',
    fontSize: getFontSize(),
  }}
/>
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
const element = <h1 className="greeting">Hello, world!</h1>;
```

compiles to:

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

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

# Development tools for React

## React Developer Tools

https://github.com/facebook/react-devtools

- display component tags in an inspector
- show state and props
- highlight changes to state and props
- highlight updates / rerenderings of components
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

# components

## components

Components = custom tags, e.g.

```jsx
<Rating stars={3} />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

## components

In order to distinguish them from ordinary tags, components start with a capital letter

## components: state & props

- state = internal to the component
- props = parameters that are passed down from the parent

## component definition

- class components
- function components

## function components

example:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
```

## class components

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

## component defintion: examples

- `PlayingCard` component
- `RomanNumber` component

## data/event flow

- parent → child: props
- child → parent: events

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

## custom events

Event handlers are defined as functions and passed via props.

## custom events

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

## custom events

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

## custom events

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

# Exercise: todo list

# TypeScript

## TypeScript

= superset of JavaScript with extensions:

- **static typing**
- public / private properties
- decorators

## static typing

data types may be specified in order to support the development environment:

- auto completion
- errors when types mismatch

## static typing

when building: TypeScript is translated to JavaScript, all type information is discarded

## type system: variables

```ts
let age: number = 32;
let name: string = 'Andreas';
```

## type system: arrays

```js
let names: Array<string> = ['Anna', 'Bernhard'];
```

alternative Syntax:

```ts
let names: string[] = ['Anna', 'Bernhard'];
```

## type system: functions

```ts
function repeatString(
    text: string,
    times: number): string {
  return ...;
}
```

```ts
const repeatString = (
  text: string,
  times: number
): string => {
  return ...;
};
```

## type system: void

Void: can either be _undefined_ or _null_ - is often used with functions that don't return anything

```ts
function warnUser(): void {
  alert('warning!');
}
```

## type system: any

Any: variable can be of any type - disables the typechecker for this variable

```ts
let ib: any = document.getElementById('myinput');
console.log(ib.value);
```

## type system: type assertions

```ts
(window as any).myGlobalVariable = 'foo';
```

## type system: types & interfaces

Interfaces describe the structure of an object / of a class in detail  
e.g.: `TodoInterface`, `PersonInterface`

Types are similar to interfaces, but are also applicable to strings, arrays, ...

Essentialy types offer more functionality than interfaces

https://stackoverflow.com/a/52682220/

## type system: types

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
  // Methode
  toggle: (id: number) => void;
};
```

## Types and objects

```ts
class AdvancedTodo implements TodoType {
  ...
}
```

## Extends

Via `&`:

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

## Union Types

```ts
type TodoActionType =
  | AddTodoActionType
  | ToggleTodoActionType;
```

## generics

Generic type declarations that can receive more specific type information when called

## generics

```ts
function reducer<MyState, MyAction>(
  state: MyState,
  action: MyAction
): MyState {
  ...
}
```

usage:

```ts
// newState will automatically have the correct type
const newState = reducer<TodoState, TodoAction>(
  myTodoState,
  myTodoAction
);
```

## Generics

```ts
class Component<Props, State> {
  props: Props;
  state: State;

  setState: (newState: Partial<State>) => void;
}
```

usage:

```ts
class MyComp extends Component<MyProps, MyState> {
  ...
}
```

## private & public properties

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

# React with TypeScript

## create-react-app with TypeScript

```bash
npx create-react-app my-app --typescript
```

## components (functions)

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

## components (classes)

```tsx
// TodoList.tsx
type TodoItemProps {
  todo: TodoType;
  onToggle: (id: int) => void;
}
interface TodoItemState {}
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


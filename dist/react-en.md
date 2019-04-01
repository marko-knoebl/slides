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

- Overview of React
- Modern JS / JS-Basics for React
- Declarative Rendering / Working with application state
- Components
- Using predefined Components
- State-Managment with Redux
- Routing
- Testing Components
- Progressive Web Apps

# React.js

## What is React?

- One of the 3 big JavaScript-UI-Libraries (besides Angular, vue.js)

## Basics of modern JavaScript-UI-Libraries

- declarative
- component-based

## declarative

- In the Background there is a data model which describes the entire application state
- The data model changes in response to user interactions, causing the view to update automatically (and efficiently)

## component-based

- "custom" HTML-Tags
- data-flow via props and events
- usually unidirectional dataflow (from parent to child)

## What makes React special?

- JavaScript-based template-syntax
- explicit Mutations of state via _setState()_

## History of React

- used internally at Facebook from 2011
- open source since 2013
- current major version: React 16 (September 2017)

## Example: data model and data flow in a Todo app

![image: data model in a todo app](./images/todo-components-datamodel.svg)

# React.js - Basics

## Developing with node.js and npm

- node.js: JS-Runtime
  - Running the testservr
  - unit-tests
- npm: package manager
  - managing dependencies
  - packages are located in the _node_modules_ - Directory
  - configuration via _package.json_

## create-react-app

most-used method for generating React projects: _create-react-app_

run it via:

```bash
npx create-react-app playground
```

see also: https://reactjs.org/docs/add-react-to-a-new-app.html

## default project structure

- `public/index.html`, `src/index.js`: entry points
- `App.js`, `App.css`: define the App component
- `node_modules`: dependencies

## test server and build

inside the project directory:

- `npm start`: starts the test server
- `npm run build`: creates a build (for deployment)

## JSX: JS + XML

JSX = Template language of React

- **<** switches from JS to XML/HTML
- **{** switches back to JS

## JSX: JS + XML

```jsx
el = <div>Hello, I am {2018 - 1970} years old.</div>;
```

## JSX: Simple tasks

- Show the current date
- Show a random roulette number (0-36)

## component state

A component which will update its state every second:

```js
constructor () {
  super();
  this.state = { now: new Date() };
  setInterval(() => {
    this.setState({ now: new Date() });
  }, 1000);
};
```

```jsx
<div>{this.state.now.toLocaleTimeString()}</div>
```

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

# ESLint

## ESLint

JavaScript-Linter

- VS Code plugin

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

# JavaScript basics for React

## map, filter, reduce

- Array methods for functional programming

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

```js
let myNumbers = [2, 10, 23];

let multiply = (a, b) => a * b;

let result = myNumbers.reduce(multiply, 1);
```

## this

in object methods, `this` usually refers to the current object

**however**, keep in mind:

- each function call sets `this` (not just method calls)
- `this` will only be set correctly if the method is called via the syntax `object.method()`

## problem: _this_ in anonymous functions

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    setTimeout(function() {
      // this will be overwritten here (to 'window')
      console.log(this.foo);
    }, 1000);
  }
}
```

## solution 1: _that_ / _self_

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    let that = this;
    setTimeout(function() {
      // this will be overwritten here (to 'window')
      console.log(that.foo);
    }, 1000);
  }
}
```

## solution 2: _arrow functions_

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    setTimeout(() => {
      // this will *not* be overwritten here
      console.log(this.foo);
    }, 1000);
  }
}
```

## problem: method calls without using method syntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
let f = new Foo();
f.greet(); // works
let fg = f.greet;
fg(); // doesn't work (this is undefined)
```

## solution: arrow methods

Available since ES2018:

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet = () => {
    console.log(this.message);
  };
}
```

## solution: binding the method

```js
let f = new Foo();
f.greet(); // works
let fg = f.greet.bind(f);
fg(); // works as well now
```

Methods are usually bound in the constructor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
```

# React.js - basics II

## JSX compilation

<!-- prettier-ignore -->
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

is compiled to:

```js
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

## JSX: Properties

Changing from XML to JS also works in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

note the missing quotation marks for the href property

## JSX Properties: Task

- Show a random picture. Use this function:

```js
const getImgUrl = () =>
  'https://picsum.photos/200?image=' +
  Math.floor(Math.random() * 100);
```

## JSX: events

```jsx
function hello() {...}

<button onClick={hello}>Say Hello</button>
```

list of browser events:  
https://www.w3schools.com/jsref/dom_obj_event.asp

## JSX: methods as event handlers

Careful: If class methods are used as event handlers they should either be defined as arrow methods or be assigned to the instance via `.bind()`.

## browser events: example

- simple button (Hello world)

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

In practice this is mostly done via the `.map()` method

<!-- prettier-ignore-start -->

```jsx
let todos = [ { title: 'groceries', id: 1 }, ... ];

let list = (
  <ul>
    {todos.map(todo => (
      <li>{todo.title}</li>
    ))}
  </ul>
);
```

<!-- prettier-ignore-end -->

## JSX: repeating elements

With the above code:  
warning in the browser console (concerning efficiency)  
solution: **key** (as a string):

```jsx
let todos = [ { title: 'groceries', id: 0 }, ... ];

let list = <ul>
  {
    todos.map(todo => (
      <li key={todo.id.toString()}>{todo.title}</li>
    ))
  }
</ul>
```

## JSX: if / else

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## JSX: if / else

Task:

## JSX: if / else

```jsx
function cointoss() {
  if (Math.random() > 0.5) {return 'heads';}
  else {return 'tails';}
}
[...]
<div>
  {cointoss()}
</div>
```

## JSX: if

```jsx
<div>{Math.random() > 0.5 && 'heads'}</div>
```

## JSX: CSS classes

```jsx
<div className={getClassName()}>[...]</div>
```

## JSX: dynamic style

```jsx
<div
  style={{
    color: '#fff',
    fontSize: getFontSize(),
  }}
/>
```

## State

React components may have an internal _state_

In each component, `this.state` has a special meaning. Data in `this.state` may be referenced from the template. This way, the view will automatically update when the data changes.

## structure of this.state

- _this.state_ is always an object:

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

## modifying this.state

if the new state depends on the old:

```js
// removing a todo
this.setState(oldState => {
  let newTodos = oldState.todos.slice();
  newTodos.pop();
  return { todos: newTodos };
});
```

We pass a callback function to `setState`. This callback function will transform the old state into the new state.

## Examples

- Counter
- Clock
- Countdown
- Diashow

## Inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be directly modified by the user  
Therefore there are aspects of the UI state which would not be captured in `this.state`.

## Inputs

This is how we can capture changes and track them in the state:

```jsx
<input
  value={this.state.inputText}
  onChange={this.handleChange}
/>;

handleChange = event => {
  this.setState({ inputText: event.target.value });
};
```

# Development tools for React

## React Developer Tools

https://github.com/facebook/react-devtools

- display component tags in an inspector
- show state and props
- highlight changes to state and props
- highlight updates / rerenderings of components

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

# components

## components

Components = custom tags, e.g.

```xml
<Rating stars={4}/>
```

<img src="assets/rating.png" style="height: 4em">

## components

In order to distinguish them from ordinary tags, components start with a capital letter

## components: state & props

- state = internal to the component
- props = parameters that are passed down from the parent

## component definition

- class components
- functional components

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

## functional components

example:

```jsx
function Rating(props) {
  return (
    <div className="rating">{'*'.repeat(props.stars)}</div>
  );
}
```

## functional components

functional components cannot have an internal _state_

## data/event flow

- parent → child: props
- child → parent: events

## Lifecycle-Hooks

With class components it's possible to listen for events in their lifecycle:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

these can be implemented as methods of the component class

## Exercise

Clock-component (with `componentDidMount` and `componentWillUnmount`)

## custom events

examples:

- Rating-component with clickable stars
- NumberInput-component that lets the user specify an integer with + and - buttons
  - bonus: make the API compatible with that of ordinary input-Elements so input-Elements may be easily replaced by NumberInput-components
  - bonus: add a min / max property that can be specified

# Exercise: todo list

# React with TypeScript

## create-react-app with TypeScript

```bash
npx create-react-app my-app --typescript
```

## components (functions)

```ts
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

# Material-UI

Predefined React components conforming to material design style (style of Google/Android)

## Material-UI: Installation and Usage

https://material-ui.com

see info boxes on _Installation_ und _Usage_

## Exercises

- Button
- Todo-App in Material Style


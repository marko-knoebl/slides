# React with class components

# Overview

## History

Class components were widely used before the introduction of hooks (with React 16.8, in February 2019)

Today focus is shifting away from class components and towards hooks

## Class components vs hooks

reasons for using hooks:

- reducing complexity
- easier code re-use / modularity
- avoiding problems with `this`

reasons for using class components:

- concepts are probably more familiar in the beginning
- simpler memoization
- instance variables (in class components) are simpler than refs (in function components)

## Class component example

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default App;
```

# "this" and its quirks in JavaScript

## "this" and its quirks

in object methods, `this` usually refers to the current object

**however**, keep in mind:

- each function call sets `this` (not just method calls)
- `this` will only be set correctly if the method is called via the syntax `object.method()`

## Problem: _this_ in anonymous functions

```js
class myComponent {
  constructor() {
    // this ist set correctly here
    this.foo = true;
    setTimeout(function () {
      // this will be overwritten here (to 'window')
      console.log(this.foo);
    }, 1000);
  }
}
```

## Solution: _arrow functions_

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

## Problem: method calls without method syntax

```js
class Foo {
  constructor() {
    this.message = 'hello';
  }
  greet() {
    console.log(this.message);
  }
}
const foo = new Foo();
foo.greet(); // ok
const greet = foo.greet;
greet(); // not ok ("this" is undefined)
```

## Solution: arrow methods

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

## Solution: binding the method

```js
const foo = new Foo();
foo.greet(); // ok
const greet = foo.greet.bind(foo);
greet(); // ok
```

Methods are usually bound in the constructor:

```js
  constructor() {
    this.greet = this.greet.bind(this);
  }
```

# Props

## Props

Props can be accessed via `this.props`:

```jsx
class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.completed ? 'DONE: ' : 'TODO: '}
        {this.props.title}
      </div>
    );
  }
}
```

# State

## State

In class components, `this.state` represents the state.

`this.state` is always a JavaScript object which can have various entries (properties)

State changes happen via `this.setState()`

## Structure of this.state

_this.state_ is always an object:

```json
{
  "loggedIn": true,
  "todos": [
    { "id": 1, "title": "laundry", "completed": false },
    { "id": 2, "title": "groceries", "completed": true },
    { "id": 5, "title": "taxes", "completed": false }
  ]
}
```

## Initializing the state

The state must be initialized in the constructor

The constructor will also receive the component's props as an argument

## Initializing the state

```js
constructor(props) {
  super(props);
  this.state = {
    loggedIn: true,
    todos: ['laundry', 'groceries', 'taxes'],
  }
}
```

JavaScript requires calling the constructor of the parent class (`Component`) via `super()` in the constructor

## Modifying this.state

only via `setState()`:

```js
this.setState({ loggedIn: false });
```

`setState` will change all specified entries and leave the rest unchanged

## Repeated calls to this.setState

Advice: In an event handler `setState` should only be called once.

If you do want to call `setState` multiple times and one call depends on the modifications of the previous call:

```js
this.setState(oldState => ({ count: oldState.count + 1 }));
this.setState(oldState => ({ count: oldState.count + 1 }));
```

Pass a function to `setState`. This function will transform the old state into the new state.

# Class components with TypeScript

## Class components with TypeScript

```tsx
type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: int) => void;
};
type TodoItemState = {};
```

```tsx
import { Component } from 'react';

class TodoItem extends Component<
  TodoItemProps,
  TodoItemState
> {
  // ...
}
```

# Component lifecycle

## Component lifecycle

three main lifecycle methods that can be implemented in a component class:

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

## Example: DocumentTitle component

We will create a component that can set the document title dynamically:

```xml
<DocumentTitle value="my custom title" />
```

This component may appear anywhere in the React application.

## Example: DocumentTitle component

```jsx
class DocumentTitle extends Component {
  componentDidMount() {
    document.title = this.props.value;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = this.props.value;
  }

  render() {
    return null;
  }
}
```

## Example: Clock component

```jsx
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return <div>{this.state.time}</div>;
  }
```

## Example: Clock component

```jsx
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
```

# React & JSX Basics

## Online editors

recommendation: https://codesandbox.io/s

others:

- Glitch: https://glitch.com/edit/#!/remix/starter-react-template
- CodePen: https://reactjs.org/redirect-to-codepen/hello-world

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

## JSX: Simple tasks

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

## JSX: Properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note: no quote characters around the value of _href_

## JSX: repeating elements

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

## JSX: repeating elements

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

## JSX: events

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
https://www.w3schools.com/jsref/dom_obj_event.asp

## JSX: events

note: an event handler must be a **function**, not a function call

OK:

```js
<button onClick={alert}>Say Hello</button>
```

not OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

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

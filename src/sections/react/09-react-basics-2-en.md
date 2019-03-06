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

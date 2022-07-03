# React overview

## React overview

_React_: JavaScript library for creating interactive user interfaces in the browser

## Basics of modern JavaScript UI libraries

- state-based / declarative
- component-based

## State-based / declarative

- data model which describes the entire application state
- user interactions change the state, causing the UI to update automatically

## State-based / declarative

Example: complete state of a todo application

```json
{
  "newTitleInput": "learn Rea",
  "todos": [
    { "id": 1, "title": "laundry", "completed": true },
    { "id": 4, "title": "shopping", "completed": true },
    { "id": 7, "title": "gardening", "completed": false }
  ]
}
```

## State-based / declarative

possible appearance of a todo application:

<img src="assets/todolist.png" alt="screenshot of a todo list application" style="height: 400px" />

## Component-based

- "custom" HTML-Tags
- communication between parent and child elements via _props_ and _events_

## Component-based

example: component structure in a todo application

<img src="assets/todolist-component-structure.png" alt="screenshot of a todo list application with components outlined in red" style="height: 400px" />

## Component-based

Example: components, state and props in a todo application

<img src="assets/todo-components-state-props.svg" />

## What makes React special?

- JavaScript-based template syntax: JSX
- explicit state changes via setters
- immutable (unchangeable) state objects

## JSX

simple code example with state and JSX:

```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>current count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>
          increment
        </button>
      </div>
    </div>
  );
}
```

# React overview

## React

React is a JavaScript library for creating interacive user interfaces in the browser

alternatives: Angular, Vue.js

## Basics of modern JavaScript UI libraries

- state-based / declarative
- component-based

## State-based / declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

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
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

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

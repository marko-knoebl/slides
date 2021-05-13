# React overview

## What is React?

one of the 3 big JavaScript UI libraries / frameworks (besides Angular, Vue.js)

## Basics of modern JavaScript UI libraries

- declarative
- component-based

## Declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

## Component-based

- "custom" HTML-Tags
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

## Example: components and state in a todo app

<img src="assets/todo-components-state.svg" />

## Example: props and events in a todo app

<img src="assets/todo-components-state-props-events.svg" />

## What makes React special?

- JavaScript-based template syntax: JSX
- explicit state changes via setters
- immutable (unchangeable) state objects

## History of React

- open-sourced by Facebook in 2013
- February 2019: React 16.8: introduction of _hooks_
- August 2020: React 17: no big changes
- upcoming additions: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) and [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

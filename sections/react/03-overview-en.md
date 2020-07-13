# React.js overview

## What is React?

one of the 3 big JavaScript UI frameworks (besides Angular, Vue.js)

## Basics of modern JavaScript UI frameworks

- declarative
- component-based

## Declarative

- data model which describes the entire application state
- user interactions change the data model, causing the view to update automatically

## Component-based

- "custom" HTML-Tags
- data flow via props and events
- usually unidirectional dataflow (from parent to child)

## Example: data model and data flow in a todo app

<img src="assets/todo-components-datamodel.svg" type="text/svg" style="width: 300px"/>

## What makes React special?

- JavaScript-based template syntax
- explicit state changes via setters
- immutable state objects

## History of React

- open-sourced by Facebook in 2013
- current major version: React 16 (September 2017)
- February 2019: introduction of hooks
- upcoming in 2020: [suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) and [concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)

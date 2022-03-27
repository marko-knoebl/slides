# Components

## Components

React applications can be split into separate components

purposes:

- code reuse
- code organization

## Components and state

parent components can pass down parts of their state to child components

child components can trigger events that cause the state in their parent component to update

## Where should state live?

If multiple components need to access the same state, the state is usually stored in their common ancestor component and is passed down via props (see: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

Often, the main parts of the state will be stored in the top-level component (e.g. in `App`)

## Example: components and state in a todo app

<img src="assets/todo-components-state.svg" />

## Example: props and events in a todo app

<img src="assets/todo-components-state-props-events.svg" />

## Component definition

options:

- defining a component as a function
- defining a component as a class (was especially common / necessary before the introduction of hooks)

## Component definition

In order to distinguish them from ordinary tags, component names start with a capital letter

# State, props and events

## State and props

parent components can pass down data from their **state** to child components via **props** (unidirectional data flow)

if we know a component's props and state, we will know how it is rendered

## State, props and events

child components can trigger **events** that cause the state in their parent component to update

## Where should state live?

if multiple components need to access the same state:

the state is stored in their common ancestor component and passed down via props

(see: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

often, the main parts of the state will be stored in the top-level component (e.g. in `App`)

## Example: components and props in a todo app

<img src="assets/todo-components-state-props.svg" />

## Example: components and events in a todo app

<img src="assets/todo-components-state-events.svg" />

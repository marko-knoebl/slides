# Props and events

## State and props

parent components can pass down data from their **state** to child components via **props** (unidirectional data flow)

if we know a component's props and state, we will know how it is rendered

## Example: components and props in a todo app

<img src="assets/todo-components-state-props.svg" />

## Sharing state between components

if multiple components need to access the same state:

the state is stored in a component higher up in the component tree and passed down via props

(see: [React docs: sharing state between components](https://beta.reactjs.org/learn/sharing-state-between-components))

often, the main parts of the state will be stored in the top-level component (e.g. in `App`)

## Events

child components can trigger **events** that cause the state in their parent component to update

## Example: components and events in a todo app

<img src="assets/todo-components-state-events.svg" />

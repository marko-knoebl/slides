# Side effects

## Side effects

When component props / state change:

"main effect": component (re-)renders with current data

potential "side effects": triggering API queries, saving data, explicitly manipulating the DOM, ...

## Side effects

Typically, we will want to trigger side effects _when some specific props / state or other data have changed_ or _when the component is rendered for the first time_

## Side effects

typical use cases for side effects:

- triggering API queries
  - when a component is rendered for the first time
  - when some data (state / props) have changed (e.g. the user has selected a specific item to view its details)
- saving some data to the browser storage if it has changed
- explicitly manipulating the DOM
- starting timers
- ...

## Side effects

implementation:

in function components: via the _effect_ hook

in class components: via lifecycle methods

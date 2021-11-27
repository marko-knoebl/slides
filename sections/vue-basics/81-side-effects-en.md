# Side effects

## Side effects

when component props / state change:

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

common triggers for a side effect:

- on initial rendering of a component
- when entries in _state_ / _props_ change

## Side effects

side effects in the options API:

- lifecycle event: `created`
- when data changes: `watch` function

side effects in the composition API (variant 1):

- initialization inside of `setup`
- when data changes: `watch` function

side effects in the composition API (variant 2):

- `watchEffect` function: runs initially and on any watched changes

# Side effects

## Side effects

When component props / state change or the component is included for the first time:

"main effect": component (re-)renders with current data

potential "side effects": triggering API queries, saving data, explicitly manipulating the document, starting timers, ...

## Side effects

typical use cases for side effects:

- triggering API queries
  - when a component is rendered for the first time
  - when some data (state / props) have changed (e.g. the user has selected a specific item to view its details)
- saving some data to the browser storage if it has changed
- explicitly manipulating the document (DOM)
- starting timers
- ...

## Side effects

some side effects may need to be "cleaned up":

- aborting API queries if they are not needed anymore (e.g. if a search term has changed)
- stopping timers
- ...

## Side effects

implementation:

in function components: via the _effect_ hook

in class components: via lifecycle methods

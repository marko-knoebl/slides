# Immutable state

## Immutable state

**Immutability**: important concept in functional programing and with React

Data is not modified directly - instead, new data is derived from existing data (and may replace the existing data)

## Immutable state

if there are arrays or objects in the state we _could_ try and mutate them directly

don't do this - React will not notice the changes and may not rerender the view

state should be considered as _immutabe_ (unchangeable)

## Immutable state

When a state setter is called:

React will compare the _old state reference_ and the _new state reference_

If the reference is the same, the component will not be rerendered

## Immutable state

demo: <https://codesandbox.io/s/immutable-state-demo-r2x1i>

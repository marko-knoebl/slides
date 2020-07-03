# Testing

## Automated testing in JavaScript

Some functions in React - including Reducers - are just plain JavaScript functions and can be tested like any other function.

See the presentation [JavaScript Testing](./javascript-testing-en.html) for an overview (note: the library Jest is already set up in a create-react-app project)

## Testing React components

what to test:

- rendering
- triggering events
- changing state

## Testing React components

three general steps:

- arrange
- act
- assert

## Test renderers for React

- `react-testing-library` (subproject of _testing library_)
- `react-test-renderer` (developed by the React team)
- `Enzyme`

## Snapshot Tests

Components are rendered and compared to earlier versions (snapshots)

# Testing

## Automated testing in JavaScript

Some functions in React - including Reducers - are just plain JavaScript functions and can be tested like any other function.

See the presentation [JavaScript Testing](./javascript-testing-en.html) for an overview

## Testing React components

what to test:

- rendering
- triggering events
- changing state

## Test renderers for React

- `react-test-renderer` (developed by the React team)
- `react-testing-library` (subproject of _testing library_, first published in mid-2019)
- `Enzyme`

## Snapshot Tests

Components are rendered and compared to earlier versions (snapshots)

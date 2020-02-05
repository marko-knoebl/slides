# Snapshot tests

### with react-test-renderer

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests in React - creating tests

```jsx
// Rating.test.js
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Rating from './Rating.js';

it('renders correctly', () => {
  const tree = TestRenderer
    .create(<Rating stars={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

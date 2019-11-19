# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - setup

```bash
npm install --save-dev react-test-renderer
```

for TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## Snapshot tests in React - creating tests

```jsx
// Rating.test.js
import React from 'react';
import Rating from './Rating.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rating stars={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

## updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

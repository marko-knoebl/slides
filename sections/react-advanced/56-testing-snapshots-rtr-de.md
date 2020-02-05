# Snapshot Tests

### mit react-test-renderer

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests in React - Tests erstellen

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

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft, können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

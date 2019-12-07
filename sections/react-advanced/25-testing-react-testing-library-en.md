# React-Testing-Library

## Testing-Library

**Testing-Library**: project for testing UI components

tests focus on aspects that are relevant for the end user (an not on the exact DOM structure)

## React-Testing-Library - Installation

```bash
npm install --save-dev @testing-library/react
```

recommended additional assertions for Jest:

```bash
npm install --save-dev @testing-library/jest-dom
```

## React-Testing-Library - Example

```js
import { render } from '@testing-library/react';

it('renders a component without crashing', () => {
  const instance = render(<MyComponent />);
});
```

## React-Testing-Library - Querying elements

- `.getByText` (throws if there is not a unique match)
- `.getAllByText` (throws if there are no matches)
- `.queryByText`
- `.queryAllByText`
- ... (see [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## React-Testing-Library - advanced asserts for Jest

activate via:

```js
import '@testing-library/jest-dom/extend-expect';
```

examples:

- `.toBeInTheDocument()`
- `.toContainHTML()`
- `.toHaveClass()`
- ...

see [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Example: Testing with Jest and React Testing Library

Testing a rating component

## Test setup

```js
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import Rating from './Rating';

afterEach(() => {
  cleanup();
});
```

## Testing the rendering

```jsx
it('renders three full stars', () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText('★');
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass('active');
  }
});
```

## Testing events

```jsx
it('reacts to click on the fourth star', () => {
  const mockFn = jest.fn();
  const instance = render(
    <Rating stars={3} onStarsChange={mockFn} />
  );
  const firstEmptyStar = instance.getAllByText('☆')[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});
```

## Testing errors

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

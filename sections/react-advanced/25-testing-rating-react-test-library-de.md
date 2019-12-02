# Beispiel: Testen mit Jest und React Testing Library

Testen einer Rating Komponente

## Test-Setup

```js
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import Rating from './Rating';
```

## Testen des Renderings

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

## Testen von Events

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

## Testen von Fehlern

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

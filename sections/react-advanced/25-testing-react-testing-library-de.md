# React-Testing-Library

## Testing-Library

**Testing-Library**: Projekt zum Testen von UI Komponenten (u.a. React)

Fokus der Tests liegt auf Aspekten, die für den Endnutzer relevant sind (nicht so sehr auf der genauen DOM-Struktur)

## React-Testing-Library - Installation

```bash
npm install --save-dev @testing-library/react
```

empfohlene zusätzliche Assertions für Jest:

```bash
npm install --save-dev @testing-library/jest-dom
```

## React-Testing-Library - Beispiel

```js
import { render } from '@testing-library/react';

it('renders a component without crashing', () => {
  const instance = render(<MyComponent />);
});
```

## React-Testing-Library - Elemente abfragen

- `.getByText` (wirft Exception, wenn es keinen eindeutigen Match gibt)
- `.getAllByText` (wirft Exception, wenn es keine Matches gibt)
- `.queryByText`
- `.queryAllByText`
- ... (siehe [https://testing-library.com/docs/dom-testing-library/api-queries](https://testing-library.com/docs/dom-testing-library/api-queries))

## React-Testing-Library - erweiterte asserts für Jest

einsetzbar mittels:

```js
import '@testing-library/jest-dom/extend-expect';
```

Beispiele:

- `.toBeInTheDocument()`
- `.toContainHTML()`
- `.toHaveClass()`
- ...

siehe [https://github.com/testing-library/jest-dom](https://github.com/testing-library/jest-dom)

## Beispiel: Testen mit Jest und React Testing Library

Testen einer Rating Komponente

## Test-Setup

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

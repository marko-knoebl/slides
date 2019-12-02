# Testing React

## Test renderers for React

- `react-test-renderer` (developed by the React team)
- `react-testing-library` (subproject of _testing library_, first published in mid-2019)
- `Enzyme` (no support for React hooks yet)

## React-Test-Renderer - installation

```bash
npm install --save-dev react-test-renderer
```

with TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Example

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - working with instances

- `instance.find(All)`
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Testing-Library - Installation

```bash
npm install --save-dev @testing-library/react
```

recommended additional assertions for jest:

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

## Enzyme - Installation & Setup

```
npm install --save-dev enzyme enzyme-adapter-react-16
```

new file `src/setupTests.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Examples

```jsx
import { shallow, mount } from 'enzyme';

it('renders a component without crashing', () => {
  const wrapper = shallow(<MyComponent />);
});

it('renders a component tree without crashing', () => {
  const wrapper = mount(<MyComponent />);
});
```

## Enzyme - Cheatsheet

https://devhints.io/enzyme

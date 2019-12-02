# Testen von React-Anwendungen

## Test Renderer für React

- `react-test-renderer` (vom React Team entwickelt)
- `react-testing-library` (Unterprojekt von _Testing Library_, Erstveröffentlichung Mitte 2019)
- `Enzyme` (bietet noch keine Unterstützung für Hooks)

## React-Test-Renderer - Installation

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev react-test-renderer @types/react-test-renderer
```

## React-Test-Renderer - Beispiel

```js
import TestRenderer from 'react-test-renderer';

it('renders a component without crashing', () => {
  const instance = TestRenderer.create(<MyComponent />)
    .root;
});
```

## React-Test-Renderer - mit Instanzen arbeiten

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

## Enzyme - Installation & Einrichtung

```bash
npm install --save-dev enzyme enzyme-adapter-react-16
```

neue Datei `src/setupTests.js`:

```js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Beispiele

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

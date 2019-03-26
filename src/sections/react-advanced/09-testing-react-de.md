# Testen von React-Anwendungen

## Test Renderer für React

- `react-test-renderer` (vom React Team entwickelt)
- `Enzyme` (von Airbnb entwickelt)

## Enzyme - Einrichtung

```
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

## Enzyme - Beispiele

Tests mit Jest

```jsx
it('renders three <Foo /> components', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).toHaveLength(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).toHaveLength(1);
});
```

## Enzyme - Beispiele

Tests mit Chai

```jsx
it('reacts to click events', () => {
  const onButtonClick = sinon.spy();
  const wrapper = shallow(
    <Foo onButtonClick={onButtonClick} />
  );
  wrapper.find('button').simulate('click');
  expect(onButtonClick).to.have.property('callCount', 1);
});
```

## Enzyme - Beispiele

```jsx
it('reacts to click events', () => {
  const mockFunction = jest.fn();

  const wrapper = mount(
    <Rating stars={3} onStarsChange={mockFunction} />
  );
  expect(
    wrapper
      .childAt(0)
      .childAt(2)
      .text()
  ).toBe('*');
  wrapper
    .childAt(0)
    .childAt(1)
    .simulate('click');
  expect(mockFunction).toBeCalledWith(2);
});
```

## Enzyme - Examples

```jsx
it('changes state when clicked', () => {
  const wrapper = shallow(<Counter />);
  expect(wrapper.instance.state.count).toEqual(0);
  wrapper.childAt(0).simulate('click');
  expect(wrapper.instance.state.count).toEqual(1);
});
```

## Snapshot Tests

Komponenten werden gerendert und mit früheren Versionen (Snapshots) verglichen

Snapshot Tests fallen unter Regressionstests.

## Snapshot Tests - setup

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev @types/react-test-renderer
```

## Snapshot Tests in React - Tests erstellen

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

## Snapshot Tests aktualisieren

Haben wir das Verhalten einer Komponente geändert und danach ihr Verhalten überprüft,
können wir Snapshot-Tests entsprechend aktualisieren:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

# Testing React

## Test renderers for React

- `react-test-renderer` (developed by the React team)
- `Enzyme` (developed by Airbnb)

## Enzyme - Setup

```
npm install --save-dev enzyme enzyme-adapter-react-16
```

new file `src/setupTests.js`:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Examples

Tests with Jest

```jsx
it('renders three <Foo /> components', () => {
  // Alternative for shallow: mount()
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).toHaveLength(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).toHaveLength(1);
});
```

## Enzyme - Examples

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

## Enzyme - Examples

```jsx
it('reacts to click events', () => {
  const mockFunction = jest.fn();

  const wrapper = mount(
    <Rating stars={3} onStarsChange={mockFunction} />
  );
  expect(wrapper.childAt(0).childAt(2).text()).toBe('*');
  wrapper.childAt(0).childAt(1).simulate('click');
  expect(mockFunction).toBeCalledWith(2);
});
```

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - setup

```bash
npm install --save-dev react-test-renderer
```

für TypeScript:

```bash
npm install --save-dev @types/react-test-renderer
```

## Snapshot tests in React - creating tests

```jsx
// Rating.test.js
import React from 'react';
import Rating from './Rating.js';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
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

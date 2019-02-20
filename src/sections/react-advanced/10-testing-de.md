# Testen von React-Anwendungen

## Testen von React-Anwendungen

Standard test-framework für React: [jest](https://facebook.github.io/jest/)

## Beispiel

```js
// shorten.js
const shorten = (s, maxlength) => {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
};

export { shorten };
```

## Beispiel

```js
// shorten.test.js
import { shorten } from './shorten';

it('shortens "loremipsum" to "lor..."', () => {
  const expected = 'lor...';
  const actual = shorten('loremipsum', 6);
  expect(actual).toEqual(expected);
});
```

## Tests ausführen

```bash
npm test
```

Jest findet von alleine Dateien mit der Endung _.test.js_.

## Andere Matcher

Außer `.toEqual` gibt es noch:

- `.toBeGreaterThan()`
- `.toMatch()`
- `.toThrow()`
- `.not.toEqual()`
- ...

## Gruppieren von Tests

mit `describe()`:

```js
describe('strings that are short enough', () => {
  it('leaves "abc" unchanged with limit 5', () => {
    expect(shorten('abc', 5)).toEqual('abc');
  });
  it('leaves "loremipsum" unchanged with limit 10', () => {
    expect(shorten('loremipsum', 10)).toEqual('loremipsum');
  });
});
```

## Setup und teardown

Für Code, der vor bzw nach jedem Test ausgeführt werden soll:

```js
beforeEach(() => {
  createTestDB();
});

afterEach(() => {
  clearTestDB();
});
```

## Test Renderer für React

- `react-test-renderer` (vom React-Team)
- `Enzyme` (entwickelt von Airbnb)

## Enzyme - Setup

```
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

neue Datei `setupTests.js`:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Enzyme - Beispiele

```jsx
it('renders three <Foo /> components', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find(Foo)).to.have.lengthOf(3);
});

it('renders an `.icon-star`', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
});
```

## Enzyme - Beispiele

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

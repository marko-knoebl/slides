# React: Testing and Component Demos

## React: Testing and Component Demos

### Topics

- component demos with _Storybook_
- as needed: testing in JavaScript
- libraries for testing React components
  - react-testing-library
  - react-test-renderer
  - enzyme
- snapshot tests

# Storybook

## Storybook

Enables the creation of isolated component demos

examples:

- <https://storybookjs.netlify.com/official-storybook/>
- <https://airbnb.io/react-dates/>

## Setup

in a Create-React-App project:

```bash
npx -p @storybook/cli sb init --type react_scripts
```

in a regular React project:

```bash
npx -p @storybook/cli sb init --type react
```

## Running

```bash
npm run storybook
```

## Stories

basic example: _Rating.stories.js_

```jsx
import React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const oneStar = () => <Rating stars={1} />;
export const fiveStars = () => <Rating stars={5} />;
```

## Addons

see <https://storybook.js.org/addons/>:

- _@storybook/knobs_ (component props)
- _@storybook/actions_ (component events)
- ...

Addons are configured via _.storybook/main.js_

## Knobs addon

for component props:

```jsx
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Rating',
  component: Rating,
  decorators: [withKnobs],
};

export const variableStars = () => {
  const rating = number('rating', 1);
  return <Rating stars={rating} />;
};
```

## Actions addon

for component events:

```jsx
import { action } from '@storybook/addon-actions';

export const oneStarInteraction = () => (
  <Rating
    stars={1}
    onChange={action('rating change triggered')}
  />
);
```

# Testing

## Automated testing in JavaScript

Some functions in React - including Reducers - are just plain JavaScript functions and can be tested like any other function.

See the presentation [JavaScript Testing](./javascript-testing-en.html) for an overview

## Testing React components

what to test:

- rendering
- triggering events
- changing state

## Test renderers for React

- `react-testing-library` (subproject of _testing library_)
- `react-test-renderer` (developed by the React team)
- `Enzyme`

## Snapshot Tests

Components are rendered and compared to earlier versions (snapshots)

# React-Testing-Library

## Testing-Library

**Testing-Library**: project for testing UI components

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure)

## React-Testing-Library

```js
import { render } from '@testing-library/react';

it('renders learn react link', () => {
  const instance = render(<App />);
  const linkElement = instance.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Querying elements

- `.getByText` (throws if there is not a unique match)
- `.getAllByText` (throws if there are no matches)
- `.getByTitle`
- `.getByLabelText`
- ... (see <https://testing-library.com/docs/dom-testing-library/api-queries>)

## Assertions

extra assertions:

- `.toHaveTextContent()`
- `.toBeInTheDocument()`
- ... see <https://github.com/testing-library/jest-dom>

## Testing the rendering

rating component:

```jsx
import { render } from '@testing-library/react';

it('renders three full stars', () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText('★');
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass('active');
  }
});
```

## Testing the rendering

slideshow component:

```jsx
it('renders a slideshow starting at image 0', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=0'
  );
});
```

## Testing state changes

slideshow component:

```jsx
import { fireEvent } from 'react-testing-library';

it('switches to the next slide', () => {
  const instance = render(<Slideshow />);
  const slide = instance.getByAltText('slide');
  fireEvent.click(instance.getByText('next'));
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=1'
  );
});
```

## Testing events

rating component:

```jsx
it('triggers an event when the fourth star is clicked', () => {
  const mockFn = jest.fn();
  const instance = render(
    <Rating stars={3} onStarsChange={mockFn} />
  );
  const firstEmptyStar = instance.getAllByText('☆')[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});
```

## Testing asynchronous code

`ChuckNorrisJoke` component which queries an API:

```js
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(res => setJoke(res.data.value));
  }, []);
  if (!joke) {
    return <div>loading...</div>;
  }
  return <h1 title="joke">{joke}</h1>;
};
```

## Testing asynchronous code

testing with an actual API:

```js
import { waitForElement } from '@testing-library/react';

it('loads Chuck Norris joke from API', async () => {
  const instance = render(<ChuckNorrisJoke />);
  const jokeElement = await waitForElement(() =>
    instance.getByTitle('joke')
  );
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

`waitForElement` will repeatedly query for an element until it exists

## Mocking objects

mocking API calls:

replacing `axios` with a mocked module:

```js
import axios from 'axios';
jest.mock('axios');
```

mocking `axios.get` as a successful promise:

```js
axios.get.mockResolvedValueOnce({
  data: {
    value: 'Chuck Norris counted to infinity. Twice.',
  },
});
```

## Testing errors

rating component:

```jsx
it('throws an error if the number of stars is 0', () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow('number of stars must be 1-5');
});
```

## Manual setup

these steps are already set up when using `create-react-app`

enable advanced assertions (see <https://github.com/testing-library/jest-dom>):

```js
import '@testing-library/jest-dom/extend-expect';
```

test case cleanup (unmounting):

```js
import { cleanup } from '@testing-library/react';

afterEach(cleanup);
```

## Resource

<https://react-testing-examples.com/>

# React-Test-Renderer

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

- `instance.find(All)` (receives a test function as an argument)
- `instance.find(All)ByType`
- `instance.find(All)ByProps`
- `instance.props`
- `instance.children`
- `instance.type`

## React-Test-Renderer - API reference

<https://reactjs.org/docs/test-renderer.html>

## Example: Testing with Jest and React-Test-Renderer

Testing a Rating component

## Test setup

```jsx
import React from 'react';
import TestRenderer from 'react-test-renderer';

import Rating from './Rating';
```

## Testing the rendering

```jsx
describe('rendering', () => {
  it('renders 5 spans', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(instance.findAllByType('span')).toHaveLength(5);
  });

  it('renders 3 active stars', () => {
    const instance = TestRenderer.create(
      <Rating stars={3} />
    ).root;
    expect(
      instance.findAllByProps({ className: 'star active' })
    ).toHaveLength(3);
  });
});
```

## Testing events

```jsx
describe('events', () => {
  it('reacts to click on the fourth star', () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <Rating stars={3} onStarsChange={mockFn} />
    ).root;
    const fourthStar = instance.findAllByType('span')[3];
    fourthStar.props.onClick();
    expect(mockFn).toBeCalledWith(4);
  });
});
```

## Testing exceptions

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow('number of stars must be 1-5');
  });
});
```

# Enzyme

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

<https://devhints.io/enzyme>

## Example: testing a rating component

With jest and enzyme

## Example: testing a rating component

```jsx
import React from 'react';
import { shallow, mount } from 'enzyme';

import Rating from './Rating';
```

## Example: testing a rating component

```jsx
describe('rendering', () => {
  it('renders 5 Star components', () => {
    const wrapper = shallow(<Rating stars={5} />);
    expect(wrapper.find('Star')).toHaveLength(5);
  });

  it('renders 5 stars', () => {
    const wrapper = mount(<Rating stars={5} />);
    expect(wrapper.find('.star')).toHaveLength(5);
  });
});
```

## Example: testing a rating component

```jsx
describe('rendering', () => {
  it('renders 3 active stars', () => {
    const wrapper = mount(<Rating stars={3} />);
    expect(wrapper.find('.star')).toHaveLength(5);
    expect(
      wrapper.find('.star').get(2).props.className
    ).toEqual('star active');
    expect(
      wrapper.find('.star').get(3).props.className
    ).toEqual('star');
  });
});
```

## Example: testing a rating component

```jsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const mockFn = fn();
    const wrapper = mount(
      <Rating stars={3} onStarsChange={mockFn} />
    );
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(mockFn.mock.calls[0][0]).toEqual(1);
  });
});
```

## Example: testing a rating component

Testing a (hypothetical) rating component that has its own internal state:

```jsx
describe('events', () => {
  it('reacts to click on first star', () => {
    const wrapper = mount(<Rating />);
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(wrapper.instance.state.count).toEqual(1);
  });
});
```

## Example: testing a rating component

```jsx
describe('errors', () => {
  it('throws an error if the number of stars is 0', () => {
    const testFn = () => {
      const wrapper = shallow(<Rating stars={0} />);
    };
    expect(testFn).toThrow(
      'number of stars must be positive'
    );
  });
});
```

# Snapshot tests

## Snapshot tests

Components are rendered and compared to earlier versions (snapshots)

Snapshot tests are a kind of regression tests

## Snapshot tests - creating tests

with react-testing-library

```jsx
it('matches the snapshot', () => {
  const instance = render(<Slideshow />);
  expect(instance.baseElement).toMatchSnapshot();
  const slide = instance.getByAltText('slide');
  expect(slide).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behaviour of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

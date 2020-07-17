# React: Testing and Component Demos

## Topics

- component demos with _Storybook_
- as needed: testing in JavaScript
- libraries for testing React components
  - react-testing-library
  - react-test-renderer
  - enzyme
- snapshot tests

## Resource

[Presentation on testing React / JavaScript by Gabriel Vasile](https://docs.google.com/presentation/d/1ljMA8glel6hCopJ9Ib221A-pZ6brnibuwpzRLf1A3OM)

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

See the presentation [JavaScript Testing](./javascript-testing-en.html) for an overview (note: the library Jest is already set up in a create-react-app project)

## Testing React components

what to test:

- rendering
- reacting to user actions

## Testing React components

three general steps:

- arrange
- act
- assert

## Test renderers for React

- **react-testing-library**
- _react-test-renderer_ (developed by the React team)
- _Enzyme_

## Snapshot Tests

Components are rendered and compared to earlier versions (snapshots)

# React-Testing-Library basics

## React-Testing-Library

**React-Testing-Library**: project for testing UI components (most significant subproject of the _Testing-Library_)

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure or implementation details)

## Example

```js
import { render, screen } from '@testing-library/react';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', {
    name: /learn react/i,
  });
  expect(linkElement).toBeInTheDocument();
});
```

## Querying elements

Querying by _ARIA role_ and _accessible name_:

```js
screen.getByRole('button', { name: 'delete' });
screen.getByRole('textbox', { name: /new title/i });
screen.getAllByRole('listitem');
```

the _accessible name_ could be:

- text content
- alt text of an image
- title text of a link / image
- label text of an input

## Querying elements

example roles (set implicitly or explicitly):

- _article_
- _button_
- _checkbox_
- _form_
- _heading_
- _img_
- _link_
- _list_
- _listitem_
- _menuitem_
- _presentation_
- _textbox_
- ... (see [role definitions from W3C](https://www.w3.org/TR/2014/REC-wai-aria-20140320/roles#role_definitions))

## Assertions

extra assertions (enabled automatically when using _create-react-app_):

- `.toHaveTextContent()`
- `.toHaveAttribute()`
- `.toBeInTheDocument()`
- ... (see <https://github.com/testing-library/jest-dom>)

## Testing the rendering

_Slideshow_ component:

```jsx
it('renders a slideshow starting at image 0', () => {
  render(<Slideshow />);
  const slide = screen.getByRole('img');
  expect(slide).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=0'
  );
});
```

## Testing the rendering

_TodoItem_ component:

```jsx
it('renders a list item with a given title text', () => {
  const title = 'title-text';
  render(<TodoItem title={title} completed={false} />);
  const todoElement = screen.getByRole('listitem');
  expect(todoElement).toHaveTextContent(new RegExp(title));
});
```

## Testing state changes

_Slideshow_ component:

```jsx
import { fireEvent } from 'react-testing-library';

it('switches to the next slide', () => {
  render(<Slideshow />);
  fireEvent.click(
    screen.getByRole('button', { name: 'next' })
  );
  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    'https://picsum.photos/200?image=1'
  );
});
```

## Testing events

_TodoItem_ component:

```jsx
it('triggers an event when the todo is clicked', () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="title-text"
      completed={false}
      onToggle={mockFn}
    />
  );
  fireEvent.click(screen.getByRole('listitem'));
  expect(mockFn).toHaveBeenCalled();
});
```

## Resources

- [How to use React Testing Library Tutorial, Robin Wieruch](https://www.robinwieruch.de/react-testing-library)
- [react-testing-examples.com](https://react-testing-examples.com/)
- [JavaScript Testing Masterclass, Gabriel Vasile](https://docs.google.com/presentation/d/1ljMA8glel6hCopJ9Ib221A-pZ6brnibuwpzRLf1A3OM/)

# React-Testing-Library intermediate

## Other queries

- `getByText`: e.g. for _divs_, _spans_
- `getByLabelText`: for form fields
- `getByAltText`: e.g. for images
- `getByTitle`: e.g. for images / links
- ... (see <https://testing-library.com/docs/dom-testing-library/api-queries#queries>)

## getByText

useful for _divs_ / _spans_ (no default _role_)

note: Consider giving the element an appropriate role, and using e.g. `getByRole("presentation", { name: "text" })`

## Testing asynchronous interactions and APIs

Use `.findByRole`, instead of `.getByRole` to wait for an element to appear

`findByRole` will repeatedly query for an element until it exists (by default every 0.05 seconds for a maximum of 1 second)

## Testing asynchronous code

task: testing a `ChuckNorrisJoke` component which queries an API:

```js
const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);
  if (!joke) {
    return <div role="status">loading...</div>;
  }
  return <article>{joke}</article>;
};
```

## Testing asynchronous interactions

testing with an actual API:

```js
it('loads Chuck Norris joke from API', async () => {
  render(<ChuckNorrisJoke />);
  const jokeElement = await screen.findByRole('article');
  // joke should have at least 3 characters
  expect(jokeElement).toHaveTextContent(/.../);
});
```

## Testing asynchronous interactions

Testing with a mocked API:

```js
const data = {
  value: 'Chuck Norris counted to infinity. Twice.',
};
globalThis.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(data) });
```

## Testing errors

TodoItem component:

```jsx
it('throws an error if the title is missing', () => {
  const testFn = () => {
    render(<TodoItem />);
  };
  expect(testFn).toThrow(
    'property "title" must be present'
  );
});
```

## Testing for non-existence

```js
expect(() => getByRole('listitem')).toThrow();
```

or via _queryBy..._:

```js
expect(queryByRole('listitem')).toEqual(null);
```

_queryBy..._ will return _null_ instead of throwing

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

Snapshots are simple text representations of rendered content

Snapshot tests are usually used for regression tests

## Snapshot tests

snapshots are usually stored as text files in a location like `__snapshots__/Counter.test.js.snap`

```
exports[`matches the snapshot 1`] = `
<div>
  <div>
    count:
    0
    <button>
      +
    </button>
  </div>
</div>
`;
```

## Creating snapshot tests

with react-testing-library:

```jsx
it('matches the snapshot', () => {
  const instance = render(<Counter />);
  expect(instance.container).toMatchSnapshot();
  const button = instance.getByRole('button');
  expect(button).toMatchSnapshot();
});
```

## Updating snapshot tests

Once we have changed and and verified the behavior of a component we can update the corresponding tests accordingly:

```txt
2 snapshot tests failed in 1 test suite.
Inspect your code changes or press `u` to update them.
```

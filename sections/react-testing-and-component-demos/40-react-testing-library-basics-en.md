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

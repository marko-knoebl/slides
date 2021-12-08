# React-Testing-Library basics

## React-Testing-Library

**React-Testing-Library**: project for testing UI components (most significant subproject of the _Testing-Library_)

tests focus on aspects that are relevant for the end user (and not on the exact DOM structure or implementation details)

## React-Testing-Library

run tests in a _create-react-app_-based app:

```bash
npm run test
```

note: if slow, try `"test": "react-scripts test --maxWorkers=1"` in _package.json_

## Example

```js
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
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
screen.getByRole('button', { name: /delete/i });
screen.getByRole('textbox', { name: /new title/i });
screen.getAllByRole('listitem');
```

the _accessible name_ could be:

- text content
- alt text of an image
- title text of a link / image
- label text of an input
- an explicit `aria-label` attribute

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
- ... (see [role definitions from W3C](https://www.w3.org/TR/wai-aria-1.2/#role_definitions))

## Querying sub-elements

```js
import { screen, within } from '@testing-library/react';

const todoList = screen.getByRole('list');
const firstTodoItem = within(todoList).getAllByRole(
  'listitem'
)[0];
const firstTodoItemDeleteButton = within(
  firstTodoItem
).getByRole('button', { name: /delete/i });
```

## Assertions

extra assertions (enabled automatically when using _create-react-app_):

- `.toHaveTextContent()`
- `.toHaveAttribute()`
- `.toHaveClass()`
- `.toBeInTheDocument()`
- ... (see <https://github.com/testing-library/jest-dom>)

## Simulating user interactions

```js
import userEvent from '@testing-library/user-event';

userEvent.type(
  screen.getByRole('textbox', { name: /title/i }),
  'write tests'
);
userEvent.click(
  screen.getByRole('button', { name: /add/i })
);
```

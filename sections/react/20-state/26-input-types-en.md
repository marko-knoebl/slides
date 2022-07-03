# Input types

## Input types

- text
- textarea
- checkbox
- numeric input
- ...

## Input types

text and text area:

```jsx
<input
  value={title}
  onChange={(event) => setTitle(event.target.value)}
/>
```

## Input types

checkbox:

```jsx
<input
  type="checkbox"
  checked={accept}
  onChange={(event) => setAccept(event.target.checked)}
/>
```

## Numeric input fields

Basic advice for numeric input fields:

store the content as a string (not as a number)

Reasoning: possible contents of a numeric input field (while the user is typing):

```txt
""
"-"
"-3"
"-3."
"-3.0"
```

## Numeric input fields

example: numeric input with direct "result":

https://codesandbox.io/s/numeric-input-direct-results-5vde88

## Other input types

see https://reactjs.org/docs/forms.html

## Exercise: newsletter form

Create a component called `NewsletterSignup` with three state entries:

`email`, `repeatEmail`, `acceptTerms`

demo of finished version: https://codesandbox.io/s/newsletter-form-pvgs6l

note: enabling / disabling a button in JSX: `<button disabled={...}>...</button>`

## Exercise: newsletter form

extra: add a dropdown to choose a language for the newsletter

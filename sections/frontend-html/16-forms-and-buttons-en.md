# Forms and buttons

## Forms and buttons

elements:

- `button`
- `form`
- `input`
- `label`
- `select`
- ...

## Form example

```html
<form action="/register" method="post">
  <div>
    <label
      >first name: <input type="text" name="firstname"
    /></label>
  </div>
  <div>
    <label
      >last name: <input type="text" name="lastname"
    /></label>
  </div>
  <button type="submit">register</button>
</form>
```

## Buttons

```html
<button type="submit">press me!</button>
```

## Buttons

button types:

- _submit_: button that submits a form (default type for buttons in a form)
- _button_
- (_reset_)

## Input

```html
<input />
```

```html
<input type="password" />
```

## Input types

default type: `text`

other possibilities:

- `checkbox`
- `radio`
- `file`
- `password`
- `date` (HTML 5)
- `email`(HTML 5)
- `number` (HTML 5)
- `search` (HTML 5)

## Input attributes

- placeholder
- autofocus
- autocomplete
- size

## Autocomplete

Possible values of the `autocomplete` attribute:

- `name`
- `given-name`
- `email`
- `username`
- ...

## Validation

- `required`
- `minlength`
- `maxlength`

CSS pseudoclasses: `:valid`, `:invalid`

## Validation - example

```html
<input
  type="number"
  min="-5"
  max="5"
  step="0.1"
  value="1"
/>
```

## Input and label

Inputs should have labels that describe them:

```html
<label
  >enter your name:
  <input />
</label>
```

or

```html
<label for="name-input">enter your name:</label>
<input id="name-input" />
```

## Forms

```html
<form action="/register" method="post">
  first name: <input type="text" name="firstname" /><br />
  last name: <input type="text" name="lastname" /><br />
  <button type="submit">register</button>
</form>
```

## Forms

When the form is submitted, a _post_ request with the following content is sent to _/register_:

```txt
firstname=John&lastname=Doe
```

## Other form elements

- textarea
- select

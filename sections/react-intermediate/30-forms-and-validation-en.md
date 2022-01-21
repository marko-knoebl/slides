# Forms and validation

## Forms and validation

possibilities:

- use functionality that's built into HTML elements
- use functionality that's built into component libraries
- use a form library (_react-hook-form_, _formik_)
- write custom validation code

## Forms and validation

built-in functionality of HTML:

```jsx
<input required={true} minlength={4} />
```

## Forms and validation

When can a form input be validated?

- when the form is submitted (on submit)
- when the input loses focus (on blur)
- on every value change (on change)

The best approach depends on the use case

## Validation: examples

validation on every change:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const emailValid = isEmail(email);

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validation: examples

validation on blur:

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  // call from onBlur:
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  // ...
  // display a form
  // and optionally a warning about an invalid email
};
```

## Validation: examples

full example: validation on blur and on submit

```js
const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = () => {
    setEmailValid(isEmail(email));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validateEmail();
        if (isEmail(email)) {
          console.log(`Signed up: ${email}`);
        }
      }}
    >
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={() => validateEmail()}
      />
      <button>sign up</button>
      {!emailValid ? <div>invalid email</div> : null}
    </form>
  );
};

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Validation

more complex validation schemas are possible

example: initial validation of an input on its first _blur_, then live validation on each _change_

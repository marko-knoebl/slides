# Form libraries

## Form libraries

examples:

- react-hook-form (based on a custom hook)
- formik (based on custom components)

functionality:

- **validation**
- managing form data
- simplifying submit handler

## react-hook-form

_react-hook-form_ does not keep input contents in React state

advantages: faster, simpler

disadvantages: deviates from standard React concepts (uses _refs_ instead of _state_)

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterSignup = () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        name="email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <button>sign up for newsletter</button>
      {errors.email ? <div>invalid email</div> : null}
    </form>
  );
};
```

Note: `register()` uses a [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) to access the input

## react-hook-form: register

The `register` function can take some parameters that specify field validation:

- `required`
- `min`, `max`
- `minLength`, `maxLength`
- `pattern`
- `validate`

## react-hook-form: errors

The `errors` object indicates errors for any registered input that has a name

```jsx
<input name="email" ref={register(/*...*/)}>
```

```jsx
errors.email ? <div>invalid email</div> : null;
```

## react-hook-form: handleSubmit

`handleSubmit` will validate form data and pass it to a function if it is valid

```jsx
<form
  onSubmit={handleSubmit((data) => {
    console.log(data.email);
  })}
>
  ...
</form>
```

## react-hook-form: mode

```js
useForm({ mode: 'onSubmit' });
```

modes:

- `onSubmit` (default)
- `onBlur`
- `onTouched`
- `onChange`
- `all`

## formik

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewsletterRegistration = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={(values) => console.log(values)}
    validate={(values) => {
      const errors = {};
      if (!isEmail(values.email)) {
        errors.email = 'invalid email';
      }
      return errors;
    }}
  >
    {(props) => (
      <Form>
        <Field type="email" name="email" />
        <button disabled={!props.isValid}>subscribe</button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

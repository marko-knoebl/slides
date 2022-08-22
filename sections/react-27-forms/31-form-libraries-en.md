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

function NewsletterSignup() {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {formState.errors.email ? (
        <div>invalid email</div>
      ) : null}
      <button type="submit">sign up for newsletter</button>
    </form>
  );
}
```

Note: react-hook-form uses a [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) to access the input

## react-hook-form: register

The `register` function can take some parameters that specify field validation:

- `required`
- `min`, `max`
- `minLength`, `maxLength`
- `pattern`
- `validate` (custom validation function)

## react-hook-form: errors

`formState.errors` indicates errors for any registered input

```jsx
<input {...register('email')} />
```

```jsx
formState.errors.email ? <div>invalid email</div> : null;
```

```jsx
!formState.isValid ? <div>invalid form entries</div> : null;
```

## react-hook-form: handleSubmit

`handleSubmit` will validate form data and pass them to a function if they are valid

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
useForm({ mode: 'onBlur' });
```

`mode`: when should the value be validated initially?

- `onSubmit` (default)
- `onTouched` - when the input loses focus or on submit
- `onBlur` - when the input loses focus (does not switch to `reValidateMode`) or on submit
- `onChange` - when the input changes or on submit
- `all` - when the input changes or when it loses focus without being changed

## react-hook-form: mode

`reValidateMode`: if the user has submitted the form and there was an error, when should the value be re-validated?

- `onSubmit`
- `onBlur`
- `onChange` (default)

## react-hook-form: reset, getValues

```js
const {
  register,
  errors,
  handleSubmit,
  reset,
  getValues,
} = useForm();
```

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
        <button type="submit" disabled={!props.isValid}>
          subscribe
        </button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = (email) =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

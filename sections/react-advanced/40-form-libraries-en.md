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

disadvantages: deviates from standard React concepts

## react-hook-form

```js
import { useForm } from 'react-hook-form';

const NewsletterRegistration = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
  });
  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <input
        type="email"
        name="email"
        ref={register({
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email',
          },
        })}
      />
      <button disabled={errors.email}>subscribe</button>
      {errors.email && errors.email.message}
    </form>
  );
};
```

Note: `register()` uses a [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) to access the input

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

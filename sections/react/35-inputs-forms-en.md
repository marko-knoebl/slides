# Inputs & forms

## Inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be directly modified by the user

Therefore there are aspects of the UI state which would not be captured in the state.

## Inputs

This is how we can capture changes and track them in the state:

```jsx
<input
  value={inputText}
  onChange={event => {
    setInputText(event.target.value);
  }}
/>
```

## Form actions

Default behaviour of a form when submitted: directly send data to the server

Replacing the default behaviour:

```jsx
<form
  onSubmit={event => {
    event.preventDefault();
    // handle submit
  }}>
  <input />
</form>
```

## Form validation

Form validation "by hand":

```js
const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [emailEdited, setEmailEdited] = useState(false);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(email);
      }}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        onBlur={() => setEmailEdited(true)}
      />
      <button disabled={!isEmail(email)}>subscribe</button>
      {emailEdited && !isEmail ? (
        <div>invalid email</div>
      ) : null}
    </form>
  );
};

const isEmail = email =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

## Forms with "Formik"

npm package: _formik_

provides components (_Form_, _Field_, ...) that can reduce code

can be useful for more complex forms

## Forms with "Formik"

```js
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewsletterRegistration = () => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}
    validate={values => {
      const errors = {};
      if (!isEmail(values.email)) {
        errors.email = 'invalid email';
      }
      return errors;
    }}>
    {props => (
      <Form>
        <Field type="email" name="email" />
        <button disabled={!props.isValid}>subscribe</button>
        <ErrorMessage name="email" component="div" />
      </Form>
    )}
  </Formik>
);

const isEmail = email =>
  email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
```

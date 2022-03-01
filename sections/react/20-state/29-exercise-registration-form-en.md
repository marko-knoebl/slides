# Exercise: registration form

## Exercise: registration form

Create a user registration form

Values should be stored in a single JS object with different keys:

```js
const [userData, setUserData] = useState({
  username: '',
  password: '',
  repeatPassword: '',
  acceptTerms: false,
});
```

## Exercise: registration form

render a _register_ button that's either enabled or disabled based on the user inputs:

```jsx
<button disabled={!canRegister}>register</button>
```

note: try to avoid redundant data in the state

## Exercise: registration form

further tasks:

- button to reset the form
- status message that says "_passwords match_" or "_passwords don't match_"
- dropdown for choosing a gender (via a _select_ element)

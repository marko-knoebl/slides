# Exercise: newsletter form

## Exercise: newsletter form

Create a user newsletter form

Values should be stored in a single JS object with different keys:

```js
const [userData, setUserData] = useState({
  email: '',
  repeatEmail: '',
  acceptTerms: false,
});
```

## Exercise: newsletter form

render a _register_ button that's either enabled or disabled based on the user inputs:

```jsx
<button disabled={!canRegister}>register</button>
```

note: try to avoid redundant data in the state

## Exercise: newsletter form

further tasks:

- button to reset the form
- status message that says "_e-mails match_" or "_e-mails don't match_"
- dropdown to choose a language (via a _select_ element)

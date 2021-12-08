# Forms and inputs

## Form actions

Default behavior of a form when it is submitted: directly send data to the server

Replacing the default behavior:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```

## Input labels

Adding a label for an input without using IDs:

```jsx
<label>
  first name:
  <input
  // ...
  />
</label>
```

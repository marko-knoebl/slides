# Text inputs and forms

## Text inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be modified directly by the user

Therefore there would be aspects of the UI state which would not be captured in the React state.

## Text inputs

This is how we can capture the value of an input and track it in the state:

```jsx
<input
  value={inputText}
  onChange={(event) => {
    setInputText(event.target.value);
  }}
/>
```

## Form actions

Default behavior of a form when submitted: directly send data to the server

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

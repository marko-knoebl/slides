# Inputs

## Inputs

In the context of React, input elements are special:

Their properties (especially `.value`) can be directly modified by the user  
Therefore there are aspects of the UI state which would not be captured in `this.state`.

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

# Props

## State & props

- state = internal to the component
- props = parameters that are passed down from the parent

## Props in custom components

Example:

```jsx
<Rating stars={3} />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

## Props in function components

example:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
```

## Props in class components

example:

```jsx
import React, { Component } from 'react';

export class Rating extends Component {
  render() {
    return (
      <div className="rating">
        {'*'.repeat(this.props.stars)}
      </div>
    );
  }
}
```

## props.children

A component may receive content to be displayed via `props.children`

Example: a `Bordered` component:

```jsx
<Bordered>lorem ipsum</Bordered>
```

Defining the component:

```jsx
const Bordered = props => (
  <div class="bordered">{props.children}</div>
);
```

# components

## components

Components = custom tags, e.g.

```xml
<Rating stars={4}/>
```

<img src="assets/rating.png" style="height: 4em">

## components

In order to distinguish them from ordinary tags, components start with a capital letter

## components: state & props

- state = internal to the component
- props = parameters that are passed down from the parent

## component definition

- class components
- functional components

## class components

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

## functional components

example:

```jsx
function Rating(props) {
  return (
    <div className="rating">{'*'.repeat(props.stars)}</div>
  );
}
```

## functional components

functional components cannot have an internal _state_

## data/event flow

- parent → child: props
- child → parent: events

## Lifecycle-Hooks

With class components it's possible to listen for events in their lifecycle:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

these can be implemented as methods of the component class

## Exercise

Clock-component (with `componentDidMount` and `componentWillUnmount`)

## custom events

examples:

- Rating-component with clickable stars
- NumberInput-component that lets the user specify an integer with + and - buttons
  - bonus: make the API compatible with that of ordinary input-Elements so input-Elements may be easily replaced by NumberInput-components
  - bonus: add a min / max property that can be specified

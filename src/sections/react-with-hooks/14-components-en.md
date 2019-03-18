# components

## components

Components = custom tags, e.g.

```jsx
<Rating stars={4} />
```

<img src="assets/rating.png" type="image/png" style="width: 16em">

## components

In order to distinguish them from ordinary tags, components start with a capital letter

## components: state & props

- state = internal to the component
- props = parameters that are passed down from the parent

## component definition

- class components
- functional components

## functional components

example:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
```

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

## Komponentendefinition: Beispiele

- `PlayingCard` - Komponente
- `RomanNumber` - Komponente

## data/event flow

- parent → child: props
- child → parent: events

## props.children

A component may receive content to be displayed via `props.children`

Usage of a `Bordered` component:

```jsx
<Bordered>lorem ipsum</Bordered>
```

Defining the component:

```jsx
const Bordered = props => (
  <div class="bordered">{props.children}</div>
);
```

## custom events

Event handlers are defined as functions and passed via props.

## custom events

Example `ToggleButton`: Button which displays either "off" or "on":

Prop: `active` - may be set to `true` or `false`
Event: `onToggle` - function which is called with the new state

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}>
  {props.active ? 'on' : 'off'}
</button>
```

## custom events

The `ToggleButton` can be included like this:

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>;
```

## custom events

examples:

- Rating-component with clickable stars
- NumberInput-component that lets the user specify an integer with + and - buttons
  - bonus: make the API compatible with that of ordinary input-Elements so input-Elements may be easily replaced by NumberInput-components
  - bonus: add a min / max property that can be specified

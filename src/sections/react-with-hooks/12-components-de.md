# Komponenten

## Komponenten

Möglichkeit, eigene Tags zu definieren, z.B.

```jsx
<Rating stars={4} />
```

<img src="assets/rating.png" type="image/png" style="height: 4em">

## Komponenten

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## Komponenten: State & Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Komponentendefinition

Beispiel:

```jsx
import React from 'react';

const Rating = props => (
  <div className="rating">{'*'.repeat(props.stars)}</div>
);

export default Rating;
```

## Komponentendefinition: Beispiele

- `PlayingCard` - Komponente
- `RomanNumber` - Komponente

## Datenfluss

- parent → child: props
- child → parent: events

## Prop Types

Typechecker für Props

`npm install prop-types`

## Prop Types

```jsx
import PropTypes from 'prop-types';

class MyComponent extends Component {}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  onChange: PropTypes.func,
};
```

## Eigene Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

## Eigene Events

Beispiel `ToggleButton`: Button der entweder "off" oder "on" anzeigt:

Prop: `active` - kann auf `true` bzw `false` gesetzt sein
Event: `onToggle` - Funktion, die mit dem neuen Zustand aufgerufen wird

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}>
  {props.active ? 'on' : 'off'}
</button>
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

<!-- prettier-ignore -->
```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

# Komponenten

## Komponenten

Möglichkeit, eigene Tags zu definieren, z.B.

```xml
<Rating stars={4}/>
```

<img src="assets/rating.png" style="height: 4em">

## Komponenten

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen immer mit einem Großbuchstaben

## Komponenten: State & Props

- State = interner Zustand einer Komponente
  - `this.state`
  - `this.setState`
- Props = vom Elternelement übergebene Parameter
  - `this.props`

## Komponentendefinition

Beispiel:

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

Prop: `on` - kann auf `true` bzw `false` gesetzt sein
Event: `onToggle` - Funktion, die mit dem neuen Zustand aufgerufen wird

```jsx
<button onClick={this.handleClick}>
  {this.props.on ? 'on' : 'off'}
</button>
```

```js
handleClick = () => {
  this.props.onToggle(!this.props.on);
};
```

## Eigene Events

Beispiel `ToggleButton`: Der Button muss passend eingebunden werden

```jsx
state: {
  ...
  someOptionActive: true
}

<ToggleButton
  on={this.state.someOptionActive}
  onToggle={this.handleToggle}
/>

handleToggle = (isToggled) => {
  this.setState({someOptionActive: isToggled});
}
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

## Lifecycle-Hooks

Bei Klassenkomponenten ist es möglich, Events in ihrem Lebenszyklus abzufragen:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

Diese werden als Methoden der Klasse implementiert

## Übung

Clock-Komponente (mit `componentDidMount` und `componentWillUnmount`)

# Komponenten-Events

## Datenfluss

- parent → child: props
- child → parent: events

## Eigene Events

Eventhandler werden als Funktionen definiert und via props übergeben / erhalten.

## Eigene Events

Beispiel `ToggleButton`: Button, der entweder "off" oder "on" anzeigt:

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

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={newIsActive => {
    setMyOption(newIsActive);
  }}
/>;
```

## Eigene Events

Beispiele:

- Rating-Komponente mit anklickbaren Sternen
- NumberInput-Komponente zum Angeben einer Ganzzahl mit +/- buttons
  - Bonus: Umsetzung des APIs, sodass es kompatibel zu normalen input-Elementen ist und input-Elemente leicht durch NumberInput-Komponeneten ersetzt werden können
  - Bonus: zusätzliche min / max - Property bei der Komponente

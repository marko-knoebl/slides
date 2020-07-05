# Component events

## Data/event flow

- parent → child: props
- child → parent: events

## Custom events

Event handlers are defined as functions and passed down via props.

## Custom events

Example: Event `onChange` in the `Rating` component (each star is a `span` element)

## Custom events

```jsx
const Rating = (props) => {
  const starIds = [1, 2, 3, 4, 5];
  return (
    <div>
      {starIds.map((id) => (
        <span onClick={() => props.onChange(id)} key={id}>
          {id <= props.stars ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
```

## Custom events

Using the Rating component:

```jsx
const [prodRating, setProdRating] = useState(3);
```

```jsx
<Rating
  stars={prodRating}
  onChange={(newRating) => setProdRating(newRating)}
/>
```

shorter notation:

```jsx
<Rating stars={prodRating} onChange={setProdRating} />
```

## Custom events

Example `ToggleButton`: Button which displays either "off" or "on":

Prop: `active` - may be set to `true` or `false`  
Event: `onToggle` - function which is called with the new state

```jsx
<button
  onClick={() => {
    props.onToggle(!props.active);
  }}
>
  {props.active ? 'on' : 'off'}
</button>
```

## Custom events

The `ToggleButton` can be included like this:

```jsx
const [myOption, setMyOption] = useState(true);

<ToggleButton
  active={myOption}
  onToggle={(newIsActive) => {
    setMyOption(newIsActive);
  }}
/>;
```

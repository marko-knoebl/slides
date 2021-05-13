# Component props

## State and props

- state = internal to the component
- props = parameters that are passed down from the parent

## Component props

example:

```jsx
<ProgressBar value={0.75} color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

## Component props

example component definition with props:

```tsx
type Props = { value: number; color?: string };

const ProgressBar = (props: Props) => {
  // ...
};
```

## Component props

component definition with object destructuring for props:

```tsx
const ProgressBar = ({ value, color }: Props) => {
  // ...
};
```

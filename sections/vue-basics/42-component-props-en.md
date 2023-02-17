# Component props

## Component props

- state = internal to the component
- props = parameters that are passed down from the parent

## Component props

Examples:

```jsx
<ProgressBar percentage={75} color="lightgreen" />
```

<img src="assets/progress-bar.png" style="width:16em" />

```xml
<Rating :stars="3" />
```

<img src="assets/rating.png" style="width: 16em">

## Component props

Any props of a component must be listed in the component config:

```js
export default {
  props: ['value', 'color'],
};
```

They are then accessible in the same ways as entries in `data`, `methods`, ...

## Component props

multi-word props should use _mixedCase_ in JavaScript, but _kebab-case_ in templates

<!-- prettier-ignore -->
```js
props: ['greetingText']
```

```html
<WelcomeMessage greeting-text="hi" />
```

# Komponenten-Props

## State und Props

- State = interner Zustand einer Komponente
- Props = vom Elternelement übergebene Parameter

## Komponenten-Props

Beispiele:

```jsx
<ProgressBar :value="0.75" color="green" />
```

<img src="assets/progress-bar.png" style="width:16em" />

```xml
<Rating :stars="3" />
```

<img src="assets/rating.png" style="width: 16em">

## Komponenten-Props

Props einer Komponente müssen in der Konfiguration aufgelistet werden:

```js
export default {
  props: ['value', 'color'],
};
```

Zugriff: gleich wie für `data`, `methods`, ...

## Komponenten-Props

Props aus mehreren Wörtern: üblicherweise _mixedCase_ in JavaScript, _kebab-case_ in Templates

<!-- prettier-ignore -->
```js
props: ['greetingText']
```

```html
<WelcomeMessage greeting-text="hi" />
```

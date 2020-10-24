# Accessibility

## Accessibility

Strategies to make websites accessible by as many people as possible

relevant groups:

- visually impaired
- mobility impaired
- hearing impaired

mechanisms:

- screen reader
- keyboard navigation
- subtitles

## Screen reader support

- use semantic HTML elements (e.g. `button` and `section` instead of `div`)
- meaningful text on links and buttons
  Bad example: Click [here](https://en.wikipedia.org/wiki/Accessibility) to learn more about accessibility
  Good example: Learn [more on the topic of accessibility](https://en.wikipedia.org/wiki/Accessibility)
- associated labels for inputs
- alt text for images / videos

## Example: alt text for an image

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex:
    A two legged dinosaur standing upright, with small arms,
    and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur"
/>
```

## Supporting page navigation via keyboard

- use semantic elements (e.g. `button`, `a`, `form`, `input`)

## Ressources

- [MDN: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)

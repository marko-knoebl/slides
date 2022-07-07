# Exercise: slideshow

## Exercise: slideshow

- additional styling
- small preview images for 5 images (2 previous, current, 2 upcoming)
- possibility to change image size

hint: example code for creating preview ids:

```js
const previewIds = [];
for (let i = img - 2; i <= img + 2; i++) {
  if (i >= 0) {
    previewIds.push(i);
  }
}
```

example solution: https://codesandbox.io/s/slideshow-advanced-zlltxu

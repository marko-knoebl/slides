# JavaScript im Browser

## JavaScript im Browser

im Browser verfügbare APIs:

- **DOM (document object model)**
- HTML APIs (`alert`, `setTimeout`, ...)
- web storage API (localStorage, sessionStorage)
- geolocation API
- sensor APIs
- web component API
- ... (siehe <https://developer.mozilla.org/en-US/docs/Web/API>)

## Beispiele in der Browser-Konsole

DOM:

```js
document.querySelector("body").textContent = "hello world";
```

HTML APIs:

```js
alert('hello world');
```

```js
setTimeout(() => {
  console.log('3 seconds have passed');
}, 3000);
```

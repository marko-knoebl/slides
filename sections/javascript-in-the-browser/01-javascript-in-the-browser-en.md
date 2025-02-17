# JavaScript in the browser

## JavaScript in the browser

APIs that are available in the browser:

- **DOM (document object model)**
- HTML APIs (`alert`, `setTimeout`, ...)
- web storage API (localStorage, sessionStorage)
- geolocation API
- sensor APIs
- web component API
- ... (see <https://developer.mozilla.org/en-US/docs/Web/API>)

## Examples in the browser console

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

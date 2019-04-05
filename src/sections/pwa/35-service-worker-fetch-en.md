# Service workers: using fetch

## The function fetch()

```js
// this code can be executed in the
// browser console for any website
const url = '/';

fetch(url)
  .then(response => response.text())
  .then(console.log);
```

## Service workers: handling fetch

```js
self.addEventListener('fetch', event => {
  event.respondWith(
    new Response('All pages look like this')
  );
});
```

## Service workers: handling fetch

Exercise: We can build a small local website with pages like _/home_, _/about_, ...

## Service workers: handling fetch

<!--
there are two $ signs in regexes in this code
if they are at the very end of the string
they will mess up the result
-->

```js
self.addEventListener('fetch', event => {
  if (new RegExp('/about/$ ').test(event.request.url)) {
    event.respondWith(new Response('About'));
  } else if (new RegExp('/a$ ').test(event.request.url)) {
    event.respondWith(new Response('Home'));
  } else {
    event.respondWith(new Response('404'));
  }
});
```

## Service workers: handling fetch

Exercise: logging all network requests and passing the work on to `fetch`

## Service workers: handling fetch

```js
self.addEventListener('fetch', event => {
  console.log(event);
  return fetch(event.request);
});
```

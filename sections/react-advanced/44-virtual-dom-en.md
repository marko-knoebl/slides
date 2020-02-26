# Virtual DOM

## Virtual DOM

If a React component does rerender, its results are not directly passed on to the browser.

Instead, a _virtual DOM_ representation is created and compared to the previous virtual DOM. Only the differences are passed on to the browser to process.

## Virtual DOM and repeating elements

Usually React is very efficient at figuring out what has changed - but it needs help when elements are repeated in an array

Rule of thumb: Any time we use `.map` in our JSX templates the inner elements should have a unique key property to help React

## Virtual DOM

see also: https://reactjs.org/docs/reconciliation.html

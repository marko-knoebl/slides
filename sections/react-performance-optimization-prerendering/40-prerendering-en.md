# Pre-rendering

## Pre-rendering

**pre-rendering**: on first page load the browser receives pre-rendered HTML to speed up loading / displaying

advantages:

- faster initial rendering
- reduces additional API calls on the client
- easier indexing by search engines

## Pre-rendering

example 1:

go to [reactjs.org](https://reactjs.org) and wait for the browser's React devtools icon to activate - you will see content before React is ready

example 2:

Disable JavaScript in your browser's developer tools settings and visit [reactjs.org](https://reactjs.org) - you will still see content, though some interactivity will not work (e.g. dropdowns)

## Approaches

- static site generation (pre-rendering static content)
- server-side rendering (pre-rendering dynamic content)

## Static site generation

- makes sense for data that changes infrequently (e.g. blog posts)
- when data changes the site has to be regenerated statically
- data that changes frequently (e.g. comments on a blog post) would not be part of the pre-rendering

## Server-side rendering

- when a React page is opened a prerendered version of it is created on the server and sent to the client
- requires JavaScript on the server (_node.js_)

## Tools

- _gatsby.js_: static site generation
- _next.js_: static site generation, server-side rendering

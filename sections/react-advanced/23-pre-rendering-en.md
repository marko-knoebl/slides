# Pre-rendering

## Pre-rendering

Tools like **next.js** or **gatsby.js** can pre-render a React page before it reaches the client

advantages:

- faster initial rendering
- reduces additional API calls on the client
- easier indexing by search engines

## Pre-rendering

approaches:

- static site generation
- server-side rendering

## Pre-rendering

**static site generation**

- makes sense for data that changes infrequently (e.g. blog posts)
- when data changes the site has to be regenerated statically
- data that changes frequently (e.g. comments on a blog post) would not be part of the pre-rendering

supported by **next.js** and **gatsby.js**

## Pre-rendering

**server-side rendering**

- when a React page is opened a prerendered version of it is created on the server and sent to the client
- requires _node.js_ on the server

supported by **next.js**

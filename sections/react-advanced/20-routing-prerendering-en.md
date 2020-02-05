# Routing and pre-rendering

## Routing and pre-rendering

- **client-side routing**: navigating between different views without leaving the React app
- **pre-rendering**: on first page load the browser receives pre-rendered HTML to speed up loading / displaying

## Routing

example: go to [reactjs.org](https://reactjs.org) and navigate between pages

navigation between pages is quick - only some parts of the page are replaced

## Pre-rendering

example 1:

go to [reactjs.org](https://reactjs.org) and wait for the browser's React devtools icon to activate - you will see content before React is ready

example 2:

Disable JavaScript in your browser's developer tools settings and visit [reactjs.org](https://reactjs.org) - you will still see content, though some interactivity will not work (e.g. dropdowns)

## Routing and pre-rendering

tools:

- _react-router_: _routing_
- _gatsby_: routing, _pre-rendering static content_
- _next.js_: routing, pre-rendering static content, _pre-rendering dynamic content_

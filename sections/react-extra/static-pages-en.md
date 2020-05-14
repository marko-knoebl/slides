# Static pages

## Static pages

using React to generate static documents

```js
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const rendering = ReactDOMServer.renderToStaticMarkup(
  <MyComponent />
);
```

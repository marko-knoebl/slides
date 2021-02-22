# Static pages

## Static pages

using React to generate static documents

```js
import ReactDOMServer from 'react-dom/server';

const rendering = ReactDOMServer.renderToStaticMarkup(
  <MyComponent />
);
```

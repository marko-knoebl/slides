# Tagged template strings

## Tagged template strings

**Tagged** template strings enable additional processing when values are included

use cases:

- escaping values from "unsafe" sources
- changing indentation
- including styles in React
- ...

## Tagged template strings

example: escaping HTML

```js
import { safeHtml } from 'common-tags';

const message = 'I <3 U';

const post = safeHtml`
  <div>${message}</div>
`;
```

result:

```html
<div>I &lt;3 U</div>
```

Note: React will automatically escape HTML, so we don't need to use this function with React

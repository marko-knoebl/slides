# Overview

## Overview

common methods for handling asynchronous logic:

- callbacks
- promises (modern approach)

## Overview

possibilities for making network requests:

- **fetch** (promises)
- **axios** (promises)
- jQuery
- XMLHttpRequest

## Overview

requests with axios (promise) and jQuery (callback):

```js
const url = 'https://jsonplaceholder.typicode.com/todos';

axios(url).then((res) => console.log(res.data));

jquery.getJSON(url, (data) => console.log(data));
```

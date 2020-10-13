# Counter reducer

write a counter reducer that will work like this:

```js
const state1 = 0;
const state2 = counterReducer(state1, { type: "INCREMENT" });
const state3 = counterReducer(state2, { type: "INCREMENT" });
const state4 = counterReducer(state3, { type: "DECREMENT" });
// state4 = 1
```

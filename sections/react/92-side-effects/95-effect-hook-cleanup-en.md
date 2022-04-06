# Effect hook: cleanup

## Cleanup functions

An effect function may return a "cleanup function"

This function will be executed before the next run of the effect or before the component is unmounted

## Cleanup functions

example: exchange rate component that cancels any outdated queries:

```js
function ExchangeRate() {
  // ...
  useEffect(() => {
    async function loadExchangeRate() {
      // ... (initiate a new query)
    }
    function cancel() {
      // ... (cancel this query)
    }
    loadExchangeRate();
    return cancel;
  }, [from, to]);
  // ...
}
```

## Asynchronous effects and cleanup functions

An effect function **must not be an async function**

reason:

any return value of an effect function is treated as a cleanup function

async functions always return promises

## Asynchronous effects and cleanup functions

invalid:

```js
useEffect(loadSearchResultsAsync, [query]);
```

valid:

```js
useEffect(() => {
  loadSearchResultsAsync();
}, [query]);
```

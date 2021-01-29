# Same-origin policy and CORS

## Same-origin policy

by default, a webpage served from one site (e.g. _www.example.com_) is not allowed to make requests to another site (e.g. _api.example.com_) from within the browser (_Same-origin policy_)

## Same-origin policy

example: go to one website (e.g. Wikipedia), open the browser's JavaScript console and request another website, e.g. via `fetch("https://google.com")`

result: the request is prohibited

## Same-origin policy

why: prevent exploitation of cookie-based authentication

scenario:

user visits _google.com_, logs in, receives an authentication cookie

without logging out, the user visits _example.com_; _example.com_ cannot make any authenticated requests to _google.com_ and cannot see any of the user's data

## Cross-Origin resource sharing

The requested site may allow _Cross-Origin resource sharing (CORS)_ for some URLs or for all URLs

example: the _jsonplaceholder_ API enables CORS for all sites - so `fetch("https://jsonplaceholder.typicode.com/todos")` works from any site

## Cross-Origin resource sharing

example (request from _www.example.com_ to _api.example.com_):

browser sends a request with an extra `Origin` header:

```
Origin: https://www.example.com
```

server responds with data and a header indicating why the response was allowed:

```
Access-Control-Allow-Origin: http://www.example.com
```

or

```
Access-Control-Allow-Origin: *
```

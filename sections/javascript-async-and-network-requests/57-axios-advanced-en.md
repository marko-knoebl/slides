# Axios advanced

## Global defaults

examples:

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

## Custom instances & defaults

```js
const todosAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  timeout: 2000,
});

todosAxios.get('/').then(console.log);
todosAxios.get('/1').then(console.log);
```

## Interceptors

**Interceptors** may be added to the configuration; they are called automatically on either requests or responses and can contain additional logic to modify them

```js
const requestLogger = requestConfig => {
  console.log('sending request', requestConfig);
  return requestConfig;
};
todosAxios.interceptors.request.use(requestLogger);
```

```js
const responseLogger = response => {
  console.log('received response', response);
  return response;
};
todosAxios.interceptors.request.use(responseLogger);
```

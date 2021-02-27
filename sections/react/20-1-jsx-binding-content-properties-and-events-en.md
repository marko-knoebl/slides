# JSX: binding content, properties and events

## Binding content

we can include _numbers_ and _strings_ as basic types:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

## Binding properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note: no quote characters around the value of _href_

## Binding events

```jsx
const sayHello = () => {
  alert('hello world');
};
```

```jsx
<button onClick={sayHello}>Say Hello</button>
```

list of browser events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## Binding events

note: an event handler must be a **function**, not a function call

OK:

```js
<button onClick={alert}>Say something</button>
```

not OK:

```js
<button onClick={alert('hello')}>Say Hello</button>
```

OK:

```js
<button onClick={() => alert('hello')}>Say Hello</button>
```

## Property and event names

Some element properties have different names than in HTML (sometimes reflecting standard DOM properties)

- `className` (instead of `class`)
- `onClick` (instead of `onclick`)
- `htmlFor` (instead of `for`)

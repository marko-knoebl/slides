# JSX: Binding events

## Binding events

```jsx
function sayHello() {
  alert('hello world');
}
```

```jsx
<button onClick={() => sayHello()}>Say Hello</button>
```

list of browser events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## Binding events

accessing the event object as a function parameter:

```js
<button
  onClick={(event) => {
    console.log(event);
  }}
>
  click me
</button>
```

here the event will be a [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) object

## Binding events

note: an event handler must be a **function**, not a function call

OK:

```js
<button onClick={(event) => handleEvent(event)}>
  click
</button>
```

OK:

```js
<button onClick={handleEvent}>click</button>
```

not OK:

```js
<button onClick={handleEvent()}>click</button>
```

## Binding events

Default behavior of a submit event in a form: directly send data to the server

Replacing the default behavior:

```jsx
<form
  onSubmit={(event) => {
    event.preventDefault();
    // handle submit with custom logic
  }}
>
  ...
</form>
```

# JSX Basics

## JSX: JS + XML

JSX = Template language of React

- **<** switches from JS to XML/HTML
- **{** switches back to JS

## Binding content

```jsx
<div>A year has {365 * 24} hours</div>
```

## Binding content

Tasks:

- Show the current date
- Show either "heads" or "tails" inside a div

## Binding content

date:

```jsx
const dateString = new Date().toLocaleDateString();
```

```jsx
<div>curent date: {dateString}</div>
```

heads or tails:

```jsx
<div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
```

## Binding Properties

we can also change from XML to JS in properties:

```jsx
<a href={'https://en.wikipedia.org/wiki/' + articleName}>
  some article
</a>
```

Note: no quote characters around the value of _href_

## Binding Events

```jsx
const hello = () => {
  console.log('hello world');
  // ...
};
```

```jsx
<button onClick={hello}>Say Hello</button>
```

list of browser events:
https://www.w3schools.com/jsref/dom_obj_event.asp

## Binding Events

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

## Repeating elements

multiple elements may be added via arrays:

```jsx
const elements = [
  <div>alpha</div>,
  <div>bravo</div>,
  <div>charlie</div>,
];
```

```xml
<h1>three elements</h1>
{ elements }
```

## Repeating elements

example: displaying all method names of the _React_ object inside a _ul_ element

```jsx
const reactMethods = [];
for (let method in React) {
  reactMethods.push(<li>{method}</li>);
}
```

```jsx
<div>
  React Methods:
  <ul>{reactMethods}</ul>
</div>
```

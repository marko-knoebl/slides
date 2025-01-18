# DOM: Events

## DOM: Events

we can react to user interaction and other events, e.g.:

- clicking / pressing on an element
- moving the mouse over an element
- typing in an input field
- submitting a form
- ...

## DOM: Events

we can add functions as "event listeners":

```js
let button = document.querySelector('#my-button');

button.addEventListener('click', () => {
  console.log('click event triggered on button');
});
```

## DOM: Events

example: click counter - displaying a number in a div that is incremented when a button is clicked

```js
let counterDisplay = document.createElement('div');
counterDisplay.textContent = '0';
let counterButton = document.createElement('button');
counterButton.textContent = 'increment';

counterButton.addEventListener('click', () => {
  counterDisplay.textContent =
    Number(counterDisplay.textContent) + 1;
});

document
  .querySelector('body')
  .append(counterDisplay, counterButton);
```

## DOM: Events

event names:

- _click_ (can be triggered by any HTML element)
- _input_ (is triggered when the value of an input field is changed)
- _submit_ (for forms)
- _mouseenter_ (when the mouse cursor enters an element)
- ...

see <https://www.w3schools.com/jsref/dom_obj_event.asp> for a long list

## DOM: Events

exercise: Create an HTML file with various elements that have event listeners. Whenever an event occurs, log it to the console.

example output in the console:

```
button1: mouseenter
button1: click
button1: mouseleave
textbox1: mouseenter
textbox1: click
textbox1: input
textbox1: input
textbox1: mouseleave
```

## DOM: Event objects

When an event occurs, we can access its corresponding `Event` object in JavaScript:

```js
myButton.addEventListener('click', (event) => {
  console.log('myButton was clicked');
  console.log('mouse button:', event.button);
  console.log('coordinates:', event.clientX, event.clientY);
});
```

## DOM: Events

examples:

- game: click the box

## DOM: forms and form events

Example: todo list

# State

## Topics

- state basics
- input state
- immutable state - arrays and objects in the state

## State

components may have an internal _state_

state can be referenced in the template

the view will automatically update if state entries change

## State hook

state hook in function components:

```js
import { useState } from 'react';

function Slideshow() {
  const [imgId, setImgId] = useState(0);
  const [imgWidth, setImgWidth] = useState(300);
  const [imgHeight, setImgHeight] = useState(200);

  return ...
};
```

## State hook

```js
const [imgId, setImgId] = useState(0);
```

`useState` may be called (repeatedly) inside the component function to declare state entries

**parameter**: initial state

**array of return values**: current state, setter function

## Using the minimal state

guideline: use the _minimal_ state (i.e. no redundant data)

other data can be computed based on the state

Examples:

- _slideshow_: store the image ID - the image URL can be derived from it
- _todos_: store an array of todos with their status - the number of completed or incomplete items can be derived from them
- _text input field_: store its content - the validity status can be derived from it

## Exercise: Slideshow (part 1)

Re-implement the slideshow component we saw before; try not to look at the old code

- show images like _https://picsum.photos/300/200?image=0_
- buttons for _previous_ and _next_
- button for _back to start_
- prevent the index from becoming negative

## Exercise: Slideshow (part 2)

add some features to the slideshow, e.g.:

- button for _random image_
- buttons that let the user change the image width (e.g. switching between _300x200_ and _400x200_)
- small thumbnail for the next and previous images
- ... (your own ideas)

_avoid_ this for now:

- having arrays / objects in the state
- using inputs (text fields)
- using timers (`setTimeout`, `setInterval`)
- styling

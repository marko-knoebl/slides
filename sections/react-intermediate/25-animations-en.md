# Animations

## Animations

- basic animations: via CSS transitions

animating appearance / disappearance of elements:

- _react-transition-group_ (based on CSS class names)

advanced libraries:

- _react-spring_
- _framer motion_

## Animations

basic animations: via CSS transitions

```js
<li
  style={{
    backgroundColor: props.todo.completed
      ? 'lightgrey'
      : 'salmon',
    transitionProperty: 'background-color',
    transitionDuration: '0.5s',
  }}
>
  ...
</li>
```

## Appearance / disappearance of elements

phases for appearance / disappearance of elements:

- **unmounted**
- before entering
- entering
- **displayed**
- before exiting
- exiting

## Appearance / disappearance of elements

_react-transition-group_: based on CSS class names

## Appearance / disappearance of elements

example with _framer motion_:

```js
<AnimatePresence>
  {hovered ? (
    <motion.button
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => props.onDelete(props.todo.id)}
    >
      delete
    </motion.button>
  ) : null}
</AnimatePresence>
```

## Appearance / disappearance of elements

example with _framer motion_:

```js
<AnimatePresence>
  {todos.map((todo) => (
    <motion.li
      key={todo.id}
      animate={visibleStyle}
      initial={hiddenStyle}
      exit={hiddenStyle}
    >
      {todo.title}
    </motion.li>
  ))}
</AnimatePresence>
```

## Appearance / disappearance of elements

example with _react-spring_:

```js
<Transition
  items={hovered}
  from={{ opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}
  reverse={hovered}
>
  {(style, hovered) =>
    hovered ? (
      <animated.button
        style={style}
        onClick={() => props.onDelete(props.todo.id)}
      >
        delete
      </animated.button>
    ) : null
  }
</Transition>
```

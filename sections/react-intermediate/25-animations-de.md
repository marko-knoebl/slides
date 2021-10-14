# Animationen

## Animationen

- grundlegende Animationen: via CSS Transitions

Animation des Erscheinens / Verschwindens von Elementen:

- _react-transition-group_ (basiert auf CSS-Klassennamen)

erweiterte Libraries:

- _framer motion_
- _react-spring_

## Animationen

grundlegende Animationen: via CSS Transitions

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

## Erscheinen / Verschwinden von Elementen

Phasen für das Erscheinen / Verschwinden von Elementen:

- **unmounted**
- before entering
- entering
- **displayed**
- before exiting
- exiting

## Erscheinen / Verschwinden von Elementen

_react-transition-group_: basiert auf CSS-Klassennamen

## Erscheinen / Verschwinden von Elementen

Beispiel mit _framer motion_:

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

## Erscheinen / Verschwinden von Elementen

Beispiel mit _framer motion_:

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

## Erscheinen / Verschwinden von Elementen

Beispiel mit _react-spring_:

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

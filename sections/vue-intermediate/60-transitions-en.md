# Transitions

## Transitions

animation of _enter_ / _leave_ transitions:

```xml
<transition name="fade">
  <button>delete</button>
</transition>
```

use name _fade_ for transition

## Transitions

defining _fade_ transition:

during animation:

```css
.fade-enter-active {
  transition: opacity 5s;
}
.fade-leave-active {
  transition: opacity 5s;
}
```

start / end styles:

```css
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity 0;
}
```

## Transition groups

transitions for groups of elements where individual elements can appear / disappear

```xml
<transition-group name="list-fade" tag="ul">
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.title }}
  </li>
</transition-group>
```

## Transition groups

```css
.list-fade-enter-active,
.list-fade-leave-active {
  transition: opacity 0.5s;
}
.list-fade-enter,
.list-fade-leave-to {
  opacity: 0;
}
```

## Transitions

documentation: <https://v3.vuejs.org/guide/transitions-overview.html>

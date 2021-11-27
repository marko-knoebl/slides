# Transitions

## Transitions

Animation von _Eingangs_- oder _Ausgangs_- Transitions:

```xml
<transition name="fade">
  <button>delete</button>
</transition>
```

Name der Transition: _fade_

## Transitions

Definition der _fade_-Transition:

während der Animation:

```css
.fade-enter-active {
  transition: opacity 5s;
}
.fade-leave-active {
  transition: opacity 5s;
}
```

Styles für Anfang / Ende:

```css
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity 0;
}
```

## Transition Groups

Transitions für Gruppen von Elementen, bei denen einzelne Elemente erscheinen oder verschwinden können

```xml
<transition-group name="list-fade" tag="ul">
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.title }}
  </li>
</transition-group>
```

## Transition Groups

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

Dokumentation: <https://v3.vuejs.org/guide/transitions-overview.html>

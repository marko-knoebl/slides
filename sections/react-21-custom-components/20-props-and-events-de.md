# Props und Events

## State und Props

Elternkomponenten können Daten aus ihrem **State** via **Props** an Unterkomponenten weitergeben (unidirektionaler Datenfluss)

Wenn wir State und Props einer Komponente kennen, wissen wir ziemlich genau, wie sie dargestellt wird

## Beispiel: Komponenten und Props in einer Todo-Anwendung

<img src="assets/todo-components-state-props.svg" />

## State über mehrere Komponenten hinweg teilen

Wenn mehrere Komponenten auf den gleichen State zugreifen können sollen:

der State wird in einer gemeinsamen übergeordneten Komponente gespeichert und wird via Props nach unten übergeben

(siehe: [React docs: sharing state between components](https://beta.reactjs.org/learn/sharing-state-between-components))

Oft wird der Großteil des States in der obersten Komponente gespeichert (z.B. in `App`)

## Events

Unterkomponenten können **Events** auslösen, die dazu führen, dass sich der State in der Elternkomponente ändert

## Beispiel: Komponenten und Events in einer Todo-Anwendung

<img src="assets/todo-components-state-events.svg" />

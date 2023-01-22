# State, Props und Events

## State, Props und Events

Elternkomponenten können Daten aus ihrem **State** via **Props** an Unterkomponenten weitergeben (unidirektionaler Datenfluss)

Wenn wir State und Props einer Komponente kennen, wissen wir ziemlich genau, wie sie dargestellt wird

## State, Props and Events

Unterkomponenten können **Events** auslösen, die dazu führen, dass sich der State in der Elternkomponente ändert

## Wo sollte State gespeichert werden?

Wenn mehrere Komponenten auf den gleichen State zugreifen können sollen:

der State wird in einer gemeinsamen übergeordneten Komponente gespeichert und wird via Props nach unten übergeben

(siehe: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

Oft wird der Großteil des States in der obersten Komponente gespeichert (z.B. in `App`)

## Beispiel: Komponenten und Props in einer Todo-Anwendung

<img src="assets/todo-components-state-props.svg" />

## Beispiel: Komponenten und Events in einer Todo-Anwendung

<img src="assets/todo-components-state-events.svg" />

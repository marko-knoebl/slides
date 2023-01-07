# Komponenten

## Komponenten und State

Komponenten können Daten aus ihrem State via _Props_ an Unterkomponenten weitergeben (unidirektionaler Datenfluss)

Unterkomponenten können Events auslösen, die dazu führen, dass sich der State in der Elternkomponente ändert

## Wo sollte State gespeichert werden?

Wenn mehrere Komponenten auf den gleichen State zugreifen können sollen, wird dieser Üblicherweise in einer gemeinsamen übergeordneten Komponente gespeichert und wird via Props nach unten übergeben (siehe: [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html))

Oft wird der Großteil des States in der obersten Komponente gespeichert (z.B. in `App`)

## Beispiel: Komponenten und State in einer Todo-Anwendung

<img src="assets/todo-components-state.svg" />

## Beispiel: Props und Events in einer Todo-Anwendung

<img src="assets/todo-components-state-props-events.svg" />

## Komponentendefinition

Möglichkeiten:

- Definition einer Komponente als Funktion
- Definition einer Komponente als Klasse (war insbesondere vor der Einführung von Hooks verbreitet / notwendig)

## Komponetendefinition

Um sie von normalen Tags zu unterscheiden, beginnen Komponentennamen mit einem Großbuchstaben

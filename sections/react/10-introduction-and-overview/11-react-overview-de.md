# React Überblick

## React

React ist eine JavaScript-Library zum erstellen interaktiver Benutzeroberflächen im Browser

Alternativen: Angular, Vue.js

## Grundlagen moderner JavaScript UI Libraries

- State-basiert / deklarativ
- Komponenten-Struktur

## State-basiert / deklarativ

- Datenmodell, das den gesamten Anwendungszustand (State) abbildet
- User-Interaktionen ändern das Modell, das View wird automatisch aktualisiert

## State-basiert / deklarativ

Veispiel: vollständiger State einer Todo-Anwendung

```json
{
  "newTitleInput": "learn Rea",
  "todos": [
    { "id": 1, "title": "laundry", "completed": true },
    { "id": 4, "title": "shopping", "completed": true },
    { "id": 7, "title": "gardening", "completed": false }
  ]
}
```

## State-basiert / deklarativ

mögliches Erscheinungsbild einer Todo-Anwendung:

<img src="assets/todolist.png" alt="screenshot of a todo list application" style="height: 400px" />

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Komponenten-Struktur

Beispiel: Komponentenstruktur einer Todo-Anwendung

<img src="assets/todolist-component-structure.png" alt="screenshot of a todo list application with components outlined in red" style="height: 400px" />

## Beispiel: Komponenten und State in einer Todo-Anwendung

Beispiel: Komponenten, State und Props in einer Todo-Anwendung

<img src="assets/todo-components-state.svg" />

## Was macht React besonders?

- JavaScript-basierte Template-Syntax: JSX
- Explizite Änderung des Anwendungszustands mittels Settern
- State-Objekte sind unveränderlich (immutable)

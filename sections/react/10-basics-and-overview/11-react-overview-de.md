# React Überblick

## React

React ist eine JavaScript-Library zum erstellen interaktiver Benutzeroberflächen im Browser

Alternativen: Angular, Vue.js

## Grundlagen moderner JavaScript UI Libraries

- State-basiert / deklarativ
- Komponenten-Struktur

## State-basiert / Deklarativ

- Datenmodell, das den gesamten Anwendungszustand (State) abbildet
- User-Interaktionen ändern das Modell, das View wird automatisch aktualisiert

## Komponenten-Struktur

- "eigene" HTML-Tags
- Datenfluss via Properties und Events
- Üblicherweise unidirektionaler Datenfluss (vom Eltern- zum Kindelement)

## Beispiel: Komponenten und State in einer Todo-App

<img src="assets/todo-components-state.svg" />

## Beispiel: Props und Events in einer Todo-App

<img src="assets/todo-components-state-props-events.svg" />

## Was macht React besonders?

- JavaScript-basierte Template-Syntax: JSX
- Explizite Änderung des Anwendungszustands mittels Settern
- State-Objekte sind unveränderlich (immutable)

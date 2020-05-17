# HTTP API Entwicklung

## HTTP API Entwicklung

Für Grundlagen siehe [Präsentation zu HTTP](./http-de.html#/1)

## HTTP API Entwicklung

Libraries für die API Entwicklung in Python:

- FastAPI
- Django REST framework
- flask-restful
- graphene (GraphQL APIs)

## HTTP API Entwicklung

Aufgabe: Entwickle ein einfaches API mit FastAPI, das folgende Resourcen bietet:

- `/time`
- `/date`
- `/randnr` (Zufallszahl)

## HTTP API Entwicklung

Aufgabe:

Entwickle ein API mit FastAPI, das eine Liste von Todos verwalten kann

setze folgende Endpunkte um:

- `GET /todos` (JSON array aller Todos)
- `GET /todos/$id` (einzelnes Todo anhand id)
- `POST /todos` (Hinzufügen eines Todos)
- `DELETE /todos/$id` (Löschen eines einzelnen Todos)
- `PATCH /todos/$id` (Ändern eines Todos)
- `POST /delete_completed_todos`

Die Todos können in einer einfachen JSON-Datei gespeichert werden - oder auch in einer tatsächlichen Datenbank

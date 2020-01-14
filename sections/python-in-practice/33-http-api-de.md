# Web API Entwicklung

## Web API Entwicklung

Libraries für die API Entwicklung in Python:

- FastAPI
- Django REST framework
- flask-restful
- graphene (GraphQL APIs)

## Web API Entwicklung

Aufgabe: Entwickle ein einfaches API mit FastAPI, das folgende Resourcen bietet:

- `/time`
- `/date`
- `/randnr` (Zufallszahl)

## Web API Entwicklung

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

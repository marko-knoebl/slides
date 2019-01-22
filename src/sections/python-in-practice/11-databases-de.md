# Datenbanken

???

Kapitel 24

---

## Datenbanken

Verwendung: Verwaltung großer Datenmengen

---

## Entity-Relationship-Diagramme

https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model

Buch 24.2

---

## Tabellen und Datenschemata

Die meisten Datenbanken verwalten ihre Daten in Tabellen

---

## Modellierung von Verwandtschaftsverhältnissen

???

Umsetzung in Python

```py
get_children()
get_siblings()
get_parents()
```

---

## Modellierung von Freundschaften

???

friendship-Tabelle

1, Tom, Marie
2, Tom, Chris
...

---

## Beispiel: Online-Redaktionssystem mit Datenbankanbindung

siehe Buch

- Authentifizierung (MD5)
- Admin-Skript

---

## Beispiel: Todo-Anwendung

???

- run_server.py und (minimale) app.py
- init_db.py
- db_interface.get_all_todos

siehe courses-tutorials/python-todolist-wsgi-sqlite

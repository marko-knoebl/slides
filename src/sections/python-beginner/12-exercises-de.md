# Übungsbeispiele

---

## Übungsbeispiele

- Todoliste
- Lottozahlengenerator
- Hangman

---

## Todoliste

Interaktive Eingabe, die den Benutzer eine Liste von Todos erstellen lässt und diese am Ende ausgibt

???

liste, while, for, input

---

## Todoliste

```py
todolist = []
proceed = True
while proceed:
    new_todo = input("enter new todo:")
    todolist.append(new_todo)
    proceed_input = input("add another todo? (y/N)")
    proceed = proceed_input == 'y'

for todo in todolist:
    print('-', todo)
```

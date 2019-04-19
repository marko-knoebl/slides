# Objektorientierung und Klassen

## Objektorientierung in Python: "Alles ist ein Objekt"

```py
a = 20

a.to_bytes(1, "big")

"hello".upper()
```

## Typen und Instanzen

```py
message = "hello"

type(message)

isinstance(message, str)
```

## Klassen

Klassen können _verschiedenste_ Dinge repräsentieren, zB:

- eine Nachricht in einem E-Mail-Programm
- einen Benutzer einer Website
- ein Auto in einem Computer-Rennspiel
- einen Einkaufskorb in einem Onlineshop
- ein Bankkonto
- ...

## Klassen

Definition einer Klasse umfasst üblicherweise:

- "Datenstruktur" (Attribute)
- "Verhalten" (Methoden)

## Klassen

Beispiel: Klasse `BankAccount`

- "Datenstruktur" (Attribute)
- "Verhalten" (Methoden)

## Definition von Klassen

```py
class MyClass():

    # die Methode __init__ initialisiert das Objekt
    def __init__(self):
        # self bezieht sich in jeder Methode
        # auf die aktuelle Instanz
        self.message = "hello"

instance = MyClass()
instance.message # "hello"
```

## Vererbung

```py
class Person():
    ...

class Admin(Person):
    ...
```

## Beispiel: Umsetzung einer Money-Klasse

```py
a = Money('EUR', 10)
b = Money('USD', 10)

a.currency

a.amount
```

## Übung: TodoList- und Todo-Klassen

```py
tdl = TodoList("groceries")

tdl.add("milk")
tdl.add("bread")

print(tdl.todos)
tdl.todos[0].toggle()

tdl.stats() # {open: 1, completed: 1}
```

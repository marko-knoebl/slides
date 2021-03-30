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

Klassen können _verschiedenste_ Dinge repräsentieren, z.B.:

- eine Nachricht in einem E-Mail-Programm
- einen Benutzer einer Website
- ein Auto in einem Computer-Rennspiel
- einen Einkaufskorb in einem Onlineshop
- ein Bankkonto
- einen Datensatz, der analysiert werden soll
- ...

## Klassen

Definition einer Klasse umfasst üblicherweise:

- "Datenstruktur" (Attribute)
- "Verhalten" (Methoden)

## Klassen

Beispiel: Klasse `TextIOWrapper` kann eine Textdatei repräsentieren (wird beim Aufruf von `open()` erstellt)

Attribute:

- _closed_
- _encoding_
- _mode_ (e.g. r=read, w=write)
- _name_ (filename)
- ...

Methoden:

- _close()_
- _read()_
- _write()_
- ...

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

## Private Attribute und Methoden und Python-Philosophie

Kennzeichnung von Attributen und Methoden, die von außen nicht verwendet werden sollten mit `_`

We're all consenting adults here: https://mail.python.org/pipermail/tutor/2003-October/025932.html

Achtung: oft Fehlinformation bezüglich `__`! In der Praxis sollten doppelte Unterstriche kaum verwendet werden.

## Beispiel: Umsetzung einer Length-Klasse

```py
a = Length(2.54, "cm")
b = Length(3, "in")

a.unit
a.value
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

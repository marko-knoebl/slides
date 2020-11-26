# Objektreferenzen und Mutationen

## Objektreferenzen und Mutationen

Wiederholung: Was wird das folgende Programm ausgeben?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Objektreferenzen und Mutationen

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

Das obige Programm gibt `[1, 2, 3, 4]` aus

`a` und `b` beziehen sich auf das selbe Objekt

## Objektreferenzen und Mutationen

Durch das Ausführen von `b = a` entsteht einen zusätzliche Referenz, die sich auf das selbe Objekt bezieht.

Operationen, die zum Setzen zusätzlicher Referenzen führen:

- Zuweisungen (`b = a`)
- Funktionsaufrufe (`myfunc(a)` - es entsteht eine neue funktionsinterne Referenz)
- Eintragungen in Kollektionen (z.B. `mylist.append(a)`)
- ...

## Objektreferenzen bei Funktionen

Der Aufruf einer Funktion mit einem Objekt als Parameter versieht dieses Objekt mit einer weiteren Referenz (_call by sharing_).

```py
def foo(a_inner):
    print(id(a_inner))

a_outer = []
foo(a_outer)
print(id(a_outer))
```

## Objektreferenzen und Mutationen bei Funktionen

empfohlenes Prinzip für Funktionen:

**Funktionen sollten übergebene Parameter nicht abändern**

oder allgemeiner:

**Funktionen sollten mit der Python-Umgebung nur dadurch interagieren, dass sie Parameter entgegennehmen und Rückgabewerte zurückliefern** (Sie sollten keine Seiteneffekte / Nebeneffekte haben)

## Objektreferenzen und Mutationen bei Funktionen

```py
def remove_middle_element(list_in):
    list_in.pop(len(list_in) // 2)
    return list_in

a = [1, 2, 3, 4, 5]
b = remove_middle_element(a)
print(b)
print(a)
```

Was gibt das obige Beispiel aus?

## Objektreferenzen und Mutationen bei Funktionen

Umsetzungsmöglichkeiten am Beispiel `remove_middle_element`:

- als Funktion ohne Seiteneffekte
- als Methode einer eigenen Klasse `AdvancedList`

Vergleiche: `sorted()` und `list.sort()` in Python

## Funktion ohne Seiteneffekte

Die Funktion ändert die übergebene Liste nicht ab - stattdessen wird eine neue Liste zurückgegeben.

```py
def remove_middle_element(list_in):
    list_out = list_in.copy()
    list_out.pop(len(list_out) // 2)
    return list_out

a = [1, 2, 3, 4, 5]
b = remove_middle_element(a)
```

## Methode einer eigenen Klasse

Lockerung des erwähnten Prinzips bei Methoden: Einträge in `self` _dürfen abgeändert werden_.

Die folgende Methode ändert das Objekt intern ab und gibt nichts zurück.

```py
class AdvancedList(list):
    def remove_middle_element(self):
        self.pop(len(self) // 2)

a = AdvancedList([1, 2, 3, 4, 5])
a.remove_middle_element()
```

## Objektreferenzen und Mutationen bei Funktionen

Übliche Empfehlungen:

- Übergebene Parameter nicht abändern (Ausnahme: `self` in Methoden)
- Keine globalen Variablen setzen

Strikte Regeln - für sogenannte _reine_ Funktionen:

- Keine globalen Variablen lesen
- Kein I/O (Interaktion mit Festplatte / Netzwerk)

Reine Funktionen sind Funktionen, die mit ihrer Umgebung nur über Eingabeparameter und Rückgabewerte interagieren.

Je "reiner" eine Funktion ist, umso einfacher ist sie wiederzuverwenden und zu testen.

## Mutieren von Standardparametern

Unerwartetes Verhalten in Python, wenn Standardparameter mutiert werden:

```py
def register_file_formats(formats=["py", "pyc"]):
    for format in formats:
        formats.append(format.upper())
    # ...
    print(formats)

register_file_formats(["py"]) # ["py", "PY"]
register_file_formats()
# ["py", "pyc", "PY", "PYC"]
register_file_formats()
# ["py", "pyc", "PY", "PYC", "PY", "PYC", "PY", "PYC"]
```

(Websuche: _mutable default arguments_)

# ZODB

## ZODB

Zope Object Database = Einfache Objektbank speziell für Python

## ZODB

Öffnen einer Datenbank:

```py
from ZODB import DB, FileStorage
import transaction

db = DB(FileStorage.FileStorage("dbfile.fs"))
connection = db.open()
root = connection.root()

print(root) # {}
```

## ZODB

Befüllen einer Datenbank:

```py
root["user"] = {"first_name": "Jane", "last_name": "Doe"}
root["todos"] = ["laundry", "shopping"]
transaction.commit()
```

## ZODB

Abändern von Einträgen:

Folgendes klappt nicht (ZODB bemerkt die Änderung der Elemente nicht):

```py
root["user"]["first_name"] = "John"
root["todos"].append("learn zodb")
transaction.commit()
```

## ZODB

Möglichkeiten, um Änderungen an Elementen an ZODB signalisieren:

- Eintrag neu setzen (z.B.: `root["user"] = root["user"]`)
- Verwendung der Typen `PersistentList`, `PersistentMapping` und `BTree` anstelle von Listen und Dictionaries
- Verwendung persistenter Klassen (z.B.: `class User(Persistent):`)

## ZODB

Eintrag neu setzen:

```py
root["user"]["first_name"] = "Jane"
root["todos"] = root["user"]
transaction.commit()
```

## ZODB

Verwendung der Typen `PersistentList`, `PersistentMapping` und `BTree` anstelle von Listen und Dictionaries:

```py
from persistent.list import PersistentList
from persistent.mapping import PersistentMapping
from BTrees import IOBTree

root["todos"] = PersistentList(["laundry", "shopping"])
root["todos"].append("learn zodb")

root["user"] = PersistentMapping({"first_name": "Jane", "last_name": "Doe"})
root["user"]["first_name"] = "John"
transaction.commit()
```

## ZODB

Verwendung persistenter Klassen:

```py
from persistent import Persistent

class User(Persistent):
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
```

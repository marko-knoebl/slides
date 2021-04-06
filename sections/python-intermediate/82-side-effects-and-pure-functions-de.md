# Side Effects und reine Funktionen

## Side Effects und reine Funktionen

**reine Funktionen**: Funktionen, die mit ihrer Umgebung nur dadurch interagieren, dass sie Parameter entgegennehmen und Werte zurückgeben

**Side Effects** (_Nebeneffekte_, _Seiteneffekte_): Aktionen einer Funktion, die die Umgebung verändern

## Side Effects und reine Funktionen

häufige Side Effects:

- ändern der Einträge von _self_ in einer Objektmethode
- Input / Output (Interaktion mit Speichermedien / Netzwerk / ...)

Side Effects, die üblicherweise vermieden werden:

- Abändern von Argumenten, die an die Funktion übergeben wurden
- Setzen / Ändern globaler Variablen

## Reine Funktionen

Vorteile reiner Funktionen:

- einfacher zu beschreiben
- einfacher wiederzuverwenden
- einfacher zu testen

## Side Effects

Beispiel einer nicht-idealen Funktion, die ein Argument (_formats_) verändert:

```py
def list_files_by_formats(path, formats):
    if "jpg" in formats:
        formats.append("jpeg")
    files = []
    for file in os.listdir(path):
        for format in formats:
            if file.endswith("." + format):
                files.append(file)
                break
    return files
```

## Side Effects

```py
formats = ["jpg", "png"]

print(list_files_by_formats(formats))

print(formats)

# will print: ["jpg", "png", "jpeg"]
```

## Side Effects

"korrektere" Implementierung:

```py
def list_files_by_formats(path, formats):
    if "jpg" in formats:
        formats = formats.copy()
        formats.append("jpeg")
    # ...
```

## Side Effects

das folgende _wäre_ ein Anti-Pattern (eine Funktion, die Argumente abändert):

```py
mylist = [2, 1, 3]

sort(mylist)
print(mylist)
# [1, 2, 3]
```

## Side Effects

tatsächliche Möglichkeiten zum Sortieren in Python:

reine Funktion:

```py
print(sorted(mylist))
```

Methode, die ein Objekt abändert:

```py
mylist.sort()
print(mylist)
```

## Abändern von Standardparametern

Unerwartetes Verhalten in Python, wenn Standardparameter abgeändert werden:

```py
def list_files_by_formats(path, formats=["gif", "jpg", "png"]):
    if "jpg" in formats:
        formats.append("jpeg")
    # ...
```

```py
list_files_by_formats(".")
# formats: ["gif", "jpg", "png", "jpeg"]

list_files_by_formats(".")
# formats: ["gif", "jpg", "png", "jpeg", "jpeg"]
```

(Web-Suche: _mutable default arguments_)

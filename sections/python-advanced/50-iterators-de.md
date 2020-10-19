# Iterators

## Iterables und Iterators

_Iterable_: ein Objekt, über das mittels `for element in my_iterable` iteriert werden kann

_Iterator_: ein leichtgewichtiges Iterable

## Iterables und Iterators

Beispiele für Iterables:

- lists
- dicts
- range-Objekte
- iterators

## Iterators

Ein _Iterator_ ist ein ressourcensparendes Iterable

Mögliche Vorteile eines Iterators gegenüber Listen:

- Ressourcen werden nur bei Bedarf erstellt / abgefragt
- Speicherverbrauch bleibt niedrig (nur je ein Element ist jeweils im Speicher)

## Iterators

Beispiel: `open()` gibt einen Iterator von Zeilen einer Datei zurück

```py
with open("./foo.txt", encoding="utf-8") as f:
    for line in f:
        print line
```

Die Datei könnte mehrere GB oder größer sein und dieser Code würde problemlos laufen

## Iterators

Beispielfunktionen:

Lädt alle Textdateien in _./foo/_ gleichzeitig in eine Liste, iteriert dann über sie:

```py
for text in read_textfiles_as_list("./foo/"):
    print(text[:5])
```

Lädt Textdateien nacheinander, wodurch der Speicherverbrauch niedrig gehalten wird:

```py
for text in read_textfiles_as_iterator("./foo/"):
    print(text[:5])
```

## Iterators

Aufrufe, die Iterators zurückgeben:

- `enumerate()`
- `reversed()`
- `open()`
- `os.walk()`
- `os.scandir()`
- `map()`
- `filter()`
- Funktionen in [itertools](https://docs.python.org/3/library/itertools.html)
- üblicherweise Datenbankcursor (PEP 249)
- ...

Bemerkung: `range` gibt keinen Iterator zurück (aber ein ähnliches Objekt)

## Itertools

[itertools](https://docs.python.org/3/library/itertools.html): Modul zum erstellen von Iterators

- `itertools.count`
- `itertools.repeat`
- `itertools.product`
- ...

```py
from itertools import count

for i in count():
    print(i)
    if i >= 5:
        break

# 0 1 2 3 4 5
```

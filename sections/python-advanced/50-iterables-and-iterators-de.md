# Iterables und Iterators

## Iterables und Iterators

_Iterable_: ein Objekt, über das mittels `for element in my_iterable` iteriert werden kann

- "statisches _Iterable_": Elementenabfolge ist vordefiniert (z.B. _list_)
- "dynamisches _Iterable_": Elemente werden während des Durchlaufs erzeugt (z.B. _range_)

## Iterables und Iterators

Hierarchie von Iterables:

- "statische Iterables" (z.B. _list_, _dict_)
- "dynamische Iterables" (z.B. _range_)
  - Iterators (z.B. _enumerate_, _os.scandir_)
    - Generators (selbst-definiert)

## Iterables und Iterators

Vorteile von "dynamischen Iterables" / Iterators:

- Ressourcen werden nur bei Bedarf erstellt / abgefragt
- Speicherverbrauch bleibt niedrig (nur je ein Element ist jeweils im Speicher)

## Iterables und Iterators

Beispiele für "statische Iterables":

- list
- tuple
- dict
- string

## Iterables und Iterators

Beispiele für "dynamische Iterables":

- range-Objekte
- iterators

## Iterables und Iterators

Aufrufe, die Iterators zurückgeben:

- `enumerate()`
- `reversed()`
- `open()`
- `os.walk()`
- `os.scandir()`
- `map()`
- `filter()`
- Funktionen in _itertools_
- üblicherweise Datenbankcursor (PEP 249)
- Generators
- ...

## Iterables und Iterators

Beispiel: `open()` gibt einen Iterator von Zeilen einer Datei zurück

```py
with open("./foo.txt", encoding="utf-8") as f:
    for line in f:
        print line
```

Die Datei könnte mehrere GB groß sein und dieser Code würde problemlos laufen

## Iterators und Iterators

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

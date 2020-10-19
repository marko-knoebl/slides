# Generatorfunktionen und Generator Expressions

## Generatorfunktionen und Generator Expressions

_Generatorfunktionen_ und _Generator Expressions_ sind zwei Möglichkeiten, um selbst _Iterators_ zu erstellen

## Generatorfunktionen

Eine Funktion kann ein `yield`-Statement enthalten und wird dadurch zum Generator

```py
def count():
    i = 0
    while True:
        yield i
        i += i
```

Eine Generatorfunktion kann wiederholt verlassen werden (via `yield`) und wieder betreten werden (durch anfragen des nächsten Werts)

## Übung: lesen von Textdateien in einem Ordner

Wir erstellen einen Iterator, der die String-Inhalte aller UTF-8-Textdateien in einem Ordner zurückgibt

Verwendung:

```py
for content in read_textfiles("."):
    print(content[:10])
```

## Übung: lesen von Textdateien in einem Ordner

Lösung:

```py
def read_textfiles(path="."):
    for file in os.listdir(path):
        try:
            with open(path + "/" + file) as fobj:
                yield fobj.read()
            except:
                pass
```

## Generator Expressions

Generator _Expressions_ sind ähnlich zu List Comprehensions

List comprehension:

```py
mylist = [i*i for i in range(3)]
```

Generator Expression:

```py
mygenerator = (i*i for i in range(3))
```

## Generator Expressions

Aufsummieren aller Zahlen von 1 bis 10 Millionen:

mittels List Comprehension - dies wird hunderte von Megabyte an RAM verbrauchen (siehe Task Manager):

```py
sum([a for a in range(1, 10_000_001)])
```

mittels Generator Expression:

```py
sum((a for a in range(1, 10_000_001)))
```

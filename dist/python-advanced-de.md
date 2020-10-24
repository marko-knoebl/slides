# Python Fortgeschritten

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- aus Wien
- emaliger Mathematiklehrer
- Programmierthemen:
  - JavaScript, TypeScript und React
  - Python, Data Science

## Vorstellung der Teilnehmer

- Aktuelle Projekte
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

## Code

Code verfügbar unter: <https://github.com/marko-knoebl/courses-code>

# Themen

## Themen

- Logging
- Unittests
- Typenannotationen
- fortgeschrittene objektorientierte Programmierung
  - Properties
  - statische Attribute und Methoden
  - magic Methods
  - Vererbung
- Iterators
- Funktionen: fortgeschritten
  - Lambdas
  - Decorators
  - functools
  - Memoisation
- weitere Datentypen: set, namedtuple, enum
- Parallelisierung: threads und multiprocessing

# Logging

## Logging

lange laufende Programme können ihren Ablauf in Log-Dateien dokumentieren

z.B.: lange laufende Algorithmen, Webserver

## Logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## Logging

Beispiel: Sortieralgorithmus

# Unittests

## Assert

## Doctests

Codebeispiele und unittests in einem - innerhalb der docstrings

## Doctests

```py
def add(a, b):
    """Add two numbers.

    >>> add(2, 3)
    5
    """
```

## Doctests ausführen

```py
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## Doctests: lange Ausgaben

```py
"""
>>> bubblesort(list(range(10))) #doctest: +NORMALIZE_WHITESPACE
[0, 1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> bubblesort(list(range(10))) #doctest: +ELLIPSIS
[0, 1, 2, ..., 8, 9]
"""
```

## Unittests

Möglichkeiten:

- unittest (Standardlibrary)
- pytest
- nose

## unittest

test_tictactoe.py

```py
import unittest
from tictactoe import has_won

class HasWon(unittest.TestCase):
    def test_has_won_first_row_x(self):
        board = [["X", "X", "X"],
                 [None, None, None],
                 [None, None, None]]
        w = has_won(board, "X")
        self.assertTrue(w)

if __name__ == "__main__":
    unittest.main()
```

## unittest

Ausführen aller Tests in Dateien mit dem Dateinamen _test\*.py_:

```bash
python -m unittest
```

Tests mit anderem Muster:

```bash
python -m unittest discover -p "*_test.py"
```

Achtung: um erkannt zu werden, müssen Pakete eine _\_\_init\_\_.py_ Datei enthalten (siehe <https://bugs.python.org/issue35617>)

## unittest - Assertions

mögliche Assertions:

- `.assertEqual(a, 3)`
- `.assertTrue(b)`
- `.assertFalse(c)`
- `.assertIsNone(d)`
- `.assertIn(a, [2, 3, 4])`
- `.assertIsInstance(a, int)`
- `.assertRaises(TypeError, len)`
- ...

es existieren auch gegenteilige Assertions, z.B. `.assertNotEqual(a, 3)`

## unittest - setUp und tearDown

Definieren von Funktionen, die vor / nach jedem Test ausgeführt werden:

```py
import unittest

class WidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.widget = Widget('The widget')

    def tearDown(self):
        self.widget.dispose()
```

## unittest - Testabdeckung

PIP-Paket _coverage_

Ausführung:

```bash
coverage run test_shorten.py
coverage report
```

Beispiel zur Ausgabe:

```
Name              Stmts   Miss  Cover
-------------------------------------
shorten.py            4      0   100%
test_shorten.py      11      0   100%
-------------------------------------
TOTAL                15      0   100%
```

# Docstrings

## Docstrings anzeigen

aus der interaktiven Konsole:

```py
help(round)
import math
help(math)
help(math.floor)
```

aus dem Terminal:

```bash
python -m pydoc round
python -m pydoc math
python -m pydoc math.floor
```

## Docstring-Format

PEP 257: <https://www.python.org/dev/peps/pep-0257/>

## Docstrig-Format

Docstring eines Moduls: Beschreibung, Liste exportierter Funktionen mit einzeiligen Zusammenfassungen

Docstring einer Klasse: Beschreibung, Liste der Methoden

Docstring einer Funktion: Beschreibung, Liste der Parameter

## Pydocstyle

Linter zum Validieren von Docstrings

## reStructuredText und Sphinx

_reStructuredText (reST)_ = einfache Auszeichnungssprache (ähnlich zu _Markdown_), die in Python Docstrings verwendet werden kann

_Sphinx_ = Werkzeug, das aus bestehenden Docstrings Dokumentation in HTML und ähnlichen Formaten generiert

## reStructuredText

Beispiel

```rest
Heading
=======

- list item 1
- list item 2

Link to `Wikipedia`_.

.. _Wikipedia: https://www.wikipedia.org/

.. code:: python

   print("hello")
```

# Type Hints

## Type Hints

Neuere Versionen von Python unterstützen optionale Typenannotationen

Typenannotationen können die IDE - z.B. durch das Bereitstellen zusätzlicher Fehlermeldungen

## Typechecker

- pyright
- mypy

VS Code Extensions für beide verfügbar

## Variablen

Variablen:

```py
i: int = 3
```

## Funktionen

Funktionen:

```py
def double(n: int) -> int:
    return 2 * n
```

## Kollektionen

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

```py
from typing import Iterable

names: Iterable[str] = ...
```

# Fortgeschrittene objektorientierte Programmierung

## Fortgeschrittene objektorientierte Programmierung

Beispiel: Klasse _Length_

```py
a = Length(130, "cm")
a.value # 130
a.unit # cm
a.unit = "in"
a.value # 51.18
str(a) # 51.18in
b = Length.from_string("12cm")
2 * b # 24cm
b + a # 142cm
```

# OOP: Properties

## Properties

Getter & Setter (in Python unüblich, in anderen Sprachen verbreitet):

```py
r = Rectangle(length=3, width=4)
print(r.get_area()) # 12
r.set_length(4)
print(r.get_area()) # 16
```

Mit Properties in Python:

```py
r = Rectangle(length=3, width=4)
print(r.area) # 12
r.length = 4
print(r.area) # 16
```

## Properties

Übung: Umsetzen einer Klasse `Rectangle_gs` mit Gettern und Settern

## Properties

```py
class Rectangle_gs:
    def __init__(self, length, width):
        self._length = length
        self._width = width

    def get_length(self):
        return self._length

    def set_length(self, new_length):
        self._length = new_length

    def get_width(self):
        return self._width

    def set_width(self, new_width):
        self._width = new_width

    def get_area(self):
        return self._length * self._width
```

## Properties

Mit Properties können wir das Auslesen oder Setzen von Attributen über eine Funktion "umleiten" - es kann also der Zugriff auf `r.area` im Hintergrund zum Ausführen einer Getter- oder Setterfunktion führen.

## Properties

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def _get_area(self):
        return self.length * self.width
    
    area = property(_get_area)
```

`property` ist ein built-in, also ähnlich wie `print` immer verfügbar.

## Properties

Erweiterung: Setter für _area_

```py
class Rectangle:
    ...

    def _set_area(self, new_area):
        # adjust the length
        self.length = new_area / self.width
    
    area = property(_get_area, _set_area)
```

## Properties

Alternative Schreibweise mit Decorators:

```py
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    @property
    def area(self):
        return self.length * self.width
    
    @area.setter
    def area(self, new_area):
        self.length = new_area / self.width
```

# OOP: Statische Attribute und Methoden

## Klassenattribute (statische Attribute)

_Klassenattribute_ sind Attribute, die nur auf der Klasse (nicht auf jeder Instanz) definiert sind - alle Instanzen teilen sich die Attribute.

## Klassenattribute (statische Attribute)

Beispiel `Money`-Klasse: `_currency_data` kann von allen Instanzen verwendet werden.

```py
class Money:
    _currency_data = [
        {"code": "USD", "symbol": "$", "rate": 1.0},
        {"code": "EUR", "symbol": "€", "rate": 1.1},
        {"code": "GBP", "symbol": "£", "rate": 1.25},
        {"code": "JPY", "symbol": "¥", "rate": 0.01},
    ]

    def __init__(self, ...):
        ...
```

## Statische Methoden

Muss eine Methode nicht auf die Daten einer bestimmten Instanz zugreifen, so kann sie als statische Methode deklariert werden.

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

Beachte: Bei einer statischen Methode wird als erster Parameter nicht `self` übergeben - die Referenz auf die Instanz ist nicht vorhanden.

## Statische Methoden

Statische Methoden haben zwei wichtige Anwendungsbereiche:

- Erstellen von Instanzen: z.B. `Money.from_string("23.40EUR")`
- Bündeln von Hilfsfunktionen mit einer Klasse: z.B. `_get_currency_data`

## Klassenmethoden

Um den folgenden Code für Vererbung portabler zu machen, wäre es sinnvoll, den Klassennamen (`Money`) nicht in der Methodendefinition zu erwähnen:

```py
class Money:
    ...

    @staticmethod
    def _get_currency_data(code):
        for currency in Money._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

## Klassenmethoden

Klassenmethoden sind besondere statische Methoden, die die Möglichkeit bieten, unter einem allgemeinen Namen (üblicherweise `cls`) auf die Klasse zu verweisen:

```py
class Money:
    ...

    @classmethod
    def _get_currency_data(cls, code):
        for currency in cls._currency_data:
            if code == currency["code"]:
                return currency
        raise ValueError(f"unknown currency: {code}")
```

# OOP: Magic Methods

## Magic Methods

Besondere Methoden, die das Verhalten einer Klasse beeinflussen

Beginnen und enden mit zwei Unterstrichen, z.B. `__init__`

Liste von magic Methods: <https://docs.python.org/3/reference/datamodel.html#special-method-names>

## Magic Methods

Methoden zur Umwandlung in Strings:

- `__repr__`: möglichst vollständige Informationen zum Objekt, idealerweise von Python interpretierbar
- `__str__`: "schön" zu lesen

Beispiel:

```py
from datetime import time
a = time(23, 45)
repr(a) # 'datetime.time(23, 45)'
str(a) # '23:45:00'
```

## Magic Methods

Methoden für mathematische Operatoren:

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Magic Methods

- `__call__`
- `__getitem__`

# OOP: Vererbung

## Unterklassen und Vererbungsreihenfolge

## super()

Proxy zu den Elternklassen

## super()

ohne super:

```py
class Child(A, B):
    def __init__(self, x, y):
        A.__init__(self, x, y)
        B.__init__(self, x, y)
```

## super()

Mit super:

```py
class Child(A, B):
    def __init__(self, x, y):
        super().__init__(x, y)
```

# OOP: Vertiefung

## Klassendekoration

```py
@logattraccess
class Foo():
    def __init__(self):
        self.a = 3

f = Foo()

f.a # prints: "get property 'a'"
f.b = 3 # prints: "set propery 'b'"
```

## Instanzattribute und Slots

Generell können beliebige Attribute festgesetzt werden:

```py
a.value = 3
```

Um den Speicherverbrauch zu verringern, können in einer Klasse sogenannte _Slots_ definiert werden:

```py
class Money():
    __slots__ = ['currency', 'amount']
```

## Übungen

- Klasse "Vector"
- Klasse "BankAccount"
- Klasse "Dictionary" (Wörterbuch)

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

# Iterators: Hintergründe

## Iterators: Hintergründe

In Python wird jede for-Schleife über einen _Iterator_ durchlaufen.

Wenn eine Iteration über ein iterierbares Objekt ausgeführt wird, wird für diese Iteration ein _Iterator_ erstellt.

Jedes Iterable hat eine `__iter__`-Methode, die einen Iterator zurückgibt.

## Iterators: Hintergründe

Ein Iterator besitzt eine `__next__`-Methode

`__next__()` gibt entweder das nächste Objekt der Iteration zurück oder wirft eine `StopIteration`-Exception

Ein Iterator is tatsächlich auch immer ein Iterable (hat eine `__iter__`-Methode, die den Iterator zurückgibt)

## Iterators: Hintergründe

Iterator einer Liste:

```py
numbers = [1, 2, 3, 4]

numbers_iterator = numbers.__iter__()
```

## Iterators: Hintergründe

Iterators haben eine `__next__`-Methode, die das nächste Objekt in der Iteration zurückgibt.

Beispiel:

```py
numbers = [1, 2, 3]

numbers_iterator = numbers.__iter__()

print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
```

## Iterators: Hintergründe

Wenn ein Iterator "verbraucht" ist, wird eine `StopIteration`-Exception ausgelöst:

```py
print(numbers_iterator.__next__()) # 1
print(numbers_iterator.__next__()) # 2
print(numbers_iterator.__next__()) # 3
print(numbers_iterator.__next__()) # StopIteration
```

## Iterators: Hintergründe

Die globale Funktion `next()` ist äquivalent zum Aufruf von `.__next__()`

```py
next(numbers_iterator)
```

```py
numbers_iterator.__next__()
```

## Iterators: Hintergründe

Übung: Wir erstellen ein selbstdefiniertes Iterable durch das Implementieren einer klasse mit `__iter__` und `__next__`

```py
for i in random():
    ...
```

oder

```py
for number in roulette():
    print(number, end=" ")

4 0 29 7 13 19
```

# Schleifen

## for ... else

Einer for-Schleife kann eine optionale else-Klausel hinzugefügt werden - diese wird ausgeführt, wenn die Schleife ganz durchläuft - wenn also Python während des Ausführens nicht auf ein `break` (oder `return` oder ähnliches) stößt.

## for ... else

Diese Funktionalität gibt es bei keiner anderen verbreiteten Programmiersprache; viele Python-Entwickler kennen sie auch nicht - Zitat vom Erfinder von Python:

> I would not have the feature at all if I had to do it over.

## Beispiele

- `is_prime()` mit Schleifen und `for ... else`

# Funktionen - Fortgeschritten

## Lambdas

Definieren einer Lambda-Funktion (anonymen Funktion):

```py
multiply = lambda a, b: a * b
```

## Lambdas

Verwenden eines Lambdas zum Sortieren:

```py
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
```

## Decorators

Decorator: Möglichkeit, eine Funktion nach deren Erstellung zu verändern

Der Decorator ist eine Funktion, die eine Funktion als Parameter übernimmt und eine neue, veränderte Funktion zurückgibt

## Decorators

```py
@cache
def fib(n):
    ...
```

äquivalent zu:

```py
def fib(n):
    ...

fib = cache(fib)
```

## Functools

## Functools - Beispiel

```py
from functools import partial
open_utf8 = partial(open, encoding='UTF-8')
```

## Memoisation

Strategie zur Performanceoptimierung:

Die Rückgabewerte bisheriger Funktionsaufrufe werden gespeichert und bei erneutem Aufruf mit den gleichen Parameterwerten wiederverwendet

(Beispiel: Fibonacci)

# Fortgeschrittene Datentypen

## Fortgeschrittene Datentypen

- set / frozenset
- NamedTuple
- enum

# set & frozenset

## set & frozenset

Set: ungeordnete Menge von Elementen (ohne Duplikate)

Frozenset: unveränderliches set

```py
ingredients = {"flour", "water", "salt", "yeast"}
ingredients = set(["flour", "water", "salt", "yeast"])
ingredients = frozenset(["flour", "water", "salt", "yeast"])
```

## set

Sets können insbesondere Listen Ersetzen, wenn die Reihenfolge nicht von Bedeutung sein soll.

```py
ingredients1 = {"flour", "water", "salt", "yeast"}
ingredients2 = {"water", "salt", "flour", "yeast"}
ingredients1 == ingredients2 # True
```

## set

Achtung: Ein leeres set erstellen wir immer mittels `set()`.

Warum ergibt der Ausdruck `{}` kein leeres set?

## Operationen auf Sets

```py
x = set('abc')
y = set('aeiou')
x | y
x & y
x - y
x <= y
```

## Beispiel: Nachbarländer in Nordamerika

```py
countries = {
    "Canada", "USA", "Mexico", "Guatemala", "Belize",
    "El Salvador", "Honduras", "Nicaragua", "Costa Rica",
    "Panama"}

neighbors = [
    {"Canada", "USA"},
    {"USA", "Mexico"},
    {"Mexico", "Guatemala"},
    {"Mexico", "Belize"},
    {"Guatemala", "Belize"},
    {"Guatemala", "El Salvador"},
    {"Guatemala", "Honduras"},
    {"Honduras", "Nicaragua"},
    {"Nicaragua", "Costa Rica"},
    {"Costa Rica", "Panama"}
]
```

## Aufgabe: "Route" von einem Land in ein anderes

# namedtuple

## namedtuple

Beispiel:

```py
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])

p = Point(11, y=22)

print(p[0])
print(p.x)
```

# Enum

## Enum

Enum = eine Sammlung Symbolischer Namen, die z.B. anstatt vorgegebener Strings verwendet werden kann.

Verwendung eines Strings:

```py
a = Button(position="left")
```

Verwendung eines Enums namens _Position_:

```py
a = Button(position=Position.LEFT)
```

Enums können Tippfehler vermeiden und Autovervollständigung erleichtern.

## Enum

Definieren eines Enums:

```py
from enum import Enum

class Position(Enum):
    UP = 1
    RIGHT = 2
    DOWN = 3
    LEFT = 4
```

# Prallelisierung: Threads & Multiprocessing

## Threads & Multiprocessing - wozu?

Threads:

- Resourcen eines Prozessorkerns gerecht auf verschiedene Aufgaben aufteilen
- Warten auf I/O

Multiprocessing:

- Mehrere Prozessorkerne nutzen

Vorteil von Threading: einfacher, Variablen können direkt verändert werden

## Threads

Python schaltet wiederholt zwischen parallel laufenden Threads um, sodass diese scheinbar parallel laufen.  
In Wahrheit ist aber zu jedem Zeitpunkt nur ein Thread aktiv (Global Interpreter Lock - GIL)

Zwei Threads können auf die gleichen Daten zugreifen

## neuen Thread starten

```py
from threading import Thread

my_thread = Thread(target=print, args=('hello', ), kwargs={end: ""})
my_thread.start()
```

## auf beendigung des Threads warten

```py
my_thread.join()
```

## Beispiel: wiederholtes printen

```py
def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()
```

## Übung: Iterationen in Thread

Wir schreiben ein Programm, das zwei Threads (a und b) ausführt. Die zwei Threads enthalten Schleifen, welche mitzählen, wie oft sie aufgerufen wurden.

Beispielausgabe:

```bash
797 iterations in thread a
799 iterations in thread b
1750 iterations in thread a
20254 iterations in thread b
829 iterations in thread a
```

## Locks

für bestimmte Zeit auf einen Thread beschränken (zB um mehrere Dinge zu printen) - andere Threads sind währenddessen blockiert

## Locks

Im ganzen Programm sollte es nur 1 Lock-Objekt geben

```py
from threading import Lock

l = Lock()
```

## Locks

```py
def print_multiple_locked(text, n):
    with l:
        for i in range(n):
            print(text, end="")
```

## Threads - Beispiel

```py
threads = []

for i in range(1000000000000, 1000000000064):
    prime_thread = Thread(target=print_is_prime, args=(i,))
    prime_thread.start()
    threads.append(prime_thread)

for thread in threads:
    thread.join()
print('all threads finished')
```

## Threads und xkcd-Download

Aufgabe: die xkcd-Comics 100-109 herunterladen - einmal sequenziell und einmal parallel

## Multiprocessing

## Funktionen in eigenen Prozessen starten

Python ermöglicht es, eine Funktion jeweils in einem eigenen Prozess laufen zu lassen.

```py
from multiprocessing import Process

if __name__ == "__main__":
    p = Process(target=hello)
    p.start()
```

## Funktionen in eigenen Prozessen starten

```py
from multiprocessing import Process

if __name__ == "__main__":
    processes = []
    for i in range(30, 40):
        p = Process(target=print_fib, args=(i,))
        processes.append(p)
        p.start()
    for process in processes:
        process.join()
```

## Pools

Für gleichartige Verarbeitung mehrerer Daten, die gleichzeitig gestartet wird.

Beispiel: Alle Bilder in einem Verzeichnis verarbeiten

## Aufgabe: Fibonaccizahlen mit map() (1 Prozess)

Ausgangswert: `[0, 1, 2, 3, 4, 5, 6, ...]`

Rückgabewert: `[0, 1, 1, 2, 3, 5, 8, ...]`

## Pools

```py
with Pool(processes=4) as pool:
    print(pool.map(fib, range(1000, 1100)))
```

## Datenaustausch: shared memory

integer und floats (und arrays davon) über mehrere Prozesse verteilen

```py
from multiprocessing import Value, Array, Process

a = Array('i', [2, 4, 13])
p = Process(target=f, args=(a,))
p.start()
...
```

## Weitere Möglichkeiten: Pipes & Queues

Pipe: Messaging zwischen Prozessen in zwei Richtungen - zB Hintergrundprozess, der immer wieder etwas zu tun bekommen und dazwischen im Ruhezustand ist

Queue: Messaging in eine Richtung von verschiedenen Producern zu verschiedenen Consumern (langsamer als Pipes)

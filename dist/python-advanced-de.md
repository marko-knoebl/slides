# {{title}}

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# QA & Testen

## logging

## logging

```py
import logging
logging.basicConfig(
    filename="sort.log",
    level=logging.DEBUG,
    filemode="w"
)

logging.debug("hello")
```

## logging

Beispiel: Sortieralgorithmus

## assert

## doctests

## doctests

Codebeispiele und unittests in einem - innerhalb der docstrings

## doctests

```py
def add(a, b):
    """Add two numbers.

    >>> add(2, 3)
    5
    """
```

## doctests ausführen

```py
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

## doctests: lange Ausgaben

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

Möglichkeiten

- unittest (Standardlibrary)
- pytest
- nose

## unittest

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
```

## unittest

Ausführen:

```bash
python -m unittest mymodule
```

oder

```bash
python -m unittest
```

(findet Tests im Ordner)

## debugger

# Typendeklarationen

## Typendeklarationen

MyPy: Typechecker für Python, insbesondere sinnvoll für Python3

https://mypy-lang.org

## Typendeklarationen

Variablen:

```py
i: int = 3
```

## Typendeklarationen

Funktionen:

```py
def double(n: int) -> int:
    return 2 * n
```

## Typendeklarationen: Kollektionen

```py
from typing import Iterable

names: Iterable[str] = ...
```

## Typendeklarationen: Kollektionen

```py
from typing import List, Set, Dict, Tuple

names: List[int] = ['Anna', 'Bernd', 'Caro']
anna: Tuple[str, str, int] = ('Anna', 'Berger', 1990)
roman: Dict[int, str] = {1: 'I', 2: 'II', 3: 'III', 4: 'IV'}
```

## Mypy - Dokumentation

https://mypy.readthedocs.io

(auch für Python 2)

# Funktionen - Fortgeschritten

## Lambdas

## Memoisation

(Beispiel: Fibonacci)

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

# Objektorientierung (Fortgeschritten)

## Private Attribute und Methoden und Python-Philosophie

Kennzeichnung von Attributen, die von außen nicht verwendet werden sollten mit `_`

We're all consenting adults here: https://mail.python.org/pipermail/tutor/2003-October/025932.html

Achtung: oft Fehlinformation bezüglich `__`! In der Praxis sollten doppelte Unterstriche kaum verwendet werden.

## Instanzattribute und Slots

Generell können beliebige Attribute festgesetzt werden:

```py
a.value = 3
```

Um den Speicherverbrauch zu verringern, können in einer Klasse sogenannte "slots" definiert werden:

```py
class Money():
    __slots__ = ['currency', 'amount']
```

## Klassenattribute

sind Attribute, die nur auf der Klasse (nicht auf jeder Instanz) definiert sind - alle Instanzen teilen sich die Attribute

## Klassenattribute: Beispiel

`_exchange_rates = {'EUR': 1, 'USD': 0.85, 'GBP': 1.4}`

## Getters & Setters

Beispiel: `a.set_currency('EUR')`

## Properties

Alternative zu Getters & Setters

```py
def _get_currency(self):
    return self._currency

def _set_currency(self, currency):
    rates = type(self)._exchange_rates
    factor = rates[self._currency] / rates[currency]
    self._currency = currency
    self.amount *= factor

currency = property(_get_currency, _set_currency)
```

## Magic Methods

Besondere Methoden, die das Verhalten einer Klasse beeinflussen

- `__str__`
- `__repr__`

## Magic Methods

- `__add__`
- `__mul__`
- `__rmul__`
- ...

## Statische Methoden, Klassenmethoden und Decorators

_Klassenmethoden_: Methoden, die nicht auf eine bestimmte Instanz zugreifen müssen, sondern auf die Klasse

_Statische Methoden_: Methoden, die weder auf eine Instanz noch Klasse zugreifen müssen

## Beispiel Klassenmethode

```py
Money.from_string('23.40 EUR')
```

## Definition von statischen und Klassenmethoden

```py
@classmethod
def from_string(cls, inputstring):
    ...
```

## Unterklassen und Vererbungsreihenfolge

## super()

Proxy zu den Elternklassen

## super()

ohne super:

```py
class Child(A, B):
    def __init__(self):
        A.__init__(self)
        B.__init__(self)
```

## super()

Python 2:

```py
class Child(A, B):
    def __init__(self):
        super(Child, self).__init__()
```

Python 3:

```py
class Child(A, B):
    def __init__(self):
        super().__init__()
```

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

## Übungen

- Buch 10.11.4 (Laenge)
- Klasse "Vector"
- Klasse "BankAccount"
- Klasse "Dictionary" (Wörterbuch)

# Iterators

## Iterators

Oberflächlich: Ein Iterator ist ein besonderes Objekt, über das wir mit `for o in my_iterator` iterieren können.

Iterators können auf verschiedene Arten erzeugt werden.

## Iterators

Genauer Hintergrund: Ein Iterator ist ein besonderes Objekt, das eine `__next__`-Methode besitzt.

## Iterators - Beispiel count

```py
from itertools import count

for i in count():
    print(i)
```

## Iterators - Beispiel count

```py
from itertools import count

c = count()

c.__next__()
c.__next__()
```

## Iterators - Beispiel count

```py
from itertools import count

c = count()

next(c)
next(c)
```

## Iterators - Beispiel repeat

```py
from itertools import repeat

r = repeat('a', 5)

next(r)
...
```

## Iterators - Beispiel repeat

Wenn ein Iterator "aufgebraucht" ist:

`StopIteration`-Exception

## Iterators erzeugen

Möglichkeiten:

- Funktionen aus `itertools`
- Eigene Klasse mit `__next__` (und `__iter__`)
- Generator-Expression
- Funktion mit `yield`

## itertools

https://docs.python.org/3/library/itertools.html

## Eigene Klasse

Übungen:

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

## Generator-Expression

Sehr ähnlich zur List-Comprehension

```py
# list-comprehension
mylist = [i*i for i in range(3)]

# generator
mygenerator = (i*i for i in range(3))
```

## Generator-Expression

Unterschiede zur List-Comprehension

- weniger Resourcenverbrauch (Speicher, ...)
- Durchlauf nur 1x und nach der Reihe

## yield

Eine Funktion kann anstatt eines return-Statements ein yield-Statement enthalten und wird dann zum Generator

```py
# eigener count-generator
def count():
    i = 0
    while True:
        yield i
        i += i
```

## Iterable und \_\_iter\_\_

Iterable = Objekt, über das iteriert werden kann - definiert eine `__iter__`-Methode

Beispiele: Listen, Iterators

# Schleifen

## Schleifen

Übung: 1x1-Liste

## for ... else

Einer for-Schleife kann eine optionale else-Klausel hinzugefügt werden - diese wird ausgeführt, wenn die Schleife ganz durchläuft - wenn also Python während des Ausführens nicht auf ein `break` (oder `return` oder ähnliches) stößt.

Diese Funktionalität gibt es bei keiner anderen verbreiteten Programmiersprache; viele Python-Entwickler kennen sie auch nicht - Zitat vom Erfinder von Python:

> I would not have the feature at all if I had to do it over.

## Beispiele

- `is_prime()` mit Schleifen und `for ... else`

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


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

# Datentypen in Python

## Grundlegende Datentypen

- int
- float
- bool
- NoneType
- string
- bytes

## Kollektionen

- list
- tuple
- dict
- set

## weitere Datentypen

- complex
- frozenset
- bytearray
- OrderedDict
- NamedTuple

# None

## None

Der Ausdruck `None` steht in Python für "nichts" - analog zu `undefined` oder `null` in anderen Sprachen.

Er kann zB verwendet werden, wenn ein bestimmter Wert nicht bekannt ist

```py
users = [
  ["John", "Doe", "1976-10-23"],
  ["Jane", "Doe", "1974-01-20"],
  ["James", "Doe", None]
]
```

## None

- Singleton
- Vergleich üblicherweise mit `is`

```py
a = None
if a is None:
    print("a is None")
```

`None` ist ein Singleton (es gibt nur ein einziges None-Objekt innerhalb eines laufenden Python-Programms, auf das aber viele Variablen verweisen können)

## Vergleich mit "is"

Das Schlüsselwort `is` vergleicht in Python, ob sich zwei Referenzen / Namen auf das gleiche Objekt beziehen.

Beispiel:

```py
a = [1, 2]
b = a
x = [1, 2]

a == b # True
a is b # True
a == x # True
a is x # False
```

## Vergleich mit "is"

Nachdem `None` ein Singleton ist und daher immer auf die gleiche Instanz verweist, kann darauf mit `is None` getestet werden.

```py
if a is None:
    ...
```

# bool

## bool

True oder False

```py
a = True
if a:
    print('hello')
```

## bool

Frage: Für welche Objekte liefert `bool(x)` false? (Welche Objekte sind "falsy"?)

Anekdote: Mitternacht (`datetime.time(0, 0, 0`) vor Python 3.5

## bool

Intern verhält sich `False` fast wie `0` und `True` fast wie `1`

```py
False + True # 1
```

# Zahlen

## int

beliebig große Ganzzahlen

## int

Andere Zahlensysteme:

```py
a = 42
b = 0o52
c = 0x2a
```

```py
a = int('10010', 2)
```

## float

64-bit Gleitkommazahlen

## float

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
```

## complex

```py
a = 2 + 3j
```

## weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`

# Strings

## Strings

Strings sind Zeichenfolgen, die jedes Unicodezeichen repräsentieren können

## String-Methoden

- `.lower()`
- `.upper()`

## String-Methoden

- `.startswith(...)`
- `.endswith(".txt")`

## String-Methoden

- `.center(10)`
- `.ljust(10)`
- `.rjust(10)`

## String-Methoden

- `.strip()`
- `.split(' ')`
- `.splitlines()`
- `.join()`

## Übung: Faust

Formatierung von Goethes Faust

https://www.gutenberg.org/ebooks/2229

## Übung: Faust

Original:

```txt
  Ihr naht euch wieder, schwankende Gestalten,
  Die früh sich einst dem trüben Blick gezeigt.
```

Ziel:

```txt
Ihr naht euch wieder, schwankende Gestalten,               1
Die früh sich einst dem trüben Blick gezeigt.              2
```

## Übung: Faust

Weitere Aufgaben:

- Zeilennummern nur alle 5 Zeilen
- Zeilennummern alle 5 Zeilen, wenn die Zeile Text enthält - ansonsten in der nächsten Zeile

# String-Formatierung

## String-Formatierung

String-Formatierung = Einsetzen von Werten in Strings

Möglichkeiten:

```py
greeting = "Hello, " + name + "!"
```

```py
greeting = f"Hello, {name}!"
```

## String-Formatierung: Möglichkeiten

```py
city = 'Vienna'
temperature = 23.7

# eher veraltet
'weather in %s: %f°C' % (city, temperature)

'weather in {0}: {1}°C'.format(city, temperature)
'weather in {}: {}°C'.format(city, temperature)
'weather in {c}: {t}°C'.format(c=city, t=temperature)

f'weather in {city}: {temperature}°C'
```

## Formatangaben

```py
t = 333.333
'{t.4f}°K' # 333.3330°K
'{t.4g}°K' # 333.3°K
```

https://mkaz.blog/code/python-string-format-cookbook/

# Listen

## Listen

Listen sind veränderliche Sequenzen von Objekten; sie werden üblicherweise verwendet, um gleichartige (homogene) Einträge abzulegen

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## Operationen auf Listen

Die folgenden Operationen klappen auch bei anderen _Sequenzen_ - z.B. Tupeln, Strings oder Bytes

## Operationen auf Listen

- Elementzugriff (via index): `users[2]`
- Zugriff auf mehrere Elemente (Unterliste): `users[2:4]`
- Wiederholung: `3 * users`
- Länge: `len(users)`
- for-Schleife: `for user in users:`
- if-Abfrage: `if 'Tim' in users:`

## Operationen auf Listen - Mutationen

Listen sind die einzigen veränderlichen Sequenzen

- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Ein Element anhand des Index entfernen: `users.pop(2)`

## Sortieren von Listen

```py
l.sort()
```

```py
l.sort(key=...)
```

## Übungen

- Mischen von Karten
- Liste von Primzahlen

# Tupel

## Tupel

Repräsentieren üblicherweise inhomogene Daten vorgegebener Länge - jeder Eintrag hat eine besondere Bedeutung

Erstellung: Einträge werden mit Kommas getrennt, üblicherweise mit runden Klammern umschlossen

Tupel sind nach der Erstellung unveränderlich

## Tupel

Bei Tupeln hat jeder Eintrag eine bestimmte Bedeutung

Alternative Datenstrukturen mit benannten Einträgen:

- `dict`
- `NamedTuple`

## Tupel

```py
empty_tuple = ()
single_value = ('Thomas', )
two_values = ('Thomas', 'Bauer')
two_values = 'Thomas', 'Bauer'
```

## Unpacking (von Tupeln)

```py
# Tauschen von Variablennamen

a, b = b, a
```

## Unpacking (von Tupeln)

```py
# enumerate
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

# Bytes

## Bytes

= Sequenz von Zahlen zwischen 0 und 255

```py
m = bytes([104, 101, 108, 108, 111])

# oder:

m = b"hello"
```

## Bytes

Können zum Teil (bis 127) als ASCII-Text dargestellt werden

## Umwandlung zwischen Strings und Bytes

Strings können jeden beliebigen Text darstellen (intern üblicherweise mittels Unicode repräsentiert)

Bytes können einen encodierten String enthalten. Dabei gilt:

Für die Bytes von 0-127 ist das Zeichen in jedem Encoding das gleiche.
Für Bytes über 128 können verschiedene Encodings verschiedene Repräsentationen liefern.

## Encodings

```py
'a'.encode('ascii')
# b'a'

'a'.encode('latin-1')
# b'a'

'a'.encode('utf-8')
# b'a'
```

## Encodings

```py
'ä'.encode('ascii')
# UnicodeEncodeError: 'ascii' codec can't encode character ...

'ä'.encode('latin-1')
# b'\xe4'

'ä'.encode('utf-8')
# b'\xc3\xa4'
```

# Sequenzen

## Sequenzen

Objekte, die aus einer Aufreihung anderer Objekte bestehen, z.B.:

- Listen
- Tupel
- Strings
- Bytes

## Operationen auf Sequenzen

- Elementzugriff (via index): `s[i]`
- Zugriff auf mehrere Elemente: `s[i:j]`
- Konkatenation: `s + t`
- Wiederholung: `3 * s`
- Länge: `len(s)`
- for-Schleife: `for el in s:`
- if-Abfrage: `if el in s:`

## Operationen auf Sequenzen

Elementzugriff

```py
users = ['mike', 'tim', 'theresa']

users[0] # 'mike'
users[-1] # 'theresa'
```

## Operationen auf Sequenzen

Änderung von Elementen (falls Sequenz veränderlich ist)

```py
users = ['mike', 'tim', 'theresa']

users[0] = 'molly'
```

## Operationen auf Sequenzen

Zugriff auf mehrere Elemente

```py
users = ['mike', 'tim', 'theresa']

users[0:2] # ['mike', 'tim']
```

## Operationen auf Sequenzen

Konkatenation

```py
users = ['mike', 'tim', 'theresa']

new_users = users + ['tina', 'michelle']
```

## Operationen auf Sequenzen

Wiederholung

```py
users = ['mike', 'tim', 'theresa']

new_users = users * 3
```

## Operationen auf Sequenzen

Länge

```py
users = ['mike', 'tim', 'theresa']

print(len(users))
```

## Operationen auf Sequenzen

for-Schleife

```py
users = ['mike', 'tim', 'theresa']

for user in users:
    print(user.upper())
```

# Dictionaries

## Dictionaries

Dictionaries sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John"
    "last_name": "Doe"
    "nationality": "Canada"
    "birth_year": 1980
}
```

## Dictionaries

Elementezugriff bei dictionaries

```py
person["first_name"] # "John"
```

## Dictionaries

Iteration über Dictionaries

```py
for entry in person:
    print(entry)

# liefert: first_name, last_name, nationality, birth_year
```

## Dictionaries

Iteration über Schlüssel/Werte - Paare:

```py
for key, value in person.items():
    print(f'{key}, {value}')
```

## Operationen auf Dictionaries

```py
d = {0: 'null', 1: 'eins', 2: 'zwei'}

d[2]
d[2] = 'ZWEI'
d[3] # KeyError
d.get(3, None)

d.keys()
d.items()

d1.update(d2)
```

## Beispiel: Vokabelprogramm

- Einlesen von (JSON-)Datei
- Modellieren mit dictionaries
- zufälliges Auswählen eines Eintrags

## Beispiel: Todo-Liste

## Dictionaries

Was kann als key verwendet werden?

# Comprehensions

## List comprehensions

Wichtige Möglichkeit, um Listen basierend auf anderen Listen zu erstellen

In anderen Programmiersprachen oft umgesetzt mittels `map` und `filter` / `grep`

## List comprehension

```py
names = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
["ALICE", "BOB", "CHARLIE"]
```

## List comprehension

```py
amounts = [10, -7, 8, 19, -2]

negative_amounts = [amount for amount in amounts if amount < 0]
```

## List comprehension

Allgemeine Syntax:

```py
new_list = [new_entry for entry in old_list]

new_list = [new_entry for entry in old_list if condition]
```

## List comprehension

Beispiel Todo-Liste: Entfernen erledigter Todos

## Dictionary comprehensions

```py
colors: {
  'red': '#ff0000',
  'blue': '#0000ff',
  'green': '#008000'
}

m_colors = { color: colors[color][1:] for color in colors}
```

# Set

## Set

Ungeordnete Menge von Elementen (ohne Duplikate)

```
primes = {2, 3, 5, 7, 11, 13, 17, 19}
```

## Set

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

## Übungen

- Raumplan (7.6.2)
- Tanzpaare (7.7.5)

# Kontrollstrukturen

## Kontrollstrukturen

- `if`
- Schleifen
  - `while`
  - `for ... in ...`
  - `for ... in range(...)`
- `try ... except ...`

# if

## if

wir erinnern uns:

```py
if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## if-Expression

```py
age = 'young' if age_seconds < 1000000000 else 'old'
```

# Schleifen

## Schleifen

Übung: 1x1-Liste

## Continue & break

Die Schlüsselwörter `continue` und `break` können verwendet werden, um einen Schleifendurchlauf bzw die ganze Schleife zu beenden

Bei verschachtelten Schleifen beziehen sie sich immer auf die innerste Schleife

## for ... else

Einer for-Schleife kann eine optionale else-Klausel hinzugefügt werden - diese wird ausgeführt, wenn die Schleife ganz durchläuft - wenn also Python während des Ausführens nicht auf ein `break` (oder `return` oder ähnliches) stößt.

Zitat von Guido van Rossum:

> I would not have the feature at all if I had to do it over.

## Beispiel: is_prime()

# Exceptions (Ausnahmen)

## Arten von Exceptions (Auswahl)

- AssertionError
- AttributeError, IndexError, KeyError
- NameError
- TypeError
- ValueError
- IOError
- ZeroDivisionError

## Exceptions abfangen

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError:
    print("Could not parse input as number")
```

## Exceptions abfangen

```py
age_str = input("Enter your age")
try:
    age = int(age_str)
except ValueError as e:
    print("Could not parse input as number")
    print(e)
```

## finally und else bei exceptions

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
except IOError:
    print("could not open file")
else:
    file.write("abc")
    file.write("def")
finally:
    file.close()
```

## Exceptions erneut raisen

```py
try:
    ...
except ClientError as e
    if "DryRunOperation" not in str(e):
        raise
```

## Python-Philosophie: EAFP

EAFP vs LBYL

(Beispiel: Parsen von Zahlen)

# Funktionen

## Funktionen

Definition:

```py
def sum(a, b):
    return a + b

sum(1, 2) # 3
```

## Call by sharing

## Call by sharing

Java / C:

- call by reference

- call by value

## Call by sharing

Beispiel:

```py
def modify1(mylist):
    mylist.append(1)
    return mylist

def modify2(mylist):
    return mylist + [1]
```

## Globaler und lokaler scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Standard-Parameter

Parameter können einen Standardwert haben. Dieser wird verwendet, wenn kein expliziter anderer Wert übergeben wird.

Beispiel:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hallo") # HALLO!
shout("hi", ".") # HI.
```

## Schlüsselwort-Parameter

## beliebige Anzahl an Parametern (args / kwargs)

## Beispiel

Aufgabe: "Nachbau" von `range()`

## Rekursive Funktionen

Funktionen, die sich selbst aufrufen

## Rekursive Funktionen

Aufgabe: Fibonacci-Folge

```py
# 0 1 1 2 3 5 8 13 21 34 55 89 ...

fib(3)

fib(25)
```

## Rekursion mit Turtle

## Aufgaben

- 3 (Heron)
- 4 (Hanoi)
- 5 (Bäume)

# Module und Pakete

## Module und Pakete

- Modul = Python-Datei, aus der Objekte importiert werden können
- Paket = Verzeichnis, in dem Python-Module abgelegt sind

## Beispiele für imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

## Beispiele für imports: urllib

- `urllib` = Paket
- `urllib.request` = Modul
- `urllib.request.urlopen` = Funktion

## Kompilieren von Modulen

Importierte Module werden in kompilierter Form abgelegt, um später schneller eingelesen werden zu können.

Wir finden die kompilierten Versionen im Ordner `__pycache__`

## Achtung: circular imports vermeiden

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


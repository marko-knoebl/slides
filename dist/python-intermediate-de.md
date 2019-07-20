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

## Weitere Datentypen

- complex
- frozenset
- bytearray
- OrderedDict
- NamedTuple

# None

## None

Der Ausdruck `None` steht in Python für "nichts" - analog zu `undefined` oder `null` in anderen Sprachen.

Er kann z.B. verwendet werden, wenn ein bestimmter Wert nicht bekannt ist

```py
users = [
  ["John", "Doe", "1976-10-23"],
  ["Jane", "Doe", None]
]
```

## None

- Singleton
- Vergleich üblicherweise mit `is`

```py
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

`True` oder `False`

```py
a = True
if a:
    print('hello')
```

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

## float

_IEEE 754_: Standard für Gleitkommazahlen am Computer

wird von Python großteils umgesetzt

Ausnahme: Python löst für manche Operationen Exceptions aus, die unter dem Standard ein Ergebnis liefern würden - z.B. `1.0/0.0`

Besondere Zahlen in IEEE 754:

- `inf` und `-inf` (unendliche Werte)
- `nan` (not-a-number: undefinierter / unbekannter Wert)

## complex

```py
a = 2 + 3j
```

## Erweiterte Zuweisung

Zu binären Operatoren gibt es sogenannte _erweiterte Zuweisungen_ (_augmented assignments_):

```py
a = a + 1
```

Kurzform (erweiterte Zuweisung):

```py
a += 1
```

Weitere Formen: `-=`, `*=`, ...

## Weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`

# Zeichenkodierung

## Unicodezeichen

_Unicode_: Katalog von über 100000 internationalen Schriftzeichen, jedes mit eindeutigem Namen und Nummer (meist in Hexadezimalform)

Beispiele:

- _K_: U+004B (_Latin capital letter K_)
- _?_: U+003F (_Question mark_)
- _ä_: U+00E4 (_Latin small letter a with a diaeresis_)
- _€_: U+20AC (_Euro sign_)
- 🙂: U+1F642 (_Slightly smiling face_)

[Tabellen aller Unicodezeichen](https://en.wikibooks.org/wiki/Unicode/Character_reference)

## Zeichenkodierung

Zeichenkodierung = Zuordnung von Zeichen zu Bitsequenzen

- _ASCII_: Kodiert die ersten 128 Unicodezeichen, u.a. _A_, _!_, _\$_, _Leerzeichen_, _Zeilenumbruch_
- _Latin1_: Kodiert die ersten 256 Unicodezeichen, u.a. _ä_, _á_, _ß_, _§_
- _UTF-8_, _UTF-16_, _UTF-32_: Kodieren alle Unicodezeichen

Eine Zeichenkodierung ist notwendig, um Text auf ein Speichermedium zu schreiben oder über das Netzwerk zu übertragen

## Zeichenkodierung

Beispiele in ASCII / Latin1 / UTF-8:

- `!` ↔ `00100001`
- `A` ↔ `01000001`
- `a` ↔ `01100001`

Beispiele in Latin1:

- `Ä` ↔ `11000100`

Beispiele in UTF-8:

- `Ä` ↔ `11000011 10100100`
- `🙂` ↔ `11110000 10011111 10011001 10000010`

## Zeichenkodierung

| Zeichen | Unicode | ASCII | Latin-1 |    UTF-8 |   UTF-16 |
| ------- | ------: | ----: | ------: | -------: | -------: |
| K       |  U+004B |    4B |      4B |       4B |     4B00 |
| ä       |  U+00E4 |       |      E4 |     C3A4 |     E400 |
| €       |  U+20AC |       |         |   E282AC |     AC20 |
| 🙂      | U+1F642 |       |         | F09F9982 | 3DD842DE |

## UTF-8

UTF-8 hat sich insbesondere im Web zum Standardencoding entwickelt

Die ersten 128 Unicode-Zeichen benötigen nur 8 Bit (wie bei ASCII / Latin1)

Alle anderen Zeichen benötigen jeweils 16, 24 oder 32 Bit

## UTF-32

UTF-32 kodiert unmittelbar die Unicode-Codepukte, wobei je nach Anwendungsbereich eine andere Bytereihenfolge (big endian oder little endian) auftreten kann.

Beispiel:

🙂 (U+1F642) ↔ `00 01 F6 42` (big endian) oder `42 F6 01 00` (little endian)

## Zeilenumbrüche

Zeilenumbrüche können durch die Zeichen `LF` (line feed, `U+000A`) bzw `CR` (carriage return, `U+000D`) kodiert werden

- `LF`: Standard unter Linux, MacOS
- `CRLF`: Standard unter Windows, in Netzwerkprotokollen wie HTTP

In String-Literalen wird `LF` oft durch `\n` und `CR` oft durch `\r` repräsentiert

# Strings

## Strings

Strings in Python sind Zeichenfolgen, die jedes Unicodezeichen repräsentieren können

## String-Literale

Beispiele:

```py
a = "test"
b = 'test'
```

## Mehrzeilige String-Literale

```py
a = """this
is a multi-line
string literal.
"""
```

## Escape Sequenzen

Mit Hilfe des Backslashes können besondere Zeichen eingefügt werden:

```py
a = "He said:\n\"Hi!\""
```

## Escape Sequenzen

- `\'` → `'`
- `\"` → `"`
- `\\` → `\`
- `\n` → Line Feed (Zeilenumbruch unter Unix)
- `\r\n` → Carriage Return + Line Feed (Zeilenumbruch unter Windows)
- `\t` → Tab
- `\xHH` bzw. `\uHHHH` bzw. `\UHHHHHHHH` → Unicode-Codepunkt (hexadezimal)

## Raw Strings

Wenn in einem String keine Escape Sequenzen benötigt werden:

```py
path = r"C:\documents\foo\news.txt"
```

(besonders nützlich bei regulären Ausdrücken)

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

(siehe auch: "Gutenberg Mirror")

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
f'{t.4f}°K' # 333.3330°K
f'{t.4g}°K' # 333.3°K
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

Tauschen von Variablennamen

```py
a, b = b, a
```

## Unpacking (von Tupeln)

Aufzählen von Listenelementen:

```py
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

Enumerate gibt die folgende Datenstruktur zurück:

```py
[(0, 'Alice'), (1, 'Bob'), (2, 'Charlie')]
```

# Bytes

## Bytes

= Sequenz von Zahlen zwischen 0 und 255

```py
m = bytes([0, 0x40, 0x70, 0xa0])
```

```
m[1] == 64
m[2] == 160
```

## Bytes

Standard Repräsentation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0]))
```

```py
b'\x00@p\xa0'
```

Wenn möglich werden bytes als ASCII-Zeichen dargestellt; sonst wird ihr Hexadezimalcode angezeigt

Das `b` zeigt an dass, es sich um Bytes - und nicht einen gewöhnlichen String - handelt

## Bytes und Strings

Bytes können beliebige Daten beinhalten - oft beinhalten sie aber codierten Text

Wenn wir das Encoding kennen, können wir zwischen Bytes und Strings wechseln:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```

## Bytes und Strings

Speichermedien und Netzwerke verarbeiten nur Bytes. Um Text von einem Speichermedium oder Netzwerk zu lesen müssen wir das Encoding kennen bzw spezifizieren.

# Sequenzen

## Sequenzen

Sequenzen sind Objekte, die aus einer Aufreihung anderer Objekte bestehen, z.B.:

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
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## Dictionaries

Elementzugriff bei dictionaries

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
d.get(3) # None

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

## Private Attribute und Methoden und Python-Philosophie

Kennzeichnung von Attributen und Methoden, die von außen nicht verwendet werden sollten mit `_`

We're all consenting adults here: https://mail.python.org/pipermail/tutor/2003-October/025932.html

Achtung: oft Fehlinformation bezüglich `__`! In der Praxis sollten doppelte Unterstriche kaum verwendet werden.

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

## Vererbung

```py
class Person():
    ...

class Admin(Person):
    ...
```

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

## Kriterien bei if

Bei Kriterien für `if` und `while` verwenden wir üblicherweise Ausdrücke, die bei der Auswertung boolesche Werte ergeben.

Wir könnten jedoch auch andere Typen verwenden:

```py
a = 0
if a: ...

name = input("enter your name")
if name: ...

products = []
if products: ...
```

## Kriterien bei if

Grundsätzlich können beliebige Werte als Kriterium verwendet werden. Die meisten sind dabei "truthy".

Folgende Werte gelten als "falsy":

- `False`
- `0`, `0.0`
- `None`
- leere Sammlungen (`""`, `[]`, `()`, `{}`)
- Vor Python 3.5: Mitternacht (`datetime.time(0, 0, 0)`)

## Kriterien bei if

nicht "pythonic":

```py
name = input("Enter your name:")
if name != "":
    ...
```

"pythonic":

```py
name = input("Enter your name:")
if name:
    ...
```

## if Expression

Ein Ausdruck der einen von zwei möglichen Werten ergibt - basierend auf einem booleschen Kriterium

```py
size = 'small' if length < 110 else 'big'
```

In anderen Sprachen:

```js
// JavaScript
size = length < 110 ? 'small' : 'big';
```

# Exceptions (Ausnahmen)

## Arten von Exceptions

- AssertionError
- AttributeError, IndexError, KeyError
- NameError
- TypeError
- ValueError
- IOError
- ZeroDivisionError
- ...

Übung: versuche, jede der obigen Exceptions auszulösen

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
    print(e.args)
```

## Exceptions abfangen

Einsatz von `finally`:

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
    file.write("abc")
    file.write("def")
except IOError:
    print("could not open file")
finally:
    file.close()
```

## Exceptions abfangen

Einsatz von `else`:

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

LBYL: _Look before you leap_

EAFP: _It's easier to ask for forgiveness than permission_

(Beispiel: Parsen von Zahlen)

# Exceptions auslösen

## Exceptions auslösen

```py
raise ValueError('test')
```

## Abgefangene Exceptions erneut auslösen

```py
try:
    ...
except ClientError as e
    if "DryRunOperation" not in str(e):
        raise
```

## Eigene Exceptions

Eigene Exceptions können wir als Unterklassen von `Exception` definieren

```py
class MoneyParseException(Exception):
    pass

raise MoneyParseException()
```

# Funktionen

## Beliebige Anzahl an Parametern (args / kwargs)

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)

foo("one", "two", x="hello")
# args: ("one", "two")
# kwargs: {"x": "hello"}
```

`args` ist ein Tupel, `kwargs` ein Dictionary.

## Beispiel

Aufgabe: "Nachbau" von `range()`

## Globaler und lokaler Scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Call by sharing

In Python werden Werte mittels _call by sharing_ an Funktionen übergeben (ähnlich wie _call by reference_ in anderen Sprachen)

Dies bedeutet: Eine Funktion _kann_ übergebene Parameter abändern - und wir sollten darauf achten, das in der Praxis nicht zu tun

## Call by sharing

Beispiel:

```py
def modify_a(mylist):
    mylist.append(1)
    return mylist

def modify_b(mylist):
    return mylist + [1]

list_a = [1, 2]
list_a_mod = modify_a(list_a)
list_b = [1, 2]
list_b_mod = modify_b(list_b)
```

## Call by sharing

```py
list_a_mod # [1, 2, 1]
list_b_mod # [1, 2, 1]
list_a # [1, 2, 1]
list_b # [1, 2]
```

# Reine Funktionen

## Reine Funktionen

Reine Funktionen sind Funktionen, die mit ihrer Umgebung nur über Eingabeparameter und Rückgabewerte interagieren

Das bedeutet insbesondere:

- alle Eingabewerte werden über Parameter übergeben (die Funktion liest keine weiteren Variablen ein und interagiert auch nicht mit der Umwelt, z.B. durch das Lesen von Daten auf der Festplatte)
- die Funktion verändert ihre Umwelt nicht; wenn sie veränderliche Objekte übergeben bekommt, ändert sie diese nicht ab
- das Resultat des Funktionsaufrufs ist der Rückgabewert; sonst wird von der Funktion nichts geändert

## Reine Funktionen

Vorteile reiner Funktionen:

- leicht wiederverwendbar (da sie nicht von ihrer Umgebung abhängen)
- leicht zu testen

## Reine Funktionen

Beispiel für eine Funktion, die nicht rein ist:

```py
def remove_negatives(numbers):
    i = 0
    while i < len(numbers):
        if numbers[i] < 0:
            numbers.pop(i)
    return numbers

a = [2, 4, -1, -2, 0]
b = remove_negatives(a)
```

## Reine Funktionen

Reine Funktion als Alternative:

```py
def remove_negatives(numbers):
    nonnegatives = []
    for n in numbers:
        if n >= 0:
            nonnegatives.append(n)
    return nonnegatives
```

Anmerkung: In Python wäre die Ideallösung hier das verwenden von List Comprehensions

# Rekursive Funktionen

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

## Aufgaben zu Rekursion

- Babylonisches Wurzelziehen
- Bäume mit Turtle-Grafik

# Module und Pakete

## Module und Pakete

- Modul = Python-Datei, aus der Objekte importiert werden können
- Paket = Verzeichnis, in dem Python-Module abgelegt sind

## Beispiele für Imports

- `urllib` = Paket
- `urllib.request` = Modul
- `urllib.request.urlopen` = Funktion

<!-- list separator -->

- `sys` = Modul
- `sys.path` = Objekt

## Beispiele für Imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

mit neuen Namen:

```py
import numpy as np
import matplotlib.pyplot as plt
```

## Konventionen für Imports

- alle imports _sollten_ am Anfang einer Python-Datei stehen
- die imports _sollten_ in drei Gruppen geteilt werden:
  - standard Library
  - andere Libraries
  - projektinterne Module

## Auflösen von Imports

Suchreihenfolge:

- Verzeichnis, in dem das ursprünglich ausgeführte Python Skript liegt
- Standardlibrary
- externe Libraries

Vermeide Namensgleichheit mit existierenden Modulen / Paketen!

## Auflösen von Imports

Alle Pfade für Imports sehen wir via:

```py
import sys
print(sys.path)
```

## Kompilieren von Modulen

Importierte Module werden in kompilierter Form abgelegt, um später schneller eingelesen werden zu können.

Wir finden die kompilierten Versionen im Ordner `__pycache__`

## Achtung: circular imports vermeiden

# Python Versionen

## Python Versionen

Python 2 vs Python 3

## Strings und Bytes

Tiefgreifende Änderung in Python 3:

Strikte Trennung von Text (strings) und Binärdaten (bytes)

in Python 2: Datentypen `bytes`, `str` und `unicode`

## Print

Python 2:

```py
print "a",
```

Python 3:

```py
print("a", end="")
```

## Division

Python 2:

```py
10 / 3    # 3
```

## range

in Python 2: `range()` liefert Liste zurück, `xrange()` liefert speicherschonendes Objekt

in Python 3: `range()` liefert speicherschonendes Objekt

## input

in Python 2: `input()` wertet die Eingabe aus, `raw_input()` gibt String zurück

in Python 3: `input()` gibt String zurück

## \_\_future\_\_ imports

Verhalten von Python 3 in Python 2 übernehmen:

```py
from __future__ import print_function
from __future__ import unicode_literals
from __future__ import division
```

## Python-Future

Kompatibilitätsschicht zwischen Python 2 und Python 3

Unterstützung von Python 2 und Python 3 aus der gleichen Codebase


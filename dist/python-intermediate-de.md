# Python Intermediate

## Präsentationen

<https://marko-knoebl.github.io/slides/>

## Ihr Trainer

Marko Knöbl

- aus Wien
- ehemaliger Mathematiklehrer
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

# Datentypen in Python

## Grundlegende Datentypen

- int
- float
- bool
- NoneType
- string

## Kollektionen

- list
- tuple
- dict

## Weitere Datentypen

- decimal
- complex
- bytes, bytearray
- set, frozenset
- NamedTuple
- ...

# None

## None

`None` ist ein Singleton:

- es gibt immer nur ein `None`-Objekt innerhalb eines laufenden Python-Programms
- mehrere Variablen können auf dieses Objekt verweisen

## Vergleich mit "is"

Das Schlüsselwort `is` vergleicht in Python, ob sich zwei Referenzen / Namen auf das gleiche Objekt beziehen.

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

Nachdem `None` ein Singleton ist, kann darauf mit `is None` getestet werden.

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

## Weitere Operationen mit Zahlen

- Division mit Rest: `10 // 3`
- Divisionsrest / Modulo: `10 % 3`
- Potenzieren: `2 ** 3`

## Unterstriche in Literalen

um uns beim Lesen langer Zahlen zu helfen:

```py
earth_circumference = 40075017
earth_circumference = 40_075_017
```

## int

beliebig große Ganzzahlen

## int

Andere Zahlensysteme:

```py
a = 42 # decimal
b = 0b101010 # binary
c = 0o52 # octal
d = 0x2a # hexadecimal
```

```py
e = int('101010', 2)
```

## float

64-bit Gleitkommazahlen

```py
a = 2.3
b = .2
c = 6e23
d = float('nan')
e = float('inf')
```

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

Beispiele im Dezimalsystem: _1/3_, _1/7_

Beispiele im Binärsystem (`float`): _1/10_, _1/5_, _1/3_

Beispiel: `0.1 + 0.2` ergibt `0.30000000000000004`

Im Allgemeinen sind 64-bit floats auf ca 15 Dezimalstellen genau.

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

- _ASCII_: Kodiert die ersten 128 Unicodezeichen, u.a. _A_, _!_, _\\$_, _Leerzeichen_, _Zeilenumbruch_
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

## Übung: Formatierung von Goethes Faust

Quellen:

- <http://www.gutenberg.org/cache/epub/2229/pg2229.txt>
- <http://digital.library.upenn.edu/webbin/gutbook/lookup?num=2229>

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

Aufgaben:

- Ausrichtung der Zeilennummern basierend auf der Länge der längsten Zeile
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
f'{t:.4f}°K' # 333.3330°K
f'{t:.4g}°K' # 333.3°K
```

<https://mkaz.blog/code/python-string-format-cookbook/>

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
- Zusammensetzen: `users + users`
- Wiederholung: `3 * users`
- Länge: `len(users)`
- for-Schleife: `for user in users:`
- if-Abfrage: `if 'Tim' in users:`

## Operationen auf Listen - Mutationen

Listen können direkt verändert werden (im Gegensatz zu Tupeln, Strings):

- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Ein Element anhand des Index entfernen: `users.pop(2)`

## Sortieren von Listen

Sortierung nach Standardreihenfolge (bei Strings alphabetisch)

```py
l.sort()
```

Sortierung nach selbstdefinierten Reihenfolgen:

- nach Länge eines Strings
- nach Häufigkeit des Buchstabens "a"

```py
l.sort(key=len)

def count_a(s):
    return s.count("a")
l.sort(key=count_a)
```

## Übungen

- Mischen von Karten
- Liste von Primzahlen

# Tupel

## Tupel

Erstellung: Einträge werden mit Kommas getrennt, _üblicherweise_ mit runden Klammern umschlossen.

```py
empty_tuple = ()
single_value = ('Thomas', )
single_value = 'Thomas',
two_values = ('Thomas', 'Smith')
two_values = 'Thomas', 'Smith'
```

## Unpacking von Tupeln

```py
time = (23, 45, 0)

hour, minute, second = time
```

Tauschen von Variablennamen:

```py
a, b = b, a
```

# Bytes

## Bytes

beim Lesen von Datenträgern oder Empfangen von Daten müssen wir manchmals mit Bytes arbeiten: Abfolgen von Zahlen im Bereich von 0 bis 255 (8 Bit)

Bytes können Bilder, Text, Daten, ... repräsentieren

## Hexadezimalnotation

Bytes werden oft in Hexadezimalnotation statt dezimal geschrieben:

- 1<sub>dec</sub> = 1<sub>hex</sub>
- 9<sub>dec</sub> = 9<sub>hex</sub>
- 10<sub>dec</sub> = a<sub>hex</sub>
- 15<sub>dec</sub> = f<sub>hex</sub>
- 16<sub>dec</sub> = 10<sub>hex</sub>
- 17<sub>dec</sub> = 11<sub>hex</sub>
- 31<sub>dec</sub> = 1f<sub>hex</sub>
- 32<sub>dec</sub> = 20<sub>hex</sub>

## Hexadezimalnotation

hex-Literale in Python:

- 1 = `0x1`
- 9 = `0x9`
- 10 = `0xa`
- 15 = `0xf`
- 16 = `0x10`
- 17 = `0x11`
- 31 = `0x1f`
- 32 = `0x20`

## Erstellen

Erstellen von Bytes aus einer Liste von Zahlen:

```py
a = bytes([0, 64, 112, 160, 255])
b = bytes([0, 0x40, 0x70, 0xa0, 0xff])
```

Erstellen von Bytes aus einem Byte String-Literal:

```py
c = b"\x00\x40\x70\xa0\xff"
```

ASCII-Werte können direkt verwendet werden (`\x40` = "@", `\x70` = "p"):

```py
d = b"\x00@p\xa0\xff"
```

## Bytes

Standard Repräsentation in Python:

```py
print(bytes([0x00, 0x40, 0x70, 0xa0]))
```

```py
b'\x00@p\xa0\xff'
```

Wenn möglich werden bytes als ASCII-Zeichen dargestellt; sonst wird ihr Hexadezimalcode angezeigt

## Bytes und Strings

Bytes beinhalten of codierten Text

Wenn wir das Encoding kennen, können wir zwischen Bytes und Strings wechseln:

```py
'ä'.encode('utf-8')
# b'\xc3\xa4'
```

```py
b'\xc3\xa4'.decode('utf-8')
# 'ä'
```

# Sequenzen

## Sequenzen

Sequenzen sind Objekte, die aus einer Aufreihung anderer Objekte bestehen, z.B.:

- Listen
- Tupel
- Strings
- Bytes

## Operationen auf Sequenzen

- Elementzugriff (via index): `s[2]`
- Zugriff auf mehrere Elemente: `s[2:4]`
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
```

Dies liefert die Schlüssel: `"first_name"`, `"last_name"`, `"nationality"`, `"birth_year"`

Seit Python 3.7 bleiben die Schlüssel garantiert in der ursprünglichen Reihenfolge

## Dictionaries

Iteration über Schlüssel/Werte - Paare:

```py
for key, value in person.items():
    print(f'{key}, {value}')
```

## Operationen auf Dictionaries

```py
d = {0: 'zero', 1: 'one', 2: 'two'}

d[2]
d[2] = 'TWO'
d[3] # KeyError
d.get(3) # None
d.setdefault(2, 'n')
d.setdefault(3, 'n')

d.keys()
d.items()

d1.update(d2)
```

## Gültige Keys

Jedes unveränderliche Objekt kann als Key verwendet werden - meistens sind es Strings

## Beispiel: Vokabelprogramm

- Einlesen von (JSON-)Datei
- Modellieren mit dictionaries
- zufälliges Auswählen eines Eintrags

## Beispiel: Todo-Liste

# Comprehension

## List Comprehension

Wichtige Möglichkeit, um Listen basierend auf anderen Listen zu erstellen

In anderen Programmiersprachen oft umgesetzt mittels `map` und `filter` / `grep`

## List Comprehension

_Umwandeln der Einträge_:

```py
names = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
```

Resultat:

```py
["ALICE", "BOB", "CHARLIE"]
```

## List Comprehension

_Filtern_:

```py
amounts = [10, -7, 8, 19, -2]

positive_amounts = [amount for amount in amounts if amount > 0]
```

result:

```py
[10, 8, 19]
```

## List Comprehension

Allgemeine Syntax:

```py
new_list = [new_entry for entry in old_list]

new_list = [new_entry for entry in old_list if condition]
```

## Dictionary Comprehension

```py
colors: {
  'red': '#ff0000',
  'blue': '#0000ff',
  'green': '#008000'
}

m_colors = { color: colors[color][1:] for color in colors}
```

## Übung

Beispiel Todo-Liste: Entfernen erledigter Todos

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

We're all consenting adults here: <https://mail.python.org/pipermail/tutor/2003-October/025932.html>

Achtung: oft Fehlinformation bezüglich `__`! In der Praxis sollten doppelte Unterstriche kaum verwendet werden.

## Vererbung

```py
class Person():
    ...

class Admin(Person):
    ...
```

## Beispiel: Umsetzung einer Length-Klasse

```py
a = Length(2.54, "cm")
b = Length(3, "in")

a.unit
a.value
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

Diese Typen werden in boolesche Werte konvertiert bevor sie als Kriterium herangezogen werden.

## Kriterien bei if

Grundsätzlich können beliebige Werte als Kriterium verwendet werden. Die meisten sind dabei "truthy".

Folgende Werte gelten als "falsy" - ein Aufruf von `bool(...)` liefert `False` zurück:

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

## Verketten von Vergleichen

Überprüfen, ob `age` im Bereich 13-19 liegt:

```py
13 <= age and age <= 19
```

kürzere Version:

```py
13 <= age <= 19
```

Überprüfen, ob `a` und `b` beide `0` sind (kurze Version):

```py
a == b == 0
```

## if Expression

Ein Ausdruck, der einen von zwei möglichen Werten ergibt - basierend auf einem booleschen Kriterium

```py
size = 'small' if length < 100 else 'big'
```

In anderen Sprachen:

```js
// JavaScript
size = length < 100 ? 'small' : 'big';
```

# For-Schleifen

## For-Schleifen mit Entpacken von Tupeln

Wiederholung: Entpacken von Tupeln

```py
time = (23, 45, 0)

hour, minute, second = time
```

## For-Schleifen mit Entpacken von Tupeln

Aufzählen von Listenelementen:

```py
l = ['Alice', 'Bob', 'Charlie']

for i, name in enumerate(l):
    print(f'{i}: {name}')
```

Enumerate gibt eine Datenstruktur zurück, die sich wie die folgende Liste verhält:

```py
[(0, 'Alice'), (1, 'Bob'), (2, 'Charlie')]
```

## For-Schleifen mit Entpacken von Tupeln

Auflisten von Ordnerinhalten (inklusive Unterodner) mittels `os.walk`:

```py
import os

for directory, dirs, files in os.walk("C:\\"):
    print(f"{directory} {files}")
```

```
C:\ []
C:\PerfLogs []
C:\Program Files []
C:\ProgramData []
...
```

# Exceptions (Ausnahmen)

## Arten von Exceptions

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

Mehrere Arten von Exceptions abfangen:

```py
try:
    file = open("log.txt", encoding="utf-8")
except FileNotFoundError:
    print("could not find log file")
except PermissionError:
    print("reading of file is not permitted")
except Exception:
    print("error when reading file")
```

## Exceptions abfangen

Einsatz von `finally`:

```py
try:
    file = open("log.txt", "w", encoding="utf-8")
    file.write("abc")
    file.write("def")
except IOError:
    print("Error when writing to file")
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
    # no errors expected here
    file.write("abc")
    file.write("def")
file.close()
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

# Module und Pakete

## Module und Pakete

- Modul = Sammlung von Python-Objekten, die importiert werden können
- Paket = Sammlung von Modulen

(Pakete sind eigenlich eine besondere Form von Modulen)

## Beispiele für Imports

- `urllib` = Paket
- `urllib.request` = Modul
- `urllib.request.urlopen` = Funktion

<!-- list separator -->

- `sys` = Modul
- `sys.path` = Objekt

## Beispiele für Imports

Typische Imports:

```py
import module1
import module2
from package3 import module3a, module3b
from module4 import object4a, object4b
from package5.module5 import object5a, object5b
```

Konkrete Beispiele:

```py
import os
import sys
from urllib import request, response
from math import sqrt, pi
from http.client import HTTPConnection, HTTPSConnection
```

## Abkürzungen bei Imports

Insbesondere in der interaktiven Konsole sinnvoll, wenn Tipparbeit gespart werden soll:

Kurznamen beim import:

```py
import numpy as np
import matplotlib.pyplot as plt
import tkinter as tk
```

Alles aus einem Modul importieren (eher nicht empfohlen):

```py
from math import *
```

## Automatischer Import von Untermodulen

Beim Import _mancher_ Pakete werden automatisch auch Untermodule importiert.

Beispiele:

```py
import os
import numpy as np

os.path.join(...)
np.random.randint(10)
```

Gegenbeispiel - schlägt fehl:

```py
import urllib

urllib.request.urlopen(...)
```

## Konventionen für Imports

- alle imports _sollten_ am Anfang einer Python-Datei stehen
- die imports _sollten_ in drei Gruppen geteilt werden:
  - standard Library
  - andere Libraries
  - projektinterne Module

# Eigene Module

## Eigene Module

Ziel: Erstellen eines eigenen Moduls, das wie folgend verwendet werden kann:

```py
from foo import a, b
```

## Eigene Module

Einfaches Modul as Python-Datei:

```py
# foo.py
a = 1
b = 2
```

## Eigene Module

Modul als Verzeichnis:

```
- foo/
  - __init__.py
```

```py
# __init__.py
a = 1
b = 2
```

## Eigene Module

Module as a directory with separated defintions:

```
- foo/
  - __init__.py
  - _a_mod.py
  - _b_mod.py
```

```py
# __init__.py
from _a_mod import a
from _b_mod import b
```

## Eigene Pakete

Ziel: Erstellen eines eigenen Pakets, das wie folgt verwendet werden kann:

```py
from foo import bar

print(bar.a)
print(bar.b)
```

## Eigene Pakete

```
- foo/
  - bar.py
```

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

# PIP

## PIP

_PIP_ = Paketmanager für Python

Einfache Verwendung:

```bash
pip install requests numpy
```

Pakete und deren Abhängigkeiten werden im Python Package Index gesucht: <https://pypi.org/>

## PIP

Installation bestimmter Versionen:

```
pip install requests==1.1
pip install numpy>=1.16
```

## PIP

Abhängigkeitenliste in einer Requirements-Datei, die einfach mit anderen geteilt werden kann:

requirements.txt:

```
requests==1.1
numpy>=1.16
```

```bash
pip install -r requirements.txt
```

## Pipenv

Via Pipenv: virtuelle Umgebungen, die die projektweise Installation verschiedener Paketversionen erlauben

## Pipenv

Installation von pipenv:

```bash
pip install pipenv
```

## Pipenv

Verwendung von pipenv:

```bash
pipenv install requests
pipenv install numpy
```

Es entstehen zwei Dateien:

- _Pipfile_: allgemeine Abhängigkeitsinformationen
- _Pipfile.lock_: genaue Versionsnummern

## Pipenv

Ausführen in einer PIP-Umgebung:

```bash
pipenv run python foo.py
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

## Beliebige Anzahl an Parametern (args / kwargs)

Aufgabe: "Nachbau" von `range()` mit Hilfe einer while-Schleife

## Entpacken von Parameterlisten

```py
numbers = ["one", "two", "three"]

# equivalent:
print(numbers[0], numbers[1], numbers[2])

print(*numbers)
```

## Globaler und lokaler Scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Globaler und lokaler Scope

Beispiel: Schere, Stein, Papier

```py
import random
wins = 0
losses = 0
def play_rock_paper_scissors():
    player = input("rock, paper or scissors?")
    opponent = random.choice(["rock", "paper", "scissors"])
    if player == opponent:
        pass
    elif (
        (player == "rock" and opponent == "scissors")
        or (player == "paper" and opponent == "rock")
        or (player == "scissors" and opponent == "paper")
    ):
        global wins
        wins += 1
    else:
        global losses
        losses += 1
while input("play? (y/n)") != "n":
    play_rock_paper_scissors()
print(f"won: {wins}, lost: {losses}")
```

## Globaler und lokaler Scope

Eine bessere Alternative zum Keyword `global` ist oft das Verwenden einer Klasse:

```py
import random
class RockPaperScissors():
    def __init__(self):
        self.wins = 0
        self.losses = 0
    def play(self):
        ...
    def run(self):
        while input("play? (y/n)") != "n":
            self.play()
        print(f"won: {wins}, lost: {losses}")
```

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

Das obige Programm gibt `[1, 2, 3, 4]` aus. `a` und `b` beziehen sich auf das selbe Objekt.

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

Leitprinzip für Funktionen:

**Funktionen sollten übergebene Parameter nicht abändern**

oder allgemeiner:

**Funktionen sollten mit der Python-Umgebung nur dadurch interagieren, dass sie Parameter entgegennehmen und Rückgabewerte zurückliefern** (Sie sollten keine Seiteneffekte / Nebeneffekte haben)

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
print(b)
```

## Methode einer eigenen Klasse

Lockerung des Leitprinzips bei Methoden: Der Parameter `self` _darf abgeändert werden_.

Die folgende Methode ändert das Objekt intern ab und gibt nichts zurück.

```py
class AdvancedList(list):
    def remove_middle_element(self):
        self.pop(len(self) // 2)

a = AdvancedList([1, 2, 3, 4, 5])
a.remove_middle_element()
print(a)
```

## Objektreferenzen und Mutationen bei Funktionen

Übliche Regeln:

- Übergebene Parameter nicht abändern (Ausnahme: `self` in Methoden)
- Keine globalen Variablen setzen

Strikte Regeln - für sogenannte _reine_ Funktionen:

- Keine globalen Variablen lesen
- Kein I/O (Interaktion mit Festplatte / Netzwerk)

Reine Funktionen sind Funktionen, die mit ihrer Umgebung nur über Eingabeparameter und Rückgabewerte interagieren.

Je "reiner" eine Funktion ist, umso einfacher ist sie wiederzuverwenden und zu testen.

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

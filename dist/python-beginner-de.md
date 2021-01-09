# Python beginner

## Themen

- Überblick und Charakteristika von Python
- Installation
- interaktive Python-Umgebungen
- Variablen und Grundlegende Datentypen
- zusammengesetzte Typen: dict, list, tuple
- Datentypen
- Hilfe und Dokumentation
- Builtins und die Standard-Library
- Kontrollstrukturen
  - if / else
  - Schleifen (while, for)
- Funktionen
- Codequalität und Linting
- Debugging

# Python: Überblick

## Python

- dynamische Programmiersprache
- einfache Syntax, einfach zu lernen
- vielfältig einsetzbar (Wissenschaft, Web-Entwicklung, GUI-Programmierung)
- umfangreiche Standardlibrary und viele zusätzlich installierbare Module

## Python Weiterentwicklung und Versionen

Python 3: neue "minor"-Version (z.B. 3.9) wird jeden Oktober veröffentlicht

Python 2: Unterstützung endete 2019, zu diesem Zeitpunkt nutzten es noch [10% der Entwickelr](https://www.jetbrains.com/lp/python-developers-survey-2019/)

## Codebeispiel

```py
# this is a comment

a = 3
b = 4
print(a * b)

if a * b > 10:
    print('greater')
```

# Installation unter Windows

## Installation unter Windows

**Option 1**: Download aus dem Windows store

**Option 2**: Download von <https://python.org> (Während der Installation: Häkchen bei "Add Python 3.x to PATH" setzen)

<!--
Python zu path hinzufügen

program "environment variables" / "Umgebungsvariablen für dieses Konto bearbeiten"
zu PATH hinzufügen:

für Anaconda:
C:\Users\Marko\Anaconda3
C:\Users\Marko\Anaconda3\Scripts
-->

## Installation unter Windows

Überprüfen der Installation:

`python --version` sollte die Versionsnummer anzeigen

`pip install requests` sollte ein kleines Python-Paket namens _requests_ erfolgreich herunterladen und installieren

## Installation unter Windows

Python Installation beinhaltet:

- Python-"Runtime" zum ausführen von Python-Code
- IDLE: Einfache Entwicklungsumgebung
- interaktive Python-Konsole
- PIP: Paketmanager zum Installieren von Erweiterungen

# Python im interaktiven Modus

## Python im interaktiven Modus

Möglichkeiten:

- lokale Installation
- online-Notebook (Jupyter)

## Python im interaktiven Modus (lokal)

Starten:

- Terminal-Befehl `python`
- aus dem Startmenü (z.B. _Python 3.9_)

Beenden:

```py
exit()
```

## Python im interaktiven Modus (online)

einfach:

<https://www.python.org/shell/>

<!-- dated -->

_Jupyter_ Notebooks:

- Binder (begrenzte Sessions): <https://jupyter.org/try>
- <https://www.kaggle.com/notebooks>
- <https://colab.research.google.com> (Google Login benötigt)

# Variablen

## Variablen

```py
birth_year = 1970
current_year = 2020
age = current_year - birth_year
```

Variablennamen werden üblicherweise klein geschrieben; Wörter werden durch Unterstriche getrennt

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

## Variablen

Überschreiben (neu setzen) von Variablen:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```

# Grundlegende (primitive) Datentypen

## Grundlegende (primitive) Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)
- none: fehlender / unbekannter Wert

## int & float

Beispiel:

```py
(7 - 3) * 0.5 / 3.5
```

## str

Ein _String_ - auch _Zeichenkette_ - repräsentiert Text

Begrenzung durch einfache oder doppelte Anführungszeichen

```py
greeting = "Hello"
name = 'Tom'
```

## Strings zusammensetzen

```py
name = 'Tom'
```

Variablen einsetzen (f-Strings):

```py
message1 = f"Hello, {name}!"
```

Strings zusammensetzen:

```py
message2 = "Hello, " + name + "!"
```

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie z.B. `"` innerhalb eines Strings?

Ungültig:

```py
text = "He said: "hi!""
```

## Strings - Escape-Sequenzen

Lösung:

```py
text = "He said: \"hi!\""
```

Python interpretiert die Zeichenfolge `\"` wie ein einzelnes `"`

## Strings - Escape-Sequenzen

Zeilenumbruch: `\n`

```py
a = 'line 1\nline 2'
```

einzelner Backslash: `\\`

```py
b = 'C:\\docs'
```

## bool

Boolescher Wert: Ja/Nein - Wert

In Python: `True` oder `False`

beachte Großschreibung

## None

Wert ist unbekannt oder fehlt

```py
first_name = "Mike"
middle_name = None
last_name = "Jones"
```

# Typen und Typenumwandlungen

## Typen

Den Typ einer Variablen stellen wir mit `type()` fest:

```py
a = 4 / 2

type(a)
```

## Typenumwandlungen

Datentypen können mit Funktionen wie `int()`, `float()`, `str()`, `bool()`, ... ineinander umgewandelt werden

```py
pi = 3.1415
pi_int = int(pi)
message = "Pi is approximately " + str(pi_int)
```

# Funktionen

## Funktionen

Eine _Funktion_ ist ein "Unterprogramm", das eine bestimmte Aufgabe erledigen kann

Beispiele für vordefinierte Funktionen:

- `len()` kann die Länge eines Strings bestimmen (oder einer Liste, ...)
- `id()` kann die interne ID eines Objekts bestimmen
- `type()` kann den Typ eines Objekts bestimmen
- `print()` kann Ausgaben in das Terminal schreiben
- ...

## Funktionen

Funktionen können _Parameter_ übergeben bekommen und einen _Rückgabewert_ zurückliefern.

Beispiel: `len()` kann einen String als Parameter übergeben bekommen und einen Int als Rückgabewert liefern

Beispiel: `print()` kann verschiedene Objekte als Parameter entgegennehmen; es liefert keinen expliziten Rückgabewert

## Methoden

_Methode_: eine Funktion, die zu einem bestimmten Objekttyp gehört (z.B. zu _str_)

Beispiele für String-Methoden:

- `first_name.upper()`
- `first_name.count("a")`
- `first_name.replace("a", "@")`

# Zusammengesetzte Datentypen: dict, list, tuple

## dict

Dicts (_dictionaries_) sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## dict

Elementzugriff bei dicts

```py
person["first_name"]
```

```py
person["first_name"] = "Jane"
```

## dict

Übung:

Erstelle und verändere Dictionaries, die verschiedene Objekte repräsentieren - z.B.:

- einen Kalendereintrag
- eine Person
- ein Produkt in einem Online-Shop
- ...

## list

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]

products = [
    {"name": "IPhone 12", "price": 949},
    {"name": "Fairphone", "price": 419},
    {"name": "Pixel 5", "price": 799}
]
```

## list

Auslesen von Listenelementen mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[1]
users[-1] # last element
```

## list

Überschreiben von Listenelementen

```py
users[0] = "Andrew"
```

## list

Anhängen von Listenelementen

```py
users.append("Dora")
```

## list

Entfernen des letzen Elements:

```py
users.pop()
```

Entfernen anhand des Index:

```py
users.pop(0)
```

## list

Die Länge einer Liste bestimmen:

```py
len(users)
```

## list

Übungen:

Erstelle und ändere Daten, die aus _dicts_ und _lists_ bestehen und die verschiedene Objekte repräsentieren, z.B.:

- Kalendereinträge
- Produkte in einem Online-Shop / Einkaufskorb
- Transaktionen auf einem Bankkonto
- Daten zu einem Staat (inklusive Nachbarstaaten)

## tuple

```py
date = (1973, 10, 23)
```

- Anwendungsbereich: ähnlich wie Dicts
- Verhalten: ähnlich wie Listen

## tuple

Anwendungsbereich: ähnlich wie dict:

```py
point_dict = {"x": 2, "y": 4}
point_tuple = (2, 4)

date_dict = {
  "year": 1973,
  "month": 10,
  "day": 23
}
date_tuple = (1973, 10, 23)
```

Jeder Eintrag in einem Tupel hat eine bestimmte Bedeutung

## tuple

Verhalten: ähnlich wie Listen:

```py
date_tuple[0] # 1973
len(date_tuple) # 3
```

Im Gegensatz zu Listen sind Tupel unveränderlich (kein `.append` / `.pop` / ...)

## Datentypen - Aufgaben

erstelle und ändere Datenstrukturen, die _dicts_, _lists_ und _tuples_ beinhalten

# Objektreferenzen und Mutationen

## Objektreferenzen und Mutationen

Was ist der Wert von `a` am Ende dieses Programms?

```py
a = [1, 2, 3]
b = a
b.append(4)
```

## Objektreferenzen und Mutationen

Eine Zuweisung (z.B. `b = a`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

## Objektreferenzen und Mutationen

Falls das Original erhalten bleiben soll, kann es kopiert werden oder die abgeänderte Variante basierend auf dem alten Objekt erstellt werden:

```py
a = [1, 2, 3]
# creating a new copy
b = a.copy()
# modifying b
b.append(4)
```

```py
a = [1, 2, 3]
# creating a new object b based on a
b = a + [4]
```

## Objektreferenzen und Mutationen

Manche Objekte in Python können direkt verändert (mutiert) werden - z.B. via `.append()`, `.pop()`, ...

Beispiele: `list`, `dict`

Viele einfache Objekte sind nach ihrer Erstellung unveränderlich.

Beispiele: `int`, `float`, `str`, `bool`, `tuple`

# Hilfe und Dokumentation

## Hilfe und Dokumentation

Interaktive Hilfe zu Objekten in der Python-Konsole:

```py
help(list)
```

(Navigieren durch lange Ausgaben via _Enter_, Beenden via _Q_)

## Hilfe und Dokumentation

Dokumentation zu Built-Ins und der Standard Library:

<https://docs.python.org/3/library/index.html>

Bietet ähnliches wie die Funktion `help`, oft mit etwas ausführlicheren Beschreibungen

# Entwicklungsumgebungen

## Entwicklungsumgebungen

- _VS Code_ (open source)
- _PyCharm Community_ (open source)
- _PyCharm Professional_

## VS Code

Siehe die Präsentation [VS Code](./vs-code-de.html)

# Unser erstes Python-Programm

## Unser erstes Python-Programm

Wir legen eine Datei namens `greeting.py` an.

Unser Programm soll den Benutzer nach seinem Namen fragen und ihn dann begrüßen.

## Eingabe und Ausgabe

Ausgabe: Mit Hilfe der Funktion `print()`:

```py
print("Hello. What is your name?")
```

## Eingabe und Ausgabe

Eingabe: Mit Hilfe von `input()`:

```py
name = input()
```

`input` liefert immer einen String zurück

## Eingabe und Ausgabe

Ausgabe der Begrüßung

```py
print("Nice to meet you, " + name)
```

## Programme ausführen

in der Kommandozeile via `python greeting.py`

in VS Code (Python-Erweiterung muss installiert sein):

grünes Play-Symbol zur Editoransicht

oder

_Run_ - _Run Without Debugging (Ctrl + F5)_

## Übung: Alter anhand Geburtsjahr

Schreibe ein Programm namens `age.py`, das den Benutzer nach seinem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2020 wird.

## Übung: Länge des Namens

Schreibe ein Programm, das den Benutzer nach seinem Namen fragt. Es soll angeben, aus wie vielen Zeichen der Name besteht.

Verwende dazu die Funktion `len(...)`, um die Länge eines Strings zu ermitteln

## Kommentare

Kommentare dienen Entwicklern, um den Code zu beschreiben und zu erklären. Sie werden von Python ignoriert.

Ein Kommentar beginnt mit einem `#`-Zeichen und reicht bis zum Ende der Zeile.

Üblicherweise stehen Kommentare _oberhalb_ des Codes, den sie beschreiben

```py
# determine the length of the name
name_length = len(name)
```

# Builtins, Standard Library

## Builtins, Standard Library

- _Builtins_: Funktionen und Objekte, die oft verwendet werden und immer verfügbar sind
- _Standard Library_: Sammlungen von zusätzlichen Modulen und Paketen, die importiert werden können

Dokumentation: <https://docs.python.org/3/library/index.html>

## Builtins

unter anderem:

- `print()`
- `input()`
- `len()`
- `max()`
- `min()`
- `open()`
- `range()`
- `round()`
- `sorted()`
- `sum()`
- `type()`

## Standard Library

Die _Standard Library_ bietet zusätzliche Module, die importiert werden können.

Beispiel (abrunden):

```py
import math

print(math.floor(3.6))
```

oder

```py
from math import floor

print(floor(3.6))
```

## Standard Library

interessante Module:

- `pprint` (formatierte Ausgabe)
- `random`
- `math`
- `datetime`
- `os` (Betriebssystem, Dateisystem)
- `urllib.request` (HTTP-Anfragen)
- `webbrowser` (einfache Steuerung des Standard-Browsers)

## print und pprint

Ausgabe mehrerer Elemente:

```py
print(1, 2, 3, sep=", ", end="\n\n")
```

```bash
1, 2, 3


```

## print und pprint

```py
import pprint

pprint.pprint(['Mercuy', 'Venus', 'Earth', 'Mars', 'Jupiter',
               'Saturn', 'Uranus', 'Neptune', 'Pluto'])
```

```txt
['Mercuy',
 'Venus',
 'Earth',
 'Mars',
 'Jupiter',
 'Saturn',
 'Uranus',
 'Neptune',
 'Pluto']
```

## open

Textdatei zum Schreiben öffnen:

```py
file = open("message.txt", "w", encoding="utf-8")
file.write("hello\n")
file.write("world\n)
file.close()
```

Datei muss zuvor nicht existieren

## random

```py
import random

print(random.randint(1, 6))
print(random.choice(["heads", "tails"]))
```

## urllib.request

Abfrage von Web-Inhalten

```py
from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
```

## webbrowser

Beispiel:

```py
import webbrowser

webbrowser.open(
    "https://docs.python.org/3/library/webbrowser.html"
)
```

# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code z.B. wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen.

## Kontrollstrukturen

wichtigste Konstrollstrukturen in Programmiersprachen:

- if-Abfragen
- Schleifen
  - while-Schleife
  - do while-Schleife
  - for-Schleife (Zählschleife)
  - foreach-Schleife

## Konstrollstrukturen in Python

- `if ... else ...`
- Schleifen:
  - `while`
  - `for ... in ...`
  - `for ... in range(...)`

# Vergleiche

## Vergleiche

Um `if` und `while` nutzen zu können, müssen wir Werte vergleichen können:

```py
a = 2
b = 5

print(a == b) # a is equal to b
print(a != b) # a not equal to b
print(a < b)  # a is smaller than b
print(a > b)
print(a <= b) # a is smaller than or equal to b
print(a >= b)
```

## Vergleiche

Das Resultat eines Vergleichs ist ein _boolescher Wert_ (`True` / `False`)

Wir können das Resultat in einer Variablen speichern:

```py
is_adult = age >= 18
```

## Verknüpfung mit and, or, not

Beispiele:

```py
if age >= 18 and country == "de":
    print("may drink alcohol")

if temperature < -10 or temperature > 30:
    print("extreme weather")

if not value > 10:
    print("value not greater than 10")
```

# If / else

## If / else

Beispiel:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## If / elif / else

```py
if age_seconds < 100000000:
    print("You are less than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are between 100 million and 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are between 1 billion and 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

## Übung: Münzwurf

Simuliere einen zufälligen Münzwurf mittels `random.choice(["heads", "tails"])`

Lasse den Benutzer das Ergebnis raten und sage ihm, ob er richtig lag

# For-Schleifen

## For-Schleifen

Mit for-Schleifen können wir die Inhalte einer Liste (oder ähnlicher Objekte) durchlaufen.

Bezeichnung in manchen anderen Programmiersprachen: _for-each_

## For-Schleifen

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Übung: For-Schleifen und If-Statements

Beginne mit einer Liste von Zahlen, z.B. `[2, 5, -3, 8, 1, -5]`

Gib alle positiven Einträge aus, z.B. `2, 5, 8, 1`

Gib den größten Eintrag aus, z.B. `8`

## Beispiel: Login-System

<!-- might be too hard for programming beginners -->

```py
users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"}
]
```

## Beispiel: Login-System

Beispielhafter Programmlauf:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```

# While-Schleife

## While-Schleife

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

## While-Schleife

Übungen:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Schleife, die die Liste `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]` erstellt
- Rechentrainer mit Zufallsaufgaben
- Einkaufsliste

## While-Schleife

Beispiel: Einkaufsliste

Beispielhafter Programmlauf:

```txt
enter an item or "x" to quit:
milk
enter an item or "x" to quit:
bread
enter an item or "x" to quit:
apples
enter an item or "x" to quit:
x
your shopping list is:
["milk", "bread", "apples"]
```

## Continue & break

Die Schlüsselwörter `continue` und `break` können verwendet werden, um einen Schleifendurchlauf bzw die ganze Schleife zu beenden

Bei verschachtelten Schleifen beziehen sie sich auf die innerste Schleife

## Continue & break

Beispiel:

```py
a = 1

while True:
    a = a * 2
    print(a)
    if (a > 1000):
        break
```

# Zählschleifen

## Zählschleifen

Folgendermaßen können wir in Python von 0 bis 9 zählen:

```py
for i in range(10):
    print(i)
```

Der Aufruf `range(10)` erstellt ein Objekt, das sich wie die Liste `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]` verhält.

## Zählschleifen

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

# Bestandteile von Programmen

## Bestandteile von Programmen

- Programme
  - Codeblöcke
    - Anweisungen
      - Ausdrücke

## Leere Codeblöcke

_leere_ Codeblöcke mittels des `pass`-Statements:

```py
# TODO: warn the user if path doesn't exist

if not os.path.exists(my_path):
    pass
```

## Anweisungen über mehrere Zeilen

Ein Statement kann über mehrere Zeilen gehen, wenn wir entsprechend Klammern setzen

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: Escapen von Zeilenumbrüchen mit `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

# Kontrollstrukturen - Übungen

## Kontrollstrukturen - Übungen

- Zahlenraten
- Gesetze nach Alter
- Rechentrainer (mit Zufallsaufgaben)
- Loginsystem
- Schaltjahr
- Babylonisches Wurzelziehen

siehe <https://github.com/marko-knoebl/slides/tree/master/exercises/python-beginner>

# Funktionsparameter

## Positionale Parameter und Schlüsselwortparameter

Aufruf von `open`:

mit positionalen Parametern:

```py
f = open("myfile.txt", "w", -1, "utf-8")
```

mit Schlüsselwortparametern:

```py
f = open("myfile.txt", encoding="utf-8", mode="w")
```

Die Namen der Schlüsselwortparameter entnehmen wir der Dokumentation (z.B. via `help(open)`)

## Optionale Parameter und Standardwerte

Bei manchen Funktionen sind Parameter optional (sie haben einen Standardwert)

Beispiel: Bei der Funktion `open()` ist nur der erste Parameter zwingend anzugeben

Die Werte der Standardparameter entnehmen wir der Dokumentation

# Funktionsdefintion

## Funktionsdefinition

Beispiel:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

## Optionale Parameter und Standardwerte

Folgendermaßen definieren wir Standardwerte für Parameter:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hello") # HELLO!
shout("hi", ".") # HI.
```

## Scope

Eine Funktionsdefinition öffnet einen neuen _Scope_, einen Geltungsbereich für Variablen

Im folgenden Beispiel gibt es zwei separate Variablen, die beide mit `m` benannt sind:

```py
m = "Hello, world"

def average(a, b):
    m = (a + b) / 2
    return m
x = average(1, 2)

print(m) # prints "Hello, world"
```

## Scope

Innerhalb einer Funktion gilt: Variablen, die außerhalb definiert sind, können gelesen, aber nicht geschrieben werden

In anderen Programmiersprachen: auch Konstrukte wie `if` oder `for` eröffnen einen neuen Scope - nicht so in Python

# Funktionen: Übungsaufgaben

## Funktionen: Übungsaufgaben

- Funktion, die überprüft, ob ein Jahr ein Schaltjahr ist
- Funktion, die überprüft, ob eine Zahl eine Primzahl ist
- Funktion, die alle Primzahlen in einem Intervall zurückgibt
- Funktion, die die Prüfziffer eines Strichcodes validiert (GTIN Prüfziffer)
- Funktion, die die Fibonacci-Zahlen berechnet
- Funktion, die eine Liste von Lotteriezahlen generiert
- Funktion, die dem Benutzer eine ja/nein-Frage stellt und `True` oder `False` zurückgibt

für Strichcodes / Primzahlen: % - Operator

Siehe: <https://github.com/marko-knoebl/slides/tree/master/exercises/python-beginner>

# Lokale Module

## Lokale Module

wir können lokale Python-Dateien als Module importieren

Beispiel: lokale Datei _messages.py_

```py
import messages

print(messages.message1)
```

## Lokale Module

Zusammenfassung von Modulen in Pakete (via Ordnern)

Beispiel: Ordner _phrases/_, Dateien _phrases/messages.py_ und _phrases/greetings.py_

```py
from phrases import greetings

print(greetings.greeting1)
```

## Auflösen von Imports

Suchreihenfolge von Imports:

- Verzeichnis, in dem das ursprünglich ausgeführte Python Skript liegt
- Standardlibrary
- externe Libraries

Vermeide Namensgleichheit mit existierenden Modulen / Paketen!

# Codequalität und Linting

## Codequalität und Linting

Aspekte:

- allgemeines Linting
- Stil-Konventionen (PEP8)
- Docstrings

## Allgemeines Linting: Pylint

Finden allgemeiner Fehler

VS Code Konfiguration via `python.linting.pylintEnabled` und `python.linting.pylintUseMinimalCheckers`

## PEP8

Standard-Stil für Python-Code

offizielles Dokument: <https://www.python.org/dev/peps/pep-0008/>

cheatsheet: <https://gist.github.com/RichardBronosky/454964087739a449da04>

## Code-Formatierungs-Tools

- **black**
- autopep8
- yapf

In VS Code-Einstellungen: `"python.formatting.provider": "black"`

## Code-Formatierungs-Tools

input:

```py
a='Hello'; b="Have you read \"1984\"?"
c=a[0+1:3]
```

output via black:

```py
a = "Hello"
b = 'Have you read "1984"?'
c = a[0 + 1 : 3]
```

## Python-Philosophie, Zen of Python

Auszüge aus dem _Zen of Python_ (anzeigbar via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._

## Docstrings

Dokumentationsstrings, die z.B. Funktionen genauer beschreiben

Kommentare in einer Funktion: helfen Programmierern, die an dieser Funktion arbeiten

Docstring einer Funktion: hilft Programmierern, die diese Funktion verwenden

## Docstrings

Beispiel:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## Docstrings ausgeben

```py
help(fib)
help(round)
```

# Debuggen

## Debuggen

Breakpoints (Haltepunkte) können gesetzt werden, um die Ausführung des Codes an diesem Punkt zu pausieren.

Möglichkeiten, um Breakpoints zu setzen:

- in VS Code links neben die Zeilennummer klicken
- direkt in Python mittels `breakpoint()` (seit Python 3.7)

Ausführung in VS Code via _Debug - Start Debugging_ oder _F5_.

## Debuggen

Manuell weiterspringen:

- bis zum nächsten Breakpoint weiter ausführen:
  - _Continue_ in VS Code
  - `c` für _continue_ im Python Debugger
- debugging beenden:
  - _Stop_ in VS Code
  - `q` für _quit_ im Python Debugger

## Debuggen

Manuell weiterspringen:

- in die nächste Zeile springen:
  - _Step Over_ in VS Code
  - `n` für _next_ im Python Debugger
- in die nächste Zeile springen - und evtuell einem Funktionsaufruf folgen:
  - _Step Into_ in VS Code
  - `s` für _step_ im Python Debugger
- die aktuelle Funktion verlassen:
  - _Step Out_ in VS Code
  - `r` für _return_ im Python Debugger

## Debuggen

Werte in VS Code begutachten:

- direkt unter _variables_
- eigene Ausdrücke angeben unter _watch_

Ausgabe von Werten im Python Debugger mittels `p` für _print_:

```py
p mylist
p mylist[0]
```

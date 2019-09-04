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

# Python: Überblick

## Python

- dynamische Programmiersprache
- einfache Syntax, einfach zu lernen
- vielfältig einsetzbar (Wissenschaft, Web-Entwicklung, GUI-Programmierung)
- umfangreiche Standardlibrary und viele zusätzlich installierbare Module

## Python Weiterentwicklung und Versionen

- Python 3.7 (aktuell)
- Python 3.2 (erste gut benutzbare Python 3 - Version): 2011
- Python 2.7 (letze Python 2 - Version): 2010, Support bis 2020

## Codebeispiel

```py
# this is a comment

a = 3
b = 4
print(a * b)

if a * b > 10:
    print('greater')
```

# Python Installation

## Python Installation

für Windows: Download von https://python.org (Windows x86-64 web-based installer)

Häkchen bei "Add Python 3.7 to PATH" setzen

<!--
Python zu path hinzufügen

program "environment variables" / "Umgebungsvariablen für dieses Konto bearbeiten"
zu PATH hinzufügen:

für Anaconda:
C:\Users\Marko\Anaconda3
C:\Users\Marko\Anaconda3\Scripts
-->

## Python Installation

Python Installation beinhaltet:

- Python-"Runtime" zum ausführen von Python-Code
- IDLE: Einfache Entwicklungsumgebung
- interaktive Python-Konsole
- PIP: Paketmanager zum Installieren von Erweiterungen
- Python Dokumentation

# Python im interaktiven Modus

## Python im interaktiven Modus

Möglichkeiten:

- lokale Installation
- online-Notebook (Jupyter)

## Python im interaktiven Modus (lokal)

Starten:

- Terminal-Befehl `python`
- aus dem Startmenü (z.B. _Python 3.7 (64-bit)_)

Beenden:

```py
exit()
```

## Python im interaktiven Modus (online)

Python online (einfach):

https://www.python.org/shell/

Python online (**Jupyter Notebooks**):

- Google Colab (Google Account benötigt)
- Binder (begrenzte Sessions)
- Microsoft Azure Notebooks (Account benötigt)
- ...

## Python im interaktiven Modus (online)

Google Colab:

- Gehe zu https://colab.research.google.com
- Wähle _File_ - _New Python 3 Notebook_

Binder:

- Gehe zu https://jupyter.org/try
- _Try Jupyter with Python_ auswählen
- warten ...
- _File_ - _New Notebook_ - _Python 3_

# Variablen

## Variablen

```py
birth_year = 1970
current_year = 2019
age = current_year - birth_year
```

Variablennamen werden üblicherweise klein geschrieben; Wörter werden durch Unterstriche getrennt

# Grundlegende Datentypen

## Grundlegende Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)
- none: fehlender / unbekannter Wert

## int

Beispiel: `3`

Operationen:

```py
5 - 3 * 4 / 2
```

## float

Beispiele: `3.3`, `3.0`

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

Beispiel: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2` ergibt `0.09999999999999998`

## str

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

```py
greeting = "Hello"
name = 'Tom'
```

## str

mehrzeilige Strings: in dreifachen Anführungszeichen

```py
"""Hello,
my name is
Andreas"""
```

## Strings zusammensetzen

```py
name = 'Tom'
```

Option 1 (f-strings):

```py
msg2 = f"Hello, {name}"
```

Option 2:

```py
msg1 = "Hello, " + name
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

Achtung: Groß- und Kleinschreibung ist wichtig!

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

# Weitere Datentypen: dict, list

## dict

Dictionaries sind Zuordnungen, die bestimmten Einträgen zugehörige Werte zuweisen.

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

## list

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## list

Auslesen von Listenelementen mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[2]
users[-1]
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

## Datentypen - Aufgaben

Wir beginnen mit einem leeren _dictionary_ und erstellen daraus eine Datenstruktur, die z.B. eine Person darstellt

```py
person = {}
```

gewünschtes Resultat z.B.:

```py
{
    "first_name": "Kofi",
    "last_name": "Annan",
    "birth_year": 1938,
    "children": ["Ama", "Kojo"]
}
```

## Datentypen - Aufgaben

erstelle und ändere Datenstrukturen, die folgendes darstellen:

- Daten zu einem Staat der Welt (Einwohnerzahl, Hauptstadt, Nachbarländer)
- eine Liste von erledigten bzw nicht erledigten Todos
- Transaktionen auf einem Bankkonto

# Objekte abändern

## Objekte abändern

In Python können Listen und Dictionaries direkt verändert werden - z.B. durch das Ergänzen eines neuen Eintrags

Viele andere Objekte - z.B. str, int, float - können nicht abgeändert werden. Jedoch ist es möglich, neue, veränderte Objekte basierend auf bereits vorhandenen Objekten zu erstellen.

## Objekte abändern

```py
a = [1, 2, 3]
# creating a new object
a = a + [4]

a = [1, 2, 3]
# a is modified directly
a.append(4)
```

## Objekte abändern

Was wird das folgende Programm ausgeben?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

## Objekte abändern

Eine Zuweisung (z.B. `b = a`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

# Hilfe und Dokumentation

## Hilfe und Dokumentation

Interaktive Hilfe zu Objekten in der Python-Konsole:

```py
help(list)
```

(Navigieren durch lange Ausgaben via _Enter_, Beenden via _Q_)

## Hilfe und Dokumentation

Dokumentation zu Built-Ins und der Standard Library:

https://docs.python.org/3/library/index.html

Bietet ähnliches wie die Funktion `help`, oft mit etwas ausführlicheren Beschreibungen

# Python Programme

## Python Programme

Zum schreiben ganzer Programme verwenden wir eine sogenannte _Entwicklungsumgebung_

## Installation der Entwicklungsumgebung VS Code

https://code.visualstudio.com/

## VS Code: Einrichtung für Python

- Python-Erweiterung für VS Code installieren

- Zuvor installiertes Python finden:
  - Taste `F1` drücken
  - Suche nach: "Python: choose interpreter"
  - Enter
  - warten...
  - Python 3.7 auswählen

- Pylint installieren

# VS Code

## VS Code

https://code.visualstudio.com

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: Datei-Explorer, Split Editor

## VS Code: Terminal

Öffnen und Schließen der Ansicht via _Strg_ + _Ö_

zusätzliches Terminal via Symbol _+_

übernimmt das aktuell geöffnete Verzeichnis

## VS Code - Konfiguration

Via _File - Preferences - Settings_

Eingeteilt in _User Settings_ und _Workspace Settings_

## VS Code - Konfigurationsmöglichkeiten

Empfehlungen:

- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Auto Save: _afterDelay_
- Tab Size: _2_ oder _4_

Weitere Möglichkeiten:

- Word Wrap
- EOL
- Workbench: Color Theme

## VS Code - Kurzbefehle

- _F1_ oder _Ctrl_ + _Shift_ + _P_: Kommandopalette

<!-- list separator -->

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _Ctrl_ + _#_: aus- / einkommentieren
- _F12_: Zur Definition springen
- _Shift_ + _F12_: Definition anzeigen
- _F2_: Umbenennen von Variablen
- _Ctrl_ + _F2_: Mehrere Textcursor setzen
- _Alt_ + Mausklick: Mehrere Textcursor setzen

# Python-Programme

## Python-Programme

Wir legen eine Datei namens `greeting.py` an.

Unser Programm soll den Benutzer nach seinem Namen fragen und ihn dann begrüßen.

## Eingabe und Ausgabe

Ausgabe: Mit Hilfe von `print()`:

```py
print("Hello. What is your name?")
```

Print ist eine sogenannte _Funktion_.

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

In der Kommandozeile via `python greeting.py`

In VS Code via Taste _F5_

## Übung: Alter anhand Geburtsjahr

Schreibe ein Programm namens `age.py`, das den Benutzer nach seinem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2019 wird.

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

Dokumentation: https://docs.python.org/3/library/index.html

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

Die _Standard Library_ bietet zusätzliche Module, die importiert werden können

Beispiel (abrunden):

```py
import math

print(math.floor(3.6))
```

oder 

```py
from math import floor

print(flor(3.6))
```

## Standard Library

interessante Module:

- `pprint` (formatierte Ausgabe)
- `random`
- `math`
- `datetime`
- `os` (Betriebssystem, Dateisystem)
- `sys` (Python Umgebung)
- `urllib.request` (HTTP-Anfragen)

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

## random

Zufallsergebnisse

```py
import random

print(random.randint(1, 6))
print(random.choice(["heads", "tails"]))
```

## sys

Kommandozeilenparameter sind auslesbar über `sys.argv`

```py
# hello.py
import sys
print(sys.argv)
```

```bash
python hello.py one two three
```

```bash
['hello.py', 'one', 'two', 'three']
```

## urllib.request

Abfrage von Web-Inhalten

```py
from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
```

# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code z.B. wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen.
## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um Aktionen zu wiederholen

## Konstrollstrukturen in Python

- `if`
- Schleifen:
  - `while`
  - `for ... in ...`
  - `for ... in range(...)`

# If

## Vergleiche

Für den Einsatz von if und while müssen wir Werte vergleichen können:

```py
a = 2
b = 5

print(a == b) # a gleich b
print(a != b) # a ungleich b
print(a < b)  # a kleiner b
print(a > b)
print(a <= b) # a kleiner oder gleich b
print(a >= b)
```

## If / else

wenn, dann - sonst

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
    print("You are les than 100 million seconds old")
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

## Verknüpfung von Vergleichen

einfach:

```py
if a == 3:
    print("a is 3")
```

komplexer:

```py
if a == 3 and 4 < b < 10:
    print("a is 3 and b is between 4 and 10")
```

## Verknüpfung von Vergleichen

```py
# b ist größer als 4 und kleiner als 10 (verketteter Vergleich)
4 < b < 10

# längere Version
b > 4 and b < 10

# c liegt nicht zwischen 4 und 10
not 4 < c < 10

# andere Version:
c <= 4 or c >= 10
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

Beispiele:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben
- Einkaufsliste

## Übung: Einkaufsliste

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

# For-Schleifen

## For-Schleifen

Mit for-Schleifen können wir die Inhalte einer Liste (oder ähnlicher Objekte) durchlaufen.

Bezeichnung in anderen Programmiersprachen: _for-each_

## For-Schleifen

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Beispiel: Login-System

```py
# Benutzer mit Passwörtern
users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]]
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

# Zählschleifen

## Zählschleifen

Folgendermaßen können wir in Python von 0 bis 9 zählen:

```py
for i in range(5):
    print(i)
```

Der Aufruf `range(5)` erstellt ein Objekt, das sich wie die Liste `[0, 1, 2, 3, 4]` verhält

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

## Anweisungen über mehrere Zeilen

Wenn ein Statement über mehrere Zeilen gehen soll, wird es üblicherweise in Klammern gesetzt

```py
a = (2 + 3 + 4 + 5 + 6 +
     7 + 8 + 9 + 10)
```

Alternative: Escapen von Zeilenumbrüchen mit `\`

```py
a = 2 + 3 + 4 + 5 + 6 + \
    7 + 8 + 9 + 10
```

# Kontrollstrukturen - Beispiele

## Kontrollstrukturen - Beispiele

- Schaltjahr (if / elif / else)
- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben
- Babylonisches Wurzelziehen

## Beispiel: Schaltjahr

- Jahr ist Schaltjahr: wenn durch 4 teilbar
- Ausnahme: wenn auch durch 100 teilbar
- Ausnahme von der Ausnahme: wenn auch durch 400 teilbar

Hinweis: "x ist teilbar durch y" in Python: `x % y == 0`

## Beispiel: Babylonisches Wurzelziehen

Berechnungsverfahren für die Quadratwurzel, das schon vor fast 4000 Jahren in Mesopotamien verwendet wurde

## Beispiel: Babylonisches Wurzelziehen

```pseudocode
gesucht: Quadratwurzel aus 12345

n = 12345

Beginne mit zwei "Näherungswerten", z.B. a=1 und b=n

wiederhole das folgende, bis a und b fast gleich sind:
neues a = Durchschnitt aus alten Werten a und b
neues b = n / a

=> a und b nähern sich (schnell) der Quadratwurzel an
```

## Babylonisches Wurzelziehen: Lösung

```py
n = 12345
a = 1
b = n
for i in range(10):
    a = (a + b) / 2
    b = n / a
print(b)
```

# Funktionen

## Funktionen

Wir kennen schon einige vordefinierte Funktionen, z.B. `len()`, `range()` oder `print()`

## Parameter und Rückgabewerte

Funktionen können Parameter übergeben bekommen und Rückgabewerte haben.

Beispiel: `len([1, 1, 1])` → `3`

Parameter: `[1, 1, 1]`

Rückgabewert: `3`

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

print(m)
```

## Scope

Innerhalb einer Funktion gilt: Variablen, die außerhalb definiert sind, können gelesen, aber nicht geschrieben werden

In anderen Programmiersprachen: auch Konstrukte wie `if` oder `for` eröffnen einen neuen Scope - nicht so in Python

## Docstrings

Dokumentationsstrings, die Funktionen / Klassen / Module genauer beschreiben

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

## Aufgabe: Funktion lottery()

Schreibe eine Funktion namens `lottery`, die eine Liste von Lotteriezahlen erzeugt

`lottery()` → `[2, 35, 19, 27, 10]`

## Aufgabe: isprime()

Schreibe eine Funktion namens `isprime`, die überprüft, ob eine Zahl eine Primzahl ist

`isprime(59)` → `True`

## Aufgabe: ask_yes_no()

Schreibe eine Funktion namens `ask_yes_no`, die dem Benutzer eine Ja/Nein-Frage stellt und entweder `True` oder `False` zurückliefert

# Funktionen: Übungsaufgaben

## Übungsaufgaben

- Funktion, die eine Kreditkartennummer / ISBN / IBAN validiert
- Primzahlen in einem Intervall
- Fibonacci-Zahlen

Für ISBN / Primzahlen: %-Operator

## Luhn Algorithmus (Prüfziffer)

Der Luhn Algorithm wird verwendet, um Fehler in Identifikationsnummern, wie z.B. Kreditkartennummern, zu vermeiden.

Die letzte Ziffer dieser Nummern ist eine Prüfziffer die sich aus den anderen Ziffern errechnet

Beispiel: Die Nummer `7992739871` hat die Prüfziffer `3`, die vollständige Nummer wäre also `79927398713`

## Luhn Algorithmus (Prüfziffer)

Prüfziffer errechnen:

Beginnend von rechts, ersetze jede zweite Ziffer mittels dieses Schemas:

0 → 0, 1 → 2, 2 → 4, 3 → 6, 4 → 8,  
5 → 1, 6 → 3, 7 → 5, 8 → 7, 9 → 9

(Beispiel: `7992739871` wird zu `7994769772`)

Addiere alle Ziffern

(Beispiel: `7994769772` wird zu 67)

Die Prüfziffer ist jene Ziffer, die auf die nächstgrößere Zehnerzahl fehlt

(im Beispiel: 3)

## ISBN

International Standard Book Number = 10-stellige Buchnummer mit Prüfziffer am Ende

Berechnung der Prüfziffer:

(erste Ziffer + 2 \* zweite Ziffer + 3 \* dritte Ziffer ... + 9 \* neunte Ziffer) modulo 11

Aufgabe:

```py
check_isbn("3826604237") # True oder False
```

## ISBN

```py
isbn = "3826604237"
expected = 7

def check_isbn(isbn, checksum):
    return isbn_checksum(isbn) == checksum


def isbn_checksum(isbn):
    sum = 0
    for i in range(9):
        sum += int(isbn[i]) * (i + 1)

    return sum % 11

print(check_isbn(isbn, expected))
```

## IBAN

# Textdateien lesen und schreiben

## Textdateien lesen und schreiben

Viele Dateiformate am PC sind nichts anderes als eine Folge von Textzeichen - z.B. die Formate `.txt`, `.html`, `.csv` oder `.py`.

Diese können wir in Python einfach als Strings repräsentieren und leicht lesen und schreiben.

## Textdatei schreiben

```py
# zum schreiben öffnen (w = write)
# als utf-8-Datei öffnen
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()
```

## Textdatei lesen

```py
# standardmodus = zum lesen öffnen
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

## Encoding

Empfehlung: Textdateien _immer_ im utf-8 encoding lesen oder schreiben (beste Unterstützung für Sonderzeichen)

## Beispiel

Programm, das Todos vom Benutzer abfragt und in einer Datei abspeichert

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

offizielles Dokument: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

## PEP8 & Code-Formatierungs-Tools

- autopep8
- yapf
- _black_

In VS Code-Config: `"python.formatting.provider": "black"`

## PEP8 und Code-Formatierungs-Tools

```py
# Eingabecode:
a='hello'; b="bye";

# autopep8:
a = 'hello'
b = "bye"

# yapf:
a = 'hello'
b = "bye"

# black:
a = "hello"
b = "bye"
```

## PEP8 und Code-Formatierungs-Tools

```py
Eingabecode:

a[0+3:1]

# autopep8:
a[0+3:1]

# yapf:
a[0 + 3:1]

# black:
a[0 + 3 : 1]
```

## Python-Philosophie, Zen of Python

Auszüge aus dem _Zen of Python_ (anzeigbar via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._

# Debuggen

## Debuggen

Breakpoints (Haltepunkte) können gesetzt werden, um die Ausführung des Codes an diesem Punkt zu pausieren.

Möglichkeiten, um Breakpoints zu setzen:

- direkt in Python mittels `breakpoint()` (seit Python 3.7)
- in VS Code links neben die Zeilennummer klicken

## Debuggen

Manuell weiterspringen:

- bis zum nächsten Breakpoint weiter ausführen:
  - `c` für _continue_ im Python Debugger
  - _Continue_ in VS Code
- debugging beenden:
  - `q` für _quit_ im Python Debugger
  - _Stop_ in VS Code

## Debuggen

Manuell weiterspringen:

- in die nächste Zeile springen: 
  - `n` für _next_ im Python Debugger
  - _Step Over_ in VS Code
- in die nächste Zeile springen - und evtuell einem Funktionsaufruf folgen:
  - `s` für _step_ im Python Debugger
  - _Step Into_ in VS Code
- die aktuelle Funktion verlassen:
  - `r` für _return_ im Python Debugger
  - _Step Out_ in VS Code

## Debuggen

Ausgabe von Werten im Python Debugger mittels `p` für _print_:

```py
p mylist
p mylist[0]
```

Werte in VS Code begutachten:

- direkt unter _variables_
- eigene Ausdrücke angeben unter _watch_

# Cheatsheet

https://ehmatthes.github.io/pcc/cheatsheets/README.html

(fehlende Inhalte: break, None, Kommentare)


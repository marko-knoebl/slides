# {{title}}

---

## Präsentation und Code

Präsentationen verfügbar unter: https://karuga.eu/courses-presentations

Code verfügbar unter: https://github.com/marko-knoebl/courses-code

---

## Ihr Trainer

Marko Knöbl

- Frontend Web-Entwicklung
  - JavaScript
  - React, Angular
- Programmierung
  - Python, JavaScript

---

## Vorstellung der Teilnehmer

- Name
- Firma
- Aktuelle Projekte
- Grund der Schulung
- Vorkenntnisse
- Erwartungen / Wünsche

---

## Organisatorisches

- Kursdauer
- Pausen
- Mittagessen
- Unterlagen
- Fragen, Feedback? - Jederzeit erwünscht

# Python: Überblick

---

## Python

- dynamische Programmiersprache
- einfache Syntax, einfach zu lernen
- vielfältig einsetzbar (Wissenschaft, Web-Entwicklung, GUI-Programmierung)
- umfangreiche Standardlibrary und viele zusätzlich installierbare Module

---

## Python Weiterentwicklung und Versionen

- Python 3.7 (aktuell)
- Python 3.2 (erste gut benutzbare Python 3 - Version): 2011
- Python 2.7 (letze Python 2 - Version): 2010, Support bis 2020

---

## Codebeispiel

```py
# this is a comment

a = 3
b = 4
print(a * b)

if a * b > 10:
    print('hello')
```

# Python Installation

---

## Python Installation

für Windows: Download von https://python.org (Windows x86-64 web-based installer)

Häkchen bei "Add Python 3.7 to PATH" setzen

---

## Python Installation

Python Installation beinhaltet:

- Python-"Runtime" zum ausführen von Python-Code
- IDLE: Einfache Entwicklungsumgebung
- interaktive Python-Konsole
- PIP: Paketmanager zum Installieren von Erweiterungen
- Python Dokumentation

# Die interaktive Python-Konsole

---

## Die interaktive Python-Konsole

Starten:

- Terminal-Befehl `python`
- Desktop-Anwendung _IDLE_

---

## Ausdrücke und Operatoren

```py
2 + 2
```

---

## Mathematische Operatoren

```py
2 * 2 + 3 / 2
```

---

## Einfache (primitive) Datentypen

Mit welchen Arten von Daten - außer Zahlen - arbeitet ein Computer noch?

---

## Einfache (primitive) Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)

---

## int

Beispiele: `3`, `10`

---

## float

Beispiele: `3.3`, `3.0`

---

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

zB: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

???

Beispiel: 0.3 - 0.2 - 0.1

---

## str

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

```py
"Hallo"
"Hallo" + "Andreas"
"Hallo" * 3
```

---

## str

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

```py
"Hallo"
'Hallo'
```

---

## str

mehrzeilige Strings: in dreifachen Anführungszeichen

```py
"""Hello,
my name is
Andreas"""
```

---

## str

Ungültige Operationen:

```py
"Hallo" - "Andreas"
"Hallo" * "Andreas"
"Hallo" * 3.0
```

---

## f-strings

Werte in Strings einsetzen:

```py
f"A year has {365 * 24} hours."
```

---

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie zB `"` innerhalb eines Strings?

Ungültig:

```py
text = "He said: "hi!""
```

---

## Strings - Escape-Sequenzen

Lösung:

```py
text = "He said: \"hi!\""
```

Python interpretiert die Zeichenfolge `\"` wie ein einzelnes `"`

```py
print(len(text)) # 14
```

---

## Strings - Escape-Sequenzen

```py
# Zeilenumbruch in 1 Zeile: \n
a = 'line 1\nline 2'

# einzelner Backslash: \\
b = 'C:\\docs'
```

---

## bool

Boolescher Wert: Ja/Nein - Wert

In Python: `True` oder `False`

Achtung: Groß- und Kleinschreibung ist wichtig!

---

## Variablen

Daten können in Python mit einem Namen versehen werden - man spricht von Variablen

```py
first_name = "John"
last_name = "Doe"
age = 40
```

---

## Variablen

```py
full_name = f"{first_name} {last_name}"
birth_year = 2018 - age
```

---

## Variablen

Variablennamen werden üblicherweise klein geschrieben und durch Unterstriche getrennt

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

---

## Variablen

Überschreiben (neu Setzen) von Variablen:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```

# Python Programme

---

## Python Programme

Den Code für ganze Programme schreiben wir in einzelne Dateien.

Das tun wir mit einer sogenannten _Entwicklungsumgebung_

---

## Installation der Entwicklungsumgebung VS Code

https://code.visualstudio.com/

---

## VS Code: Einrichtung für Python

- Python-Erweiterung für VS Code installieren

- Zuvor installiertes Python finden:
  - Strg + Shift + P
  - Suche nach: "Python: Interpreter auswählen"
  - Enter
  - warten...
  - Python 3.7 auswählen

---

## VS Code: automatisches speichern

---

## VS Code: Ordner öffnen

# Unser erstes Python-Programm

---

## Unser erstes Python-Programm

Wir legen eine Datei namens `greeting.py` an.

Unser Programm soll den Benutzer nach seinem Namen fragen und ihn dann begrüßen.

---

## Eingabe und Ausgabe

Ausgabe: Mit Hilfe von `print()`:

```py
print("Hello. What is your name?")
```

Print ist eine sogenannte _Funktion_.

---

## Eingabe und Ausgabe

Eingabe: Mit Hilfe von `input()`:

```py
name = input()
```

---

## Eingabe und Ausgabe

Ausgabe der Begrüßung

```py
print("Nice to meet you," + name)
```

---

## Programme ausführen

In der Kommandozeile via `python greeting.py`

In VS Code via Taste _F5_

---

## Typen umwandeln

Die Funktion `input` liefert immer Text (einen string) zurück.

Um den string in einen int zu verwandeln:

```py
birth_year_string = input("when were you born?")
birth_year_int = int(birth_year_string)
```

Analog für andere Datantypen: `str()`, `float()`, `bool()`

---

## Übung: Alter anhand Geburtsjahr

Schreibe ein Programm namens `age.py`, das den Benutzer nach seinem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2018 wird.

---

## Übung: Länge des Namens

Schreibe ein Programm, das den Benutzer nach seinem Namen fragt. Es soll angeben, aus wie vielen Zeichen der Name besteht.

Verwende dazu die Funktion `len(...)`, um die Länge eines Strings zu ermitteln

---

## Kommentare

Kommentare dienen Entwicklern, um den Code zu beschreiben und zu erklären. Sie werden von Python ignoriert.

Eine Kommentarzeile beginnt mit einem `#`-Zeichen.

```py
# determine the length of the name
name_length = len(name)
```

# Kontrollstrukturen

---

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code zB wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen

---

## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if/else-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um unter bestimmten Bedingungen eine Aktion zu wiederholen

---

## Vergleiche

Für den Einsatz von grundlegenden Kontrollstrukturen müssen wir Werte vergleichen können:

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

---

## if / else

wenn, dann - sonst

---

## if / else

Beispiel:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

---

## if / elif / else

```py
if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

---

## if / elif / else

Beispiel: Zahlenraten

---

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die zB als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

---

## while-Schleife

Eine if-Abfrage führt einen Codeblock _einmal_ aus, wenn ein Kriterium zutrifft

Eine while-Schleife wiederholt einen Codeblock, solange ein Kriterium zutrifft

Beispiel:

```py
a = 1

while a < 2000:
    print(a)
    a = a * 2
```

---

## while-Schleife

Beispiele:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

---

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

---

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

# Kontrollstrukturen - Beispiele

---

## Kontrollstrukturen - Beispiele

- Schaltjahr (if / elif / else)
- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben
- Babylonisches Wurzelziehen

---

## Beispiel: Schaltjahr

- Jahr ist Schaltjahr: wenn durch 4 teilbar
- Ausnahme: wenn auch durch 100 teilbar
- Ausnahme von der Ausnahme: wenn auch durch 400 teilbar

Hinweis: "x ist teilbar durch y" in Python: `x % y == 0`

---

## Beispiel: Babylonisches Wurzelziehen

Berechnungsverfahren für die Quadratwurzel, das schon vor fast 4000 Jahren in Mesopotamien verwendet wurde

---

## Beispiel: Babylonisches Wurzelziehen

```pseudocode
gesucht: Quadratwurzel aus 12345

n = 12345

Beginne mit zwei "Näherungswerten", zB a=1 und b=n

wiederhole das folgende, bis a und b fast gleich sind:
neues a = Durchschnitt aus alten Werten a und b
neues b = n / a

=> a und b nähern sich (schnell) der Quadratwurzel an
```

---

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

# Bestandteile von Programmen

---

## Bestandteile von Programmen

- Programme
  - Codeblöcke
    - Anweisungen
      - Ausdrücke

---

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

# Listen

---

## Listen

Weiterer wichtiger Datentyp: Liste (`list`)

---

## Erstellen von Listen

Mit eckigen Klammern:

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

---

## Auslesen von Listenelementen

Mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

print(users[0])
print(users[2])
print(users[-1])

print(len(users))
```

---

## Operationen mit Listen

- Überschreiben: `users[0] = "Andrew"`
- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Länge: `len(users)`
- Zusammenhängen: `primes + users`
- Abfragen, ob Element in Liste: `if "Andrew" in users:`

---

## Übung: Einkaufsliste

Beispielhafter Programmlauf:

```text
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

## Objekte abändern

In Python können Listen verändert werden - z.B. durch das anhängen eines neuen Eintrags

Viele andere Objekte - z.B. str, int, float - können nicht abgeändert werden. Jedoch ist es möglich, neue, veränderte Objekte basierend auf bereits vorhandenen Objekten zu erstellen.

---

## Objekte abändern

```py
a = [1, 2, 3]
# creating a new object
a = a + [4]

a = [1, 2, 3]
# a is modified directly
a.append(4)
```

---

## Objekte abändern

Was wird das folgende Programm ausgeben?

```py
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```

---

## Objekte abändern

Eine Zuweisung (`b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

# For-Schleifen

---

## For-Schleifen

Mit for-Schleifen können wir die Inhalte einer Liste (oder ähnlicher Objekte) durchlaufen.

Bezeichnung in anderen Programmiersprachen: _for-each_

---

## For-Schleifen

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

---

## Beispiel: Login-System

```py
# Benutzer mit Passwörtern
users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]]
```

---

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

---

## Zählschleifen

Um mit Python zu zählen, gibt es ein besondere Funktion, die `range` heißt.

Der Aufruf `range(5)` erstellt ein Objekt, das sich wie die Liste `[0, 1, 2, 3, 4]` verhält.

Beispiel zur Verwendung:

```py
for i in range(5):
    print(i)
```

---

## Zählschleifen

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

# Builtins, Module

---

## Builtins, Module

- Builtins: Funktionen und Objekte, die oft verwendet werden und immer verfügbar sind
- Module: Sammlungen von zusätzlichen Objekten, die importiert werden können

---

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

---

## Module

Module beinhalten zusätzliche Objekte, die importiert werden können

zB:

```py
from math import floor

# abrunden
print(floor(3.6))
```

---

## Module

interessante Module:

- `random`
- `math`
- `datetime`
- `os` (Betriebssystem, Dateisystem)
- `pprint` (formatierte Ausgabe)

---

## print und pprint

Ausgabe mehrerer Elemente:

```py
print(1, 2, 3, sep=", ", end="\n\n")
```

```bash
1, 2, 3


```

---

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

# Übungsbeispiele

---

## Übungsbeispiele

- Todoliste
- Lottozahlengenerator
- Hangman

---

## Todoliste

Interaktive Eingabe, die den Benutzer eine Liste von Todos erstellen lässt und diese am Ende ausgibt

???

liste, while, for, input

---

## Todoliste

```py
todolist = []
proceed = True
while proceed:
    new_todo = input("enter new todo:")
    todolist.append(new_todo)
    proceed_input = input("add another todo? (y/N)")
    proceed = proceed_input == 'y'

for todo in todolist:
    print('-', todo)
```

# Funktionen

---

## Funktionen

Wir kennen schon einige vordefinierte Funktionen, zB `len()`, `range()` oder `print()`

---

## Parameter und Rückgabewerte

Funktionen können Parameter übergeben bekommen und Rückgabewerte haben.

Beispiel: `len([1, 1, 1])` → `3`

Parameter: `[1, 1, 1]`

Rückgabewert: `3`

---

## Optionale Parameter

Experiment: Wie verhält sich die Funktion `range`, wenn wir 1, 2 oder 3 Parameter übergeben?

---

## Positionelle Parameter und Schlüsselwortparameter

Aufruf von `open`:

mit Positionellen Parametern:

```py
f = open("myfile.txt", "w", -1, "utf-8")
```

mit Schlüsselwortparametern:

```py
f = open("myfile.txt", encoding="utf-8", mode="w")
```

# Funktionen selbst definieren

---

## Funktionen selbst definieren

Beispiel:

```py
def average(a, b):
    m = (a + b) / 2
    return m
```

---

## Aufgabe: Funktion lottery()

Schreibe eine Funktion namens `lottery`, die eine Liste von Lotteriezahlen erzeugt

`lottery()` → `[2, 35, 19, 27, 10]`

---

## Aufgabe: isprime()

Schreibe eine Funktion namens `isprime`, die überprüft, ob eine Zahl eine Primzahl ist

`isprime(59)` → `True`

---

## Aufgabe: ask_yes_no()

Schreibe eine Funktion namens `ask_yes_no`, die dem Benutzer eine Ja/Nein-Frage stellt und entweder `True` oder `False` zurückliefert

# Textdateien schreiben

---

## Textdateien lesen und schreiben

Viele Dateiformate am PC sind nichts anderes als eine Folge von Textzeichen - zB die Formate `.txt`, `.html`, `.csv` oder `.py`.

Diese können wir in Python einfach als Strings repräsentieren und leicht lesen und schreiben.

---

## Textdatei schreiben

```py
# zum schreiben öffnen (w = write)
# als utf-8-Datei öffnen
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()
```

---

## Textdatei lesen

```py
# standardmodus = zum lesen öffnen
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

---

## Encoding

Empfehlung: Textdateien _immer_ im utf-8 encoding lesen oder schreiben (beste Unterstützung für Sonderzeichen)

---

## Beispiel

- Programm, das Todos vom Benutzer abfragt und in einer Datei abspeichert

# Übungsaufgaben

---

## Übungsaufgaben

- Programm, das eine Kreditkartennummer / ISBN / IBAN validiert
- Tic-Tac-Toe - Spiel mit textbasierter grafischer Ausgabe
- Primzahlen in einem Intervall
- Fibonacci-Zahlen

???

Anmerkung zu ISBN / Primzahlen: %-Operator kommt erst später

---

## Luhn Algorithmus (Prüfziffer)

Der Luhn Algorithm wird verwendet, um Fehler in Identifikationsnummern, wie z.B. Kreditkartennummern, zu vermeiden.

Die letzte Ziffer dieser Nummern ist eine Prüfziffer die sich aus den anderen Ziffern errechnet

Beispiel: Die Nummer `7992739871` hat die Prüfziffer `3`, die vollständige Nummer wäre also `79927398713`

---

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

---

## ISBN

International Standard Book Number = 10-stellige Buchnummer mit Prüfziffer am Ende

Berechnung der Prüfziffer:

(erste Ziffer + 2 _ zweite Ziffer + 3 _ dritte Ziffer ... + 9 \* neunte Ziffer) modulo 11

Aufgabe:

```py
check_isbn("3826604237") # True oder False
```

---

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

---

## IBAN

# VS Code - Fortgeschritten

---

## VS Code - Setup für Python

Datei - Einstellungen - Einstellungen

Empfehlungen:

- `python.linting.pylintEnabled`: `true`
- `python.linting.pylintUseMinimalCheckers`: meist auf `true` - oder eigene Konfiguration
- `python.linting.flake8Enabled`: für Formatierungsüberprüfung auf `true`
- `python.formatting.provider`: `black`

---

## VS Code - Befehle und Einrichtung

- automatisches Speichern
- Tastenkürzel:
  - Terminal: Ctrl + Ö
  - Umbenennen: F2 (Rope installieren)
  - Mehrere Cursor: Alt + Klick
  - Automatische Formatierung: Alt + Shift + F
  - Ein- / Auskommentieren: Ctrl + #

# Codequalität und Linting

---

## Codequalität und Linting

Aspekte:

- allgemeines Linting
- Stil-Konventionen (PEP8)
- Docstrings
- Statische Typisierung (mypy)

---

## Allgemeines Linting: Pylint

Finden allgemeiner Fehler

Konfigurierbar mittels `python.linting.pylintEnabled` und `python.linting.pylintUseMinimalCheckers`

---

## PEP8

Standard-Stil für Python-Code

offizielles Dokument: https://www.python.org/dev/peps/pep-0008/

cheatsheet: https://gist.github.com/RichardBronosky/454964087739a449da04

---

## PEP8 & Code-Formatierungs-Tools

- autopep8
- yapf
- _black_

In VS Code-Config: `"python.formatting.provider": "black"`

---

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

---

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

---

## Docstrings

Beschreiben eine Funktion / Klasse / Modul genauer

---

## Docstrings

Beispiel:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

---

## Docstring-Format

PEP 257: https://www.python.org/dev/peps/pep-0257/

---

## Docstrig-Format

Docstring eines Moduls: Beschreibung, Liste der exportierten Funktionen mit einzeiligen Zusammenfassungen

Docstring einer Klasse: Beschreibung, Liste der Methoden

Docstring einer Funktion: Beschreibung, Liste der Parameter

---

## Pydocstyle

Linter zum validieren von Docstrings

---

## Docstrings anzeigen

```bash
python -m pydoc isprime
python -m pydoc isprime.isprime
```

---

## Python-Philosophie, PEP20

---

## import this

---

## one way to do it

# Python Versionen

---

## Python Versionen

Python 2 vs Python 3

---

## Strings und Bytes

Tiefgreifende Änderung in Python 3:

Strikte Trennung von Text (strings) und Binärdaten (bytes)

in Python 2: Datentypen `bytes`, `str` und `unicode`

---

## Print

Python 2:

```py
print "a",
```

Python 3:

```py
print("a", end="")
```

---

## Division

Python 2:

```py
10 / 3    # 3
```

---

## range

in Python 2: `range()` liefert Liste zurück, `xrange()` liefert speicherschonendes Objekt

in Python 3: `range()` liefert speicherschonendes Objekt

---

## input

in Python 2: `input()` wertet die Eingabe aus, `raw_input()` gibt String zurück

in Python 3: `input()` gibt String zurück

---

## \_\_future\_\_ imports

Verhalten von Python 3 in Python 2 übernehmen:

```py
from __future__ import print_function
from __future__ import unicode_literals
from __future__ import division
```

---

## Python-Future

Kompatibilitätsschicht zwischen Python 2 und Python 3

Unterstützung von Python 2 und Python 3 aus der gleichen Codebase

# Cheatsheet

ehmatthes.github.io/pcc#cheatsheets

???

fehlt: break, None, Kommentare

class: center, middle

# Standardparameter

Parameter können einen Standardwert haben. Dieser wird verwendet, wenn kein expliziter anderer Wert übergeben wird.

Beispiel:

```py
def shout(phrase, end="!"):
    print(phrase.upper() + end)

shout("hallo") # HALLO!
shout("hi", ".") # HI.
```

---

# Schlüsselwortparameter

---

# beliebige Anzahl von Parametern

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

## Python Installation

Python Installation beinhaltet:

- Python-"Runtime" zum ausführen von Python-Code
- IDLE: Einfache Entwicklungsumgebung
- interaktive Python-Konsole
- PIP: Paketmanager zum Installieren von Erweiterungen
- Python Dokumentation

# Die interaktive Python-Konsole

## Die interaktive Python-Konsole

Starten:

- Terminal-Befehl `python`
- aus dem Startmenü (z.B. _Python 3.7 (64-bit)_)

## Mathematische Operatoren

```py
2 * 2 + 3 / 2
```

## Einfache (primitive) Datentypen

Mit welchen Arten von Daten - außer Zahlen - arbeitet ein Computer noch?

## Einfache (primitive) Datentypen

- `int` (integer): Ganzzahl
- `float`: Kommazahl
- `str` (string): Text
- `bool` (boolean): Ja/Nein - Wert (Wahrheitswert)

## int

Beispiele: `3`, `10`

## float

Beispiele: `3.3`, `3.0`

## float

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräseniert werden, sie werden immer gerundet

z.B.: `1/3`

Der Computer kann auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentieren

Beispiel: `0.3 - 0.2 - 0.1`

## str

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

```py
"Hallo"
"Hallo" + "Andreas"
"Hallo" * 3
```

## str

Strings werden entweder mit einfachen oder doppelten Anführungszeichen begrenzt

```py
"Hallo"
'Hallo'
```

## str

mehrzeilige Strings: in dreifachen Anführungszeichen

```py
"""Hello,
my name is
Andreas"""
```

## str

Ungültige Operationen:

```py
"Hello" - "Tim"
"Hello" * "Tim"
"Hello" * 3.0
```

## f-strings

Werte in Strings einsetzen:

```py
f"A year has {365 * 24} hours."
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

```py
print(len(text)) # 14
```

## Strings - Escape-Sequenzen

```py
# Zeilenumbruch in 1 Zeile: \n
a = 'line 1\nline 2'

# einzelner Backslash: \\
b = 'C:\\docs'
```

## bool

Boolescher Wert: Ja/Nein - Wert

In Python: `True` oder `False`

Achtung: Groß- und Kleinschreibung ist wichtig!

## Variablen

Daten können in Python mit einem Namen versehen werden - man spricht von Variablen

```py
first_name = "John"
last_name = "Doe"
birth_year = 1978
```

## Variablen

```py
full_name = f"{first_name} {last_name}"
age = 2019 - birth_year
```

## Variablen

Variablennamen werden üblicherweise klein geschrieben und durch Unterstriche getrennt

Variablennamen dürfen nur aus Buchstaben, Ziffern und Unterstrichen bestehen

## Variablen

Überschreiben (neu Setzen) von Variablen:

```py
name = "John"
name = "Jane"
a = 3
a = a + 1
```

# Python Programme

## Python Programme

Zum schreiben ganzer Programme verwenden wir eine sogenannte _Entwicklungsumgebung_

## Installation der Entwicklungsumgebung VS Code

https://code.visualstudio.com/

## VS Code: Einrichtung für Python

- Python-Erweiterung für VS Code installieren

- Zuvor installiertes Python finden:
  - Strg + Shift + P
  - Suche nach: "Python: Interpreter auswählen"
  - Enter
  - warten...
  - Python 3.7 auswählen

# VS Code

## VS Code

https://code.visualstudio.com

- Open-Source-Entwicklungsumgebung
- Unabhängig vom eigentlichen Visual Studio

## VS Code: Ordner öffnen

ganzen Ordner öffnen mit _File_ - _Open Folder_

## VS Code: speichern

Nicht gespeicherte Dateien sind durch einen Kreis statt des "X" im Tab erkennbar

Speichern mit _Strg_ + _S_

oder: _File_ - _Auto Save_

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

- Auto Save: _aktivieren_
- Accept Suggestion on Commit Character (Autovervollständigung ohne _Enter_): _deaktivieren_
- Tab Size: _2_

Weitere Möglichkeiten:

- Format on Save
- Format on Paste
- EOL
- Workbench: Color Theme

## VS Code - Kurzbefehle

- _Strg_ + _F_: Suchen in Datei
- _Alt_ + _Shift_ + _F_: Formatieren der Datei
- _Ctrl_ + _#_: aus- / einkommentieren
- _F12_: Zur Definition springen
- _Shift_ + _F12_: Definition anzeigen
- _F2_: Umbenennen von Variablen
- _Alt_ + Mausklick: Mehrere Textcursor zum gleichzeitigen Schreiben setzen

# Unser erstes Python-Programm

## Unser erstes Python-Programm

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

## Eingabe und Ausgabe

Ausgabe der Begrüßung

```py
print("Nice to meet you," + name)
```

## Programme ausführen

In der Kommandozeile via `python greeting.py`

In VS Code via Taste _F5_

## Typen umwandeln

Die Funktion `input` liefert immer Text (einen string) zurück.

Um den string in einen int zu verwandeln:

```py
birth_year_string = input("when were you born?")
birth_year_int = int(birth_year_string)
```

Analog für andere Datantypen: `str()`, `float()`, `bool()`

## Übung: Alter anhand Geburtsjahr

Schreibe ein Programm namens `age.py`, das den Benutzer nach seinem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2018 wird.

## Übung: Länge des Namens

Schreibe ein Programm, das den Benutzer nach seinem Namen fragt. Es soll angeben, aus wie vielen Zeichen der Name besteht.

Verwende dazu die Funktion `len(...)`, um die Länge eines Strings zu ermitteln

## Kommentare

Kommentare dienen Entwicklern, um den Code zu beschreiben und zu erklären. Sie werden von Python ignoriert.

Eine Kommentarzeile beginnt mit einem `#`-Zeichen.

```py
# determine the length of the name
name_length = len(name)
```

# Kontrollstrukturen

## Kontrollstrukturen

Mit Kontrollstrukturen können wir bestimmten Code z.B. wiederholt ausführen lassen, oder Code nur in bestimmten Situationen ausführen lassen

## Kontrollstrukturen

Die zwei essenziellen Kontrollstrukturen in jeder Programmiersprache:

- if/else-Abfragen, um unter bestimmten Bedingungen die eine oder die andere Aktion zu setzen
- Schleifen, um unter bestimmten Bedingungen eine Aktion zu wiederholen

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

## if / else

wenn, dann - sonst

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

## if / elif / else

Beispiel: Zahlenraten

## Codeblöcke

Codeblock = Zusammengehörige Codezeilen, die z.B. als Resultat einer if-Abfrage ausgeführt werden.

In Python endet die Zeile vor einem Codeblock mit einem `:`, der Codeblock ist eingerückt (meist mit 4 Leerzeichen).

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

## while-Schleife

Beispiele:

- Zahlenraten mit mehreren Versuchen
- Schleife, die die Zahlen 1 bis 10 ausgibt
- Schleife, die die Zahlen der 7er-Reihe des Einmaleins ausgibt
- Zahlenraten mit echten Zufallszahlen
- Rechentrainer mit Zufallsaufgaben

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

# Zählschleifen

## Zählschleifen

Folgendermaßen können wir in Python von 0 bis 9 zählen:

```py
for i in range(10):
    print(i)
```

Der Funktionsaufruf `range(n)` gibt die ersten `n` natürlichen Zahlen (beginnend bei 0) zurück

## Zählschleifen

Übung: Ausgabe einer Multiplikationstafel

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
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

# Listen

## Listen

Listen sind ein Datentyp, der eine Folge von anderen Objekten repräsentiert

## Erstellen von Listen

Mit eckigen Klammern:

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## Auslesen von Listenelementen

Mittels Listenindex (bei 0 beginnend)

```py
users = ["Alice", "Bob", "Charlie"]

print(users[0])
print(users[2])
print(users[-1])

print(len(users))
```

## Operationen mit Listen

- Überschreiben: `users[0] = "Andrew"`
- Anhängen: `users.append("Dan")`
- Letztes Element entfernen: `users.pop()`
- Ein Element anhand des Index entfernen: `users.pop(2)`
- Länge: `len(users)`
- Zusammenhängen: `primes + users`
- Abfragen, ob Element in Liste: `if "Andrew" in users:`

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

# Objekte abändern

## Objekte abändern

In Python können Listen verändert werden - z.B. durch das anhängen eines neuen Eintrags

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

Eine Zuweisung (`b = ...`) versieht ein existierendes Objekt mit einem neuen (zusätzlichen) Namen.

Im Hintergrund steht nach wie vor nur ein einzelnes Objekt.

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

## Zählschleifen

Wir erinnern uns zurück: Für das Zählen verwendeten wir die Funktion `range`

Der Aufruf `range(5)` erstellt ein Objekt, das sich wie die Liste `[0, 1, 2, 3, 4]` verhält

Beispiel zur Verwendung:

```py
for i in range(5):
    print(i)
```

# Builtins, Module

## Builtins, Module

- Builtins: Funktionen und Objekte, die oft verwendet werden und immer verfügbar sind
- Module: Sammlungen von zusätzlichen Objekten, die importiert werden können

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

## Module

Module beinhalten zusätzliche Objekte, die importiert werden können

z.B.:

```py
from math import floor

# abrunden
print(floor(3.6))
```

## Module

interessante Module:

- `random`
- `math`
- `datetime`
- `os` (Betriebssystem, Dateisystem)
- `sys` (Python Umgebung)
- `pprint` (formatierte Ausgabe)

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

# Übungsbeispiele

## Übungsbeispiele

- Todoliste
- Lottozahlengenerator
- Hangman

## Todoliste

Interaktive Eingabe, die den Benutzer eine Liste von Todos erstellen lässt und diese am Ende ausgibt

Python Themen: list, while, for, input

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

## Aufgabe: Funktion lottery()

Schreibe eine Funktion namens `lottery`, die eine Liste von Lotteriezahlen erzeugt

`lottery()` → `[2, 35, 19, 27, 10]`

## Aufgabe: isprime()

Schreibe eine Funktion namens `isprime`, die überprüft, ob eine Zahl eine Primzahl ist

`isprime(59)` → `True`

## Aufgabe: ask_yes_no()

Schreibe eine Funktion namens `ask_yes_no`, die dem Benutzer eine Ja/Nein-Frage stellt und entweder `True` oder `False` zurückliefert

# Textdateien schreiben

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

# Übungsaufgaben

## Übungsaufgaben

- Programm, das eine Kreditkartennummer / ISBN / IBAN validiert
- Tic-Tac-Toe - Spiel mit textbasierter grafischer Ausgabe
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

(erste Ziffer + 2 _ zweite Ziffer + 3 _ dritte Ziffer ... + 9 \* neunte Ziffer) modulo 11

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

# VS Code - Setup für Python

## VS Code - Setup für Python

File - Settings - Preferences

Empfehlungen:

- `python.linting.pylintEnabled`: `true`
- `python.linting.flake8Enabled`: für Formatierungsüberprüfung auf `true`
- `python.formatting.provider`: `black`

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

## Docstrings

Beschreiben eine Funktion / Klasse / Modul genauer

## Docstrings

Beispiel:

```py
def fib(n):
    """Compute the n-th fibonacci number.

    n must be a nonnegative integer
    """
    ...
```

## Docstrings anzeigen

```bash
python -m pydoc math
python -m pydoc math.floor
```

## Docstring-Format

PEP 257: https://www.python.org/dev/peps/pep-0257/

## Docstrig-Format

Docstring eines Moduls: Beschreibung, Liste der exportierten Funktionen mit einzeiligen Zusammenfassungen

Docstring einer Klasse: Beschreibung, Liste der Methoden

Docstring einer Funktion: Beschreibung, Liste der Parameter

## Pydocstyle

Linter zum validieren von Docstrings

## Python-Philosophie, Zen of Python

Auszüge aus dem _Zen of Python_ (anzeigbar via `import this`):

- _Explicit is better than implicit._
- _Readability counts._
- _Special cases aren't special enough to break the rules._
- _There should be one-- and preferably only one --obvious way to do it._

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

# Cheatsheet

https://ehmatthes.github.io/pcc#cheatsheets

(fehlende Inhalte: break, None, Kommentare)


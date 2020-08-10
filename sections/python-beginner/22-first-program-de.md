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

in der Kommandozeile via `python greeting.py`

in VS Code (Python-Erweiterung muss installiert sein):

grünes Play-Symbol zur Editoransicht

oder

_Debug_ - _Start Without Debugging (Ctrl + F5)_

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

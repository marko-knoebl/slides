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

Schreibe ein Programm namens `age.py`, das den Benutzer nach seinem Geburtsjahr fragt und dann angibt, wie alt diese Person im Jahr 2019 wird.

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

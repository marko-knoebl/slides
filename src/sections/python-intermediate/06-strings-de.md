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

- Ausrichtung der Zeilennummern basierend auf der Länge der längsten Zeile
- Zeilennummern nur alle 5 Zeilen
- Zeilennummern alle 5 Zeilen, wenn die Zeile Text enthält - ansonsten in der nächsten Zeile

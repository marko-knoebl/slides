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

- _ASCII_: Codiert die ersten 128 Unicodezeichen, u.a. _A_, _!_, _\$_, _Leerzeichen_, _Zeilenumbruch_
- _Latin1_: Codiert die ersten 256 Unicodezeichen, u.a. _ä_, _á_, _ß_, _§_
- _UTF-8_, _UTF-16_, _UTF-32_: Codieren alle Unicodezeichen

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

| Zeichen | Unicode | ASCII | Latin-1 |    UTF-8 |       UTF-16 |
| ------- | ------: | ----: | ------: | -------: | -----------: |
| K       |  U+004B |    4B |      4B |       4B |     FFFE4B00 |
| ä       |  U+00E4 |       |      E4 |     C3A4 |     FFFEE400 |
| €       |  U+20AC |       |         |   E282AC |     FFFEAC20 |
| 🙂      | U+1F642 |       |         | F09F9982 | FFFE3DD842DE |

## UTF-8

UTF-8 hat sich insbesondere im Web zum Standardencoding entwickelt

Die ersten 128 Unicode-Zeichen benötigen nur 8 Bit (wie bei ASCII / Latin1)

Alle anderen Zeichen benötigen jeweils 16, 24 oder 32 Bit

## Zeilenumbrüche

Zeilenumbrüche können durch die Zeichen `LF` (line feed, `U+000A`) bzw `CR` (carriage return, `U+000D`) codiert werden

- `LF`: Standard unter Linux, MacOS
- `CRLF`: Standard unter Windows, in Netzwerkprotokollen wie HTTP

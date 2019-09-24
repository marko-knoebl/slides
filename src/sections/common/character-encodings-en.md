# Character encodings

## Unicode characters

_Unicode_: catalog of over 100,000 international characters, each with a unique identifying name and number (usually written in hexadecimal)

examples:

- _K_: U+004B (_Latin capital letter K_)
- _?_: U+003F (_Question mark_)
- _ä_: U+00E4 (_Latin small letter a with a diaeresis_)
- _€_: U+20AC (_Euro sign_)
- 🙂: U+1F642 (_Slightly smiling face_)

[tables of all Unicode characters](https://en.wikibooks.org/wiki/Unicode/Character_reference)

## Character encodings

_Character encoding_ = mapping of characters to bit sequences

- _ASCII_: encodes the first 128 Unicode characters, can represent characters like _A_, _!_, _\$_, _space_, _line break_
- _Latin1_: encodes the first 256 Unicode characters, can represent ASCII characters and characters like _ä_, _á_, _ß_, _§_
- _UTF-8_, _UTF-16_, _UTF-32_: encode all Unicode characters

A character encoding is necessary in order to write text to disk or transfer it over the network

## Character encodings

Examples in ASCII / Latin1 / UTF-8:

- `!` ↔ `00100001`
- `A` ↔ `01000001`
- `a` ↔ `01100001`

Examples in Latin1:

- `Ä` ↔ `11000100`

Examples in UTF-8:

- `Ä` ↔ `11000011 10100100`
- `🙂` ↔ `11110000 10011111 10011001 10000010`

## UTF-8

In many areas (in particular on the web) _UTF-8_ has become the standard text encoding

In UTF-8 the first 128 Unicode characters can be encoded in just 8 bit

All other characters need either 16, 24 or 32 bit

## UTF-32

UTF-32 encodes the Unicode code points directly

Depending on the area of application the byte order may differ (big endian or little endian)

example:

🙂 (U+1F642) ↔ `00 01 F6 42` (big endian) or `42 F6 01 00` (little endian)

## Line breaks

Line breaks can be represented by the characters `LF` (line feed, `U+000A`) and / or `CR` (carriage return, `U+000D`)

- `LF`: Standard on Linux, MacOS
- `CRLF`: Standard on Windows, in network protocols like HTTP

In string literals `LF` is often represented by `\n` and `CR` is represented by `\r`

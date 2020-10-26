# Reguläre Ausdrücke

## Reguläre Ausdrücke

Mini-Sprache, um ein Suchmuster für Text zu definieren

Beispiele einfacher Suchmuster:

- eine .com Domain: `https?://.+?\.com`
- ein HTML Heading: `<h1>.+?</h1>`
- eine Uhrzeit: `\d?\d:\d\d`

## Ausprobieren

Online: https://regexr.com/

In VS Code: Ctrl+F und Klick auf den Button _.\*_

## Sonderzeichen und Escapes

Die folgenden Zeichen haben besondere Bedeutungen:

- `\`
- `^`
- `$`
- `.`
- `|`
- `?`
- `*`
- `+`
- `()`
- `[]`
- `{}`

## Sonderzeichen und Escapes

Die besondere Bedeutung umgehen wir durch Voranstellen eines Backslashes:

- `13\$`
- `9\.99€`
- `1\+1=2`

## Zeichenkategorien

- `.` : jedes Zeichen außer ein Zeilenumbruch
- `\s` : Whitespace
- `\d` : Ziffer
- `\w` : Ziffer, Buchstabe oder Unterstrich

Übung: finde alle Ziffern in einem Dokument

## Wiederholungen

- `a*` : Buchstabe _a_ 0 Mal oder öfter wiederholt (findet den _längsten_ String)
- `a*?` : Buchstabe _a_ 0 Mal oder öfter wiederholt (finden den _kürzesten_ String)
- `a+` : Buchstabe _a_ 1 Mal oder öfter wiederholt (findet den _längsten_ String)
- `a+?` : Buchstabe _a_ 1 Mal oder öfter wiederholt (findet den _kürzesten_ String)

Übungen:

- finde alle Zahlen, z.B. _12_ oder _0.99_
- finde allen Text innerhalb von Anführungszeichen in einem Dokument
- finde alle "Wörter", die mit `.jpeg` oder `.jpg` enden

## Gruppen

Ausdrücke können via `(...)` gruppiert werden

Beispiele:

- `(ab)+` findet Wiederholungen der Zeichenfolge _ab_
- `<(-=)+->` findet Muster der folgenden Art: `<-=-=-=-=->`

## Alternativen

`...|...|...` : Matcht eine der aufgelisteten Alternativen

Beispiel zum finden eines Bildes: `\.(jpe?g|png|gif)`

Übungen:

- finde URLs, die mit `http://` oder `https://` beginnen und mit `.com` oder `.org` enden

## Auslesen von Gruppen

Gruppen können verwendet werden, um Informationen auszulesen

Beispiel: `(\d?\d):(\d\d)` liest zwei Werte aus

## Anfang und Ende

- `\A` : Anfang eines Strings
- `\Z` : Ende eines Strings
- `^` : Anfang einer Zeile
- `$` : Ende einer Zeile

## Zeichenklassen

- `[a-z]` : beliebiger kleiner ASCII-Buchstabe
- `[a-zA-Z]` : beliebiger ASCII-Buchstabe
- `[,;.]` : gleichwertig zu `(,|;|.)`

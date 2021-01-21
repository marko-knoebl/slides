# Datentypen und Datenformate

## Themen

- Datentypen
  - Zahlen
  - Boolesche Werte
  - Text
  - ...
- Daten- / Datei-Formate
  - JSON
  - CSV
  - XML
  - ...

# Datentypen

## Datentypen

Datentypen und Datenstrukturen, mit denen in der Informatik oft gearbeitet wird:

- Zahlen (Kommazahlen und Ganzzahlen)
- Ja/Nein - Werte
- Text
- Binärdaten (Folgen von 0 und 1, die beliebige Informationen repräsentieren können - z.B. ein Bild, ein Video, Text, ...)
- Zeit- / Datumsangaben
- Aufreihungen anderer Daten (z.B. eine Reihe von Zahlen)
- Assoziative Arrays (Sammlungen benannter Einträge)
- fehlende Daten - oft mit _null_ repräsentiert

## Beispiele für Online-Datenquellen

- OpenWeatherMap: [Beispieldaten (nicht live)](https://samples.openweathermap.org/data/2.5/weather?q=Berlin&appid=b6907d289e10d714a6e88b30761fae22)
- DataHub: [Core Data](https://datahub.io/core)

# Zahlen

## Zahlen

wichtige Arten von Zahlen in der Informatik:

- _integer_ (Ganzzahlen)
- _floating-point number_ oder _float_ (Kommazahlen im Binärsystem)
- _decimal_ (Kommazahlen im Dezimalsystem)

## Zahlen

In Programmiersprachen werden hauptsächlich _integer_ und _floats_ verwendet

In Datenbanken oder CSV-Dateien kommt auch der Typ _decimal_ vor

## Zahlen

Achtung Rundungsfehler: Einige Zahlen können nicht genau als Kommazahlen repräsentiert werden, sie werden immer gerundet

z.B.: `1/3`

Im Binärsystem können auch Zahlen wie `0.1` oder `0.2` nicht genau repräsentiert werden - hier gibt es ganz kleine Abweichungen

Beispiel: `0.3 - 0.2` ergibt in Programmiersprachen nicht exakt `0.1`, sondern meist `0.09999999999999998`

## Zahlen

Typen wie _integer_ oder _float_ haben üblicherweise eine vorgegebene Genauigkeit

Beispiele:

- ein _integer_ in _SQL_ kann typischerweise die Werte _-2,147,483,648_ bis _2,147,483,647_ annehmen
- eine Kommazahl im Binärsystem hat oft eine Genauigkeit von etwa 15 Dezimalstellen (_64-Bit_ Genauigkeit)

## Zahlen

Speicherung als Zahl oder als Text?

Wie speichert man Kreditkartennummern, Postleitzahlen, Telefonnummern, ...?

## Zahlen

Kreditkartennummern, Postleitzahlen, Telefonnummern, etc sollten als Text gespeichert werden

Gründe:

- solche Daten können mit Nullen beginnen, die bei einer Zahl nicht erfasst würden
- solche Daten können Sonderzeichen (z.B. `/`, Leerzeichen, ...) enthalten

Grundregel: wenn mit einer Zahl nicht sinnvoll gerechet werden kann, sollte sie als String gespeichert werden.

# Boolesche Werte

## Boolesche Werte

Boolescher Wert = Ja/Nein bzw wahr/falsch - Wert

Haben entweder einen eigenen Datentyp oder werden durch die Werte `1` und `0` repräsentiert

Werden üblicherweise durch die Ausdrücke `true` und `false` (oder `True` und `False`) bezeichnet

# Strings

## Strings

Ein _String_ - auch _Zeichenkette_ genannt - repräsentiert Text

Heutzutage können in Strings _meist_ alle Unicode-Zeichen verwendet werden; in manchen Fällen ist die Zeichenauswahl allerdings eingeschränkt - z.B. auf _ASCII_

## Strings

Strings werden üblicherweise mit einfachen oder doppelten Anführungszeichen begrenzt

Gültiger String in Python, JavaScript, JSON:

```txt
"Hello, world!"
```

Gültiger String in Python, JavaScript, SQL:

```txt
'Hello, world!'
```

## Strings - Escape-Sequenzen

Problem: Wie schreiben wir Zeichen wie z.B. `"` innerhalb eines Strings?

Ungültig:

```py
"He said: "hi!""
```

## Strings - Escape-Sequenzen

Lösungen in Python, JavaScript, JSON:

```JSON
"He said: \"hi!\""
```

Die Zeichenfolge `\"` wird wie ein einzelnes Anführungszeichen interpretiert

Lösung in CSV (und ähnlich in SQL):

```
"He said: ""hi!"""
```

Die Zeichenfolge `""` wird wie ein einzelnes gewöhnliches Anführungszeichen interpretiert

## Strings - Escape-Sequenzen

Weitere Escape-Sequenzen in Programmiersprachen:

Zeilenumbruch in 1 Zeile (Linux, Mac):

```json
"line 1\nline 2"
```

Zeilenumbruch in 1 Zeile (Windows):

```json
"line 1\r\nline 2"
```

Einzelner Backslash:

```json
"C:\\programs\\firefox"
```

# null

## null

Mit `null` wird ausgedrückt, dass ein bestimmter Wert fehlt oder unbekannt ist

# JSON

## JSON

JSON = _JavaScript Object Notation_: Datenformat, das insbesondere in der Webentwicklung wichtig ist.

## Datentypen

- Number
- String
- Boolean
- Null
- Array
- Object

## Null

Der Ausdruck `null` symbolisiert, dass ein Wert fehlt oder unbekannt ist

```json
null
```

## String

Strings werden in JSON mit doppelten Anführungszeichen begrenzt

(In JavaScript wären als Alternative auch einfache Anführungszeichen erlaubt)

## Array

Ein _Array_ beinhaltet eine Abfolge von anderen Objekten

```json
["Anne", "Bob", "Chris"]
```

```json
[2, 3, 5, 7, 11]
```

## Objekt

Ein _Objekt_ beinhaltet benannte Einträge

```json
{
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

(In JavaScript könnten die Namen der Einträge auch ohne Anführungszeichen stehen, z.B. `firstName`)

# CSV

## CSV

CSV (_comma-separated values_) ist ein Textdateiformat, das tabellarische Daten beinhaltet

## Beispiel

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## Standardisierung

Es gibt keinen definitiven Standard

Varianten des CSV Formats können sich durch die folgenden Aspekte unterscheiden:

- Trennzeichen: kann z.B. ein Komma, Semikolon oder Tab sein
- Vorhandensein einer Tabellenkopfzeile
- Regeln zum Setzen und _Escapen_ von Anführungszeichen

## Standardisierung

Das Format ist älter als die Standards - in der Praxis gibt es viele Variationen

- RFC 4180: <https://tools.ietf.org/html/rfc4180>
- W3C: <https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/>

## Standardisierung

Regeln aus _RFC 4180_ und dem _W3C_-Standard

- Werte werden durch Kommas getrennt
- Erste Zeile _kann_ (RFC) / _sollte_ (W3C) die Spaltennamen beinhalten
- Zeilen _müssen_ (RFC) / _sollten_ (W3C) durch die Zeichenfolge _CRLF_ (carriage return & line feed) getrennt sein
- Felder können von doppelten Anführungszeichen umfasst werden - dies ist notwendig, falls ein Feld ein Komma, ein doppeltes Anführungzeichen oder einen Zeilenumbruch enthält
- Falls ein doppeltes Anführungszeichen (`"`) innerhalb eines Felds vorkommt, muss es verdoppelt werden (`""`)

## TSV

In Anlehnung an CSV: _tab-separated values_

Vorteile: eventuell besser zu lesen, Kommas müssen nicht escaped werden

Nachteile: nicht Standardisiert, weniger verbreitet

```tsv
ISO	Country	Capital	Languages
AD	Andorra	Andorra la Vella	ES,FR
AE	United Arab Emirates	Abu Dhabi	AE,fa,en,hi,ur
AF	Afghanistan	Kabul	AF,tk
```

## Übung

Übung: selbst in VS Code einfache CSV-Datei anlegen und in Tabellenansicht begutachten (Icon _open in preview_ rechts oben in der Ansicht)

# XML

## XML

XML = Extensible Markup Language

Sprache, die viele Ähnlichkeiten zu HTML hat

War lange Zeit eine sehr wichtige Standardsprache für Datenaustausch; wird zunehmend durch JSON ersetzt

## XML

Beispiel

```xml
<person>
  <name>Adam</name>
  <age unit="years">40</age>
</person>
```

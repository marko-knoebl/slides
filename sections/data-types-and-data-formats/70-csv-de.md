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

- RFC 4180: https://tools.ietf.org/html/rfc4180
- W3C: https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/

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

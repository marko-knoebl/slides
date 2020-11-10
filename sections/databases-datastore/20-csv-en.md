# CSV

## CSV

CSV (_comma-separated values_) is a text file format which can hold tabular data

## Example

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## Standardization

There is no official definitive standard

CSV formats can vary based on:

- separation character: could be a comma, semicolon, tab
- presence of table header
- rules for quoting and escaping values

## Standardization

The format is older than the standards - in practice the format varies widely

- RFC 4180: https://tools.ietf.org/html/rfc4180
- W3C: https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/
  - includes _Best Practice CSV_

## Standardization

- First line _can_ (RFC) / _should_ (W3C) be a comma-separated list of column names
- Lines _must_ (RFC) / _should_ (W3C) be separated by CRLF (carriage return & line feed)
- Fields may be enclosed in double quotes; this is necessary if a field contains a comma, a double quote or a line break
- If a double quote (`"`) appears within a field, it must be escaped by doubling it (`""`)

## TSV

Derived from CSV: _tab-separated values_

Advantages: easier to read, commas don't have to be escaped

Disadvantages: not standardized, not as popular

```tsv
ISO	Country	Capital	Languages
AD	Andorra	Andorra la Vella	ES,FR
AE	United Arab Emirates	Abu Dhabi	AE,fa,en,hi,ur
AF	Afghanistan	Kabul	AF,tk
```

## Exercise

Create a simple CSV file in VS Code and view it in tabular view (icon _open in preview_ in the top right corner)

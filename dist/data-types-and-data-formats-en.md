# Data types and data formats

## Topics

- data types
  - numbers
  - booleans
  - text
  - ...
- data (file) formats
  - JSON
  - CSV
  - XML
  - ...

# Data types

## Data types

Data types and data structures that are important in IT:

- numbers (integers and non-integers)
- yes/no values
- text
- binary data (sequences of 0 and 1 that can represent arbitrary information - e.g. images, video, text, ...)
- time and date
- sequences of other data (e.g. a sequence of numbers)
- associative arrays (key-value mappings)
- missing data - often represented as _null_

## Example online data sources

- DataHub: [Core Data](https://datahub.io/core)
- OpenWeatherMap: [example data (not live)](https://samples.openweathermap.org/data/2.5/weather?q=Berlin&appid=b6907d289e10d714a6e88b30761fae22)

# Numbers

## Numbers

types of numbers:

- _integer_
- _floating-point number_ or _float_ (binary system)
- _decimal_

## Numbers

Programming languages commonly use _integers_ and _floats_

Databases and some data formats additionally use _decimals_

## Numbers

Be cautious of rounding errors: Some numbers cannot be represented as floating point numbers - the will always be rounded

e.g.: `1/3`

A computer is also unable to represent numbers like `0.1` or `0.2` exactly

Example: `0.3 - 0.2` will often not evaluate to `0.1`, but `0.09999999999999998`

## Numbers

Types like _integer_ or _float_ usually have a specific accuracy

examples:

- an _integer_ in _SQL_ can typically represent the values _-2,147,483,648_ to _2,147,483,647_
- a binary floating point number often has an accuracy of about 15 decimal places (_64-Bit numbers_)

## Numbers

Saving as a number or as text?

How should we store credit card numbers, ZIP codes, telephone numbers, ...

## Numbers

Credit card numbers, ZIP codes, telephone numbers should be stored as text

reasons:

- these numbers can start with zeros
- these numbers can include special characters (e.g. `/`, spaces)

Principle: if a number cannot be sensibly used for coputations it should be stored as text

# Booleans

## Booleans

Boolean value = value representing yes/no or true/false

Boolean values can be represented via a separate data type or via the values `1` and `0`

Are usually named `true` and `false`

# Strings

## Strings

A _string_ represents text

Today strings can _mostly_ include all Unicode characters; in some cases the character set will be limited, e.g. to _ASCII_

## Strings

Strings are usually delimited by single or double quotes

Valid string literal in Python, JavaScript, JSON:

```txt
"Hello, world!"
```

String in Python, JavaScript, SQL:

```txt
'Hello, world!'
```

## Strings - escape sequences

Problem: how do we write characters like `"` inside of a string?

invalid:

```py
"He said: "hi!""
```

## Strings - escape sequences

Solution in Python, JavaScript, JSON:

```JSON
"He said: \"hi!\""
```

The character sequence `\"` is treated like a single quotation mark

Solution in CSV (and similarly in SQL):

```
"He said: ""hi!"""
```

The character sequence `""` is treated like a single quotation mark

## Strings - escape sequences

More escape sequences in programming languages:

Including a line break in a line (Linux, Mac):

```json
"line 1\nline 2"
```

Including a line break in a line (Windows):

```json
"line 1\r\nline 2"
```

Including a single backslash:

```json
"C:\\programs\\firefox"
```

# null

## null

The special value `null` commonly represents missing / unknown data

# Data formats

## Data formats

data (file) formats:

- JSON (JavaScript Object Notation)
- CSV (comma-separated values, text based tabular documents)
- XML (Extensible Markup Language, similar to HTML)
- xls(x), ods
- HDF5

# JSON

## JSON

JSON = _JavaScript Object Notation_: File format which is especially relevant in web development.

## Data types

- Number
- String
- Boolean
- Null
- Array
- Object

## Null

The expression `null` symbolizes the absence of a value

```json
null
```

## String

Strings are delimited by double quotes

(In JavaScript single quotes would be allowed as well)

## Array

An _array_ contains a sequence of other objects

```json
["Anne", "Bob", "Chris"]
```

```json
[2, 3, 5, 7, 11]
```

## Object

An _object_ contains named entries

```json
{
  "firstName": "Thomas",
  "lastName": "Edison",
  "birthYear": 1847,
  "living": false
}
```

(In JavaScript the names of entries can be stated without quotes, e.g. `firstName`)

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

- RFC 4180: <https://tools.ietf.org/html/rfc4180>
- W3C: <https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/>
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

# XML

## XML

XML = Extensible Markup Language

Language that is similar to HTML

Was a default language for data exchange; is being replaced more and more by JSON

## XML

example:

```xml
<person>
  <name>Adam</name>
  <age unit="years">40</age>
</person>
```

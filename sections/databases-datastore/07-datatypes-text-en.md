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

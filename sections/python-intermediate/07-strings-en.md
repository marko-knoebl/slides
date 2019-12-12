# Strings

## Strings

In Python 3 strings are sequences of Unicode characters

## String literals

Examples:

```py
a = "test"
b = 'test'
```

## Multi-line string literals

```py
a = """this
is a multi-line
string literal.
"""
```

## Escape sequences

Some characters may be entered via so-called _escape sequences_:

```py
a = "He said:\n\"Hi!\""
```

## Escape sequences

- `\'` → `'`
- `\"` → `"`
- `\\` → `\`
- `\n` → Line Feed (line separator on Unix)
- `\r\n` → Carriage Return + Line Feed (line separator on Windows)
- `\t` → Tab
- `\xHH` or `\uHHHH` or `\UHHHHHHHH` → Unicode-Codepoint (hexadecimal)

## Raw Strings

If we don't need to use any escape sequences in a string:

```py
path = r"C:\documents\foo\news.txt"
```

This can be useful when writing Windows paths and regular expressions

## String methods

- `.lower()`
- `.upper()`

## String methods

- `.startswith(...)`
- `.endswith(".txt")`

## String methods

- `.center(10)`
- `.ljust(10)`
- `.rjust(10)`

## String methods

- `.strip()`
- `.split(' ')`
- `.splitlines()`
- `.join()`

## Exercise: formatting Othello

sources:

- http://www.gutenberg.org/cache/epub/2267/pg2267.txt
- http://digital.library.upenn.edu/webbin/gutbook/lookup?num=2267

## Exercise: formatting Othello

input:

```txt
  Rodorigo. Neuer tell me, I take it much vnkindly
That thou (Iago) who hast had my purse,
As if y strings were thine, should'st know of this
```

target:

```txt
Rodorigo. Neuer tell me, I take it much vnkindly           1
That thou (Iago) who hast had my purse,                    2
As if y strings were thine, should'st know of this         3
```

## Exercise: formatting Othello

tasks:

- remove leading whitespace of each line
- add a line number to the end of each line and place the line number right-aligned at character 70
- (place line numbers only in every 5th line)
- (instead of placing line numbers at character 70, use the longest line as a reference)

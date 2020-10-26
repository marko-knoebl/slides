# Regular expressions in Python

## Regular expressions

Regular expressions are used to find a substring of a specific pattern inside a string

in Python regular expressions can be handled via the `re` Package, in particular:

- `re.search`
- `re.finditer`

## Regular expressions

example:

```py
import re

match = re.search(r"[a-z][A-Z]", "abCdE")

if match:
    print("match")
    print(match[0]) # bC
else:
    print("no match")
```

## Finding multiple occurrences

example:

```py
import re

match_iter = re.finditer(r"https?://.+?\.com", website_content)

for match in match_iter:
    print(match[0])
```

## Finding multiple occurrences

Exercise: find all URLs in a HTML document on the drive

For an example, save the page https://news.ycombinator.com to disk

## Finding an expression and sub expressions

```py
times = re.finditer(
    r'(\d?\d):(\d\d)',
    'The course times are 9:30 - 16:30'
)

for time in times:
    print(f"hour: {time[1]}")
    print(f"minute: {time[2]}")
```

## Compiling regular expressions

Optimizing performance if expressions are reused:

```py
my_re = "..."

re.search(my_re, ...)
re.finditer(my_re, ...)
```

becomes

```py
my_re = "..."
my_re_obj = re.compile(my_re)

my_re_obj.search(...)
my_re_obj.finditer(...)
```

## Exercises

- find function definitions in a Python file
- find and parse monetary amounts in a text
- find and parse equations in text

## Resources

- http://automatetheboringstuff.com/chapter7/

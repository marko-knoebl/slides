# Reading and writing text files

## Reading and writing text files

Many file formats are nothing but sequences of characters - e.g. the formats `.txt`, `.html`, `.csv` or `.py`.

These can be represented as strings in Python and can be easily read and written.

## Writing a text file

```py
# open for writing (w = write)
# open as a utf-8 file
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()
```

## Reading a text file

```py
# default mode = open for reading
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

## Encoding

Recommendation: _always_ use utf-8 as the encoding for text files (best support for special characters)

## Exercise

- program that gets a list of todos from a user and saves them to a file

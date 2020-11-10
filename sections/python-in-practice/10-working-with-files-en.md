# Working with files

## Working with files

file = a sequence of bytes on a storage device

Many file formats are a sequence of text characters - e.g. the formats _.txt_, _.html_, _.csv_ or _.py_.

The content of text files can be represented as strings, other file contents can be represented as byte sequences.

## Writing a text file

```py
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world\n")
file.write("end\n")
file.close()
```

The file is opened for _writing_ (_w_).

The character encoding will be _UTF-8_.

## Reading a text file

```py
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
```

Standard mode: _reading_ (_r_)

## File modes

```py
# mode: text, append
open("todos.txt", mode="ta")
```

## File modes

- `t`: text mode (default)
- `b`: binary

<!-- list-separator -->

- `r`: reading (default)
- `w`: (over)writing
- `a`: appending

## Binary files

```py
wasm_content = bytes([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 127,
    3, 2, 1, 0, 7, 10, 1, 6, 97, 110, 115, 119, 101, 114,
    0, 0, 10, 6, 1, 4, 0, 65, 42, 11
])

file = open("answer.wasm", mode="wb")
file.write(wasm_content)
file.close()
```

## Open and the with statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

The file will be closed automatically when the program leaves the indented block.

## character encoding

Text files may be encoded in various ways:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Recommendation: Use UTF-8 (best support for special characters)

## character encoding

The default character encoding for text files depends on the operating system:

```py
import locale
locale.getpreferredencoding()
```

## File-like objects

Objects that support using `.read()` or `.write()` etc:

- files (e.g. via `open()`)
- `sys.stdout`, `sys.stdin`
  - example: `sys.stdin.readline()`
- Network replies, e.g. via `urllib.request.urlopen('https://google.com')`

## File-like objects

Read line by line (small memory consumption):

```py
with open("myfile.txt", encoding="utf-8") as file:
    for line in file:
        print(line)
```

## File-like objects

Methods / Attributes:

- `.close()`
- `.mode`
- `.read()` (read the entire file)
- `.read(10)` (read the next 10 bytes)
- `.readline()` (read the next line)

## Exercise

Create a program that asks the user for entries on a shopping list and stores them in a text file

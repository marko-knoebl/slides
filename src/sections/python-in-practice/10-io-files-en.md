# Working with files

## Working with files

file = a sequence of bytes on a storage device

## The function "open()"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

Open creates an instance of a subclass of IOBase

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

## Reading and writing

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

## Reading and writing

```py
t = open("todos.txt", mode="a", encoding="utf-8")
t.write("Learn Python")
t.close()
```

```py
coins = open("coins.b", mode="ba")
coins.write(bytes([0b01001110, 0b11100100]))
coins.close()
```

## Open and the with statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

In this example using the with statement relieves us from explicitly closing the file object. The file will be automatically closed when the program leaves the indented block.

## character encoding

Text files may be encoded in various ways:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Recommendation: _always_ use utf-8 as the encoding for text files (best support for special characters)

## character encoding

The default character encoding for text files depends on the operating system:

```py
import locale
locale.getpreferredencoding()
```

## character encoding

Explicitly stating the character encoding:

```py
open("file.txt", encoding="utf-8")
```

## File-like objects

Objects that support using `.read()` or `.write()` etc:

- files (e.g. via `open()`)
- `sys.stdout`, `sys.stdin`
  - example: `sys.stdin.readline()`
- Network replies, e.g. via `urllib.request.urlopen('https://google.com')`

## File-like objects

```py
with file as open('myfile.txt', encoding="utf-8"):
    # read individual lines
    for line in file:
        print(line)
    # read entire file
    print(file.read())
```

## File-like objects

Methods:

- `.close()`
- `.mode`
- `.read()` (read the entire file)
- `.read(10)` (read the next 10 bytes)
- `.readline()` (read the next line)

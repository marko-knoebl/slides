# Working with files

---

## Working with files

file = a sequence of bytes on a storage device

---

## the function "open()"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

???

Erstellt eine Instanz einer Unterklasse von IOBase

---

## file modes

```py
# mode: text, append
open("todos.txt", mode="ta")
```

---

## file modes

- `t`: text mode (standard)
- `b`: binary

* `r`: reading (standard)
* `w`: (over)writing
* `a`: appending

---

## reading and writing

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

---

## reading and writing

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

---

## open and the with statement

```py
with open("todos.txt", encoding="utf-8") as file_obj:
    content = file_obj.read()
```

In this example using the with statement relieves us from explicitly closing the file object. The file will be automatically closed when the program leaves the indented block.

---

## character encoding

Text files may be encoded in various ways:

- ASCII
- CP-1252 / western european / latin1
- UTF-8

Recommendation: _always_ use utf-8 as the encoding for text files (best support for special characters)

---

## character encoding

The default character encoding for text files depends on the operating system:

```py
import locale
locale.getpreferredencoding()
```

---

## character encoding

Explicitly stating the character encoding:

```py
open("file.txt", encoding="utf-8")
```

---

## File-like objects

Objects that support using `.read()` or `.write()` etc:

- files (zB via `open()`)
- `sys.stdout`, `sys.stdin`
- Network replies, e.g. via `urllib.request.urlopen('https://google.com')`

???

example: sys.stdin.readline()

---

## File-like objects

```py
with file as open('myfile.txt', encoding="utf-8"):
    # read individual lines
    for line in file:
        print(line)
    # read entire file
    print(file.read())
```

---

## File-like objects

Methods:

- `.close()`
- `.mode`
- `.read()` (read the entire file)
- `.read(10)` (read the next 10 bytes)
- `.readline()` (read the next line)

# Working with files

## Working with files

file = a sequence of bytes on a storage device

## the function "open()"

```py
file_obj = open("todos.txt")
content = file_obj.read()
file_obj.close()
print(content)
```

Open erstellt eine Instanz einer Unterklasse von IOBase

## file modes

```py
# mode: text, append
open("todos.txt", mode="ta")
```

## file modes

- `t`: text mode (standard)
- `b`: binary

* `r`: reading (standard)
* `w`: (over)writing
* `a`: appending

## reading and writing

```py
t = open("loremipsum.txt")
print(t.read())
t.close()
```

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

## open and the with statement

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

- files (zB via `open()`)
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

# Working with various file formats

## Working with file formats

possibilities:

- text files
- JSON
- XML
- Python object files (via pickle and shelve)
- binary files

## JSON

## saving JSON

```py
import json

data = ["one", "two", "three"]
jsonstring = json.dumps(data)

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
```

## reading JSON

```py
import json

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonstring = jsonfile.read()
data = json.loads(jsonstring)
```

## XML

two packages in the standard library:

- `xml.etree.ElementTree`
- `xml.dom.minidom`

external library (extension of ElementTree):

- `lxml`

## XML with ElementTree: creating a document

```py
import xml.etree.ElementTree as et

person = et.Element('person')
name = et.SubElement(person, 'name')
name.text = 'Adam'
age = et.SubElement(person, 'age')
age.text = '40'
age.set("unit", "years")
```

## XML with ElementTree: saving

```py
xmlbytestring: bytes = et.tostring(person, encoding='utf-8')
with open("myfile.xml", mode="wb") as file:
    file.write(xmlbytestring)

# oder
xmlstring: str = et.tostring(person, encoding='unicode')
with open("myfile.xml", encoding="utf-8", mode="w") as file:
    file.write(xmlstring)

# oder
tree = et.ElementTree(person)
tree.write("myfile.xml", encoding="utf-8")
```

## XML mit ElementTree: reading

```py
import xml.etree.ElementTree as et

person = et.fromstring(xmlstring)
for childnode in person:
    print(childnode.tag)
    print(childnode.text)
    print(childnode.attrib)
```

## Pickle

File format that can be used to save various types of Python objects

## Pickle

```py
import pickle
import datetime

now = datetime.datetime.now()

serialized = pickle.dumps()

with open("datetime.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)
```

## Pickle

```py
import pickle

with open("datetime.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.reads(serialized)
```

## exercise

- saving / loading of a tic-tac-toe board in various formats

Python data structure:

```py
field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]
```

# Modules and Packages

## Modules and Packages

- Module = Python file from which objects can be imported
- Package = directory that includes Python modules

## example imports

```py
import module1
import package1.module2

from package1 import module2
from package1.module2 import myobject

from package1.module2 import *
```

## example imports: urllib

- `urllib` = package
- `urllib.request` = modules
- `urllib.request.urlopen` = function

## compilation of modules

Imported modules will be saved in a compiled form, making subsequent loading of the modules faster.

Compiled versions will be saved in the folder `__pycache__`

## be careful: avoid circular imports

# Object-oriented programming and classes

## object orientation in Python "Everything is an object"

```py
a = 20

a.to_bytes(1, "big")

"hello".upper()
```

## types and instances

```py
message = "hello"

type(message)

isinstance(message, str)
```

## classes

Classes may represent _various_ things, e.g.:

- a Message inside an e-mail program
- a user of a website
- a car in a racing game
- a shopping basket in an online shop
- a bank account
- ...

## classes

The definition of a class usually encompasses:

- a "data structure" (attributes)
- a "behaviour" (methods)

## classes

example: class `BankAccount`

- "data structure" (attributes)
- "behaviour" (methods)

## defining classes

```py
class MyClass():

    # the method __init__ initializes the object
    def __init__(self):
        # inside any method, self will refer
        # to the current instance of the class
        self.message = "hello"

instance = MyClass()
instance.message # "hello"
```

## Inheritance

```py
class Person():
    ...

class Admin(Person):
    ...
```

## Example: class "Money"

```py
a = Money('EUR', 10)
b = Money('USD', 10)

a.currency

a.amount
```

## Exercise: classes "TodoList" and "Todo"

```py
tdl = TodoList("groceries")

tdl.add("milk")
tdl.add("bread")

print(tdl.todos)
tdl.todos[0].toggle()

tdl.stats() # {open: 1, completed: 1}
```

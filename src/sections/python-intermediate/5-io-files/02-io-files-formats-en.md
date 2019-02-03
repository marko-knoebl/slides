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

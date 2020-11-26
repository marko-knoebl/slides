# Working with various file formats

## Working with file formats

possibilities:

- text files
- JSON
- CSV
- XML
- Python object files (via pickle and shelve)
- binary files

## JSON

JSON: popular and standardized data file format

can represent the fundamental Python datatypes (none, bool, int, float, list, dict)

## Saving JSON

```py
import json

data = ["one", "two", "three"]
jsonstring = json.dumps(data)

with open("numbers.json", mode="w", encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
```

## Reading JSON

```py
import json

with open("numbers.json", encoding="utf-8") as jsonfile:
    jsonstring = jsonfile.read()
data = json.loads(jsonstring)
```

## CSV

CSV is a file format which can hold tabular data; entries are separated by commas

example:

```csv
ISO,Country,Capital,Languages
AD,Andorra,Andorra la Vella,"ES,FR"
AE,United Arab Emirates,Abu Dhabi,"AE,fa,en,hi,ur"
AF,Afghanistan,Kabul,"AF,tk"
```

## CSV

Python libraries:

- _csv_ (part of the standard libary)
- _pandas_

## Writing CSV via pandas

```py
import pandas as pd

data = pd.DataFrame(
    [
        ["CN", 9.6, 1386],
        ["RU", 17.0, 144],
        ["US", 9.8, 327],
    ],
    columns=["code", "area", "population"],
)

data.to_csv("countries.csv")
```

## Reading CSV via pandas

```py
import pandas as pd

data = pd.read_csv("countries.csv")

print(data)
print(data.values.tolist())
```

## Reading and writing CSV

```py
import csv

data = [
    ['code', 'area', 'population'],
    ['CN', 9.6, 1386],
    ['RU', 17, 144],
    ['US', 9.8, 327]
]

with open('countr.csv', 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)

with open('countr.csv', encoding='utf-8', newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
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

Always specify an encoding when saving XML!

```py
xmlbytestring: bytes = et.tostring(person, encoding='utf-8')
with open("myfile.xml", mode="wb") as file:
    file.write(xmlbytestring)

# or
xmlstring: str = et.tostring(person, encoding='unicode')
with open("myfile.xml", encoding="utf-8", mode="w") as file:
    file.write(xmlstring)

# or
tree = et.ElementTree(person)
tree.write("myfile.xml", encoding="utf-8")
```

## XML with ElementTree: reading

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

Warning:

- Pickle files can only be read by Python Programs
- Pickle files may contain malicious code

## Pickle

```py
import pickle
import datetime

now = datetime.datetime.now()

serialized = pickle.dumps(now)

with open("datetime.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)
```

## Pickle

```py
import pickle

with open("datetime.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.loads(serialized)
```

## Exercise

- saving / loading of a shopping list (optionally with amounts) in various formats
- saving / loading of a tic-tac-toe board in various formats

Python data structure for the tic-tac-toe board:

```py
field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]
```

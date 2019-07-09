# Dictionaries

## Dictionaries

Dictionaries are mappings of keys to values

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## Dictionaries

Accessing entries

```py
person["first_name"] # "John"
```

## Dictionaries

Iterating over dictionaries

```py
for entry in person:
    print(entry)
```

This will yield the keys: `"first_name"`, `"last_name"`, `"nationality"`, `"birth_year"`

Since Python 3.7 the keys will always remain in insertion order

## Dictionaries

Iterating over key-value-pairs:

```py
for key, value in person.items():
    print(f'{key}, {value}')
```

see also: tuples

## Operations on dictionaries

```py
d = {0: 'zero', 1: 'one', 2: 'two'}

d[2]
d[2] = 'TWO'
d[3] # KeyError
d.get(3) # None

d.keys()
d.items()

d1.update(d2)
```

## Valid keys

Any immutable object can act as a dictionary key. The most common types of keys are strings.

## Exercises

- vocabulary trainer
  - read a (JSON) file
  - create a data model with dictionaries
  - randomly pick an entry
- todo list

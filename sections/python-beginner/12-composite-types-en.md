# Composite types: dict, list, tuple

## dict

Dicts (_dictionaries_) are mappings that contain "named" entries with associated values.

```py
person = {
    "first_name": "John",
    "last_name": "Doe",
    "nationality": "Canada",
    "birth_year": 1980
}
```

## dict

Retrieving and setting elements:

```py
person["first_name"]
```

```py
person["first_name"] = "Jane"
```

## list

A list represents a sequence of objects

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]
```

## list

Retrieving list elements via their index (starting at 0):

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[1]
users[2]
```

## list

Overwriting a list element

```py
users[0] = "Andrew"
```

## list

Appending an element

```py
users.append("Dora")
```

## list

Removing the last element:

```py
users.pop()
```

Removing by index:

```py
users.pop(0)
```

## list

Determining the length

```py
len(users)
```

## Tuple

```py
date = (1973, 10, 23)
```

- area of application: similar to dicts
- behavior: similar to lists

## Tuples

Area of application: similar to dicts:

```py
point_dict = {"x": 2, "y": 4}
point_tuple = (2, 4)

date_dict = {
  "year": 1973,
  "month": 10,
  "day": 23
}
date_tuple = (1973, 10, 23)
```

Each entry in a tuple has a specific meaning

## Tuples

Behavior: similar to lists:

```py
date_tuple[0] # 1973
len(date_tuple) # 3
```

Unlike lists, tuples are immutable (no `.append` / `.pop` / ...)

## Data types - exercises

We start out with an empty _dict_ - we want to create a data structure that represents a person

```py
person = {}
```

the desired result could look like this:

```py
{
    "first_name": "Kofi",
    "last_name": "Annan",
    "birth_year": 1938,
    "children": ["Ama", "Kojo"]
}
```

## Data types - exercises

create and modify data structures that represent the following:

- data of a country (inhabitants, capital, neighboring countries)
- a transaction on a bank account
- a set of transactions on a bank account

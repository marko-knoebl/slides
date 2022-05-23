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

## dict

exercise:

create and modify dictionaries that represent various objects, e.g.:

- a date (e.g. October 23, 1971)
- a calendar event
- a person
- a product in an online shop
- ...

## list

A list represents a sequence of objects

```py
primes = [2, 3, 5, 7, 11]

users = ["Alice", "Bob", "Charlie"]

products = [
    {"name": "IPhone 12", "price": 949},
    {"name": "Fairphone", "price": 419},
    {"name": "Pixel 5", "price": 799}
]
```

## list

Retrieving list elements via their index (starting at 0):

```py
users = ["Alice", "Bob", "Charlie"]

users[0]
users[1]
users[-1] # last element
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

## list

exercise:

create and modify data consisting of _dicts_ and _lists_ that represents various objects, e.g.:

- todos
- calendar events
- products in an online shop / shopping basket
- transactions on a bank account

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

create and modify data structures that include _dicts_, _lists_ and _tuples_

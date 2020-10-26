# Sequences

## Sequences

Python sequences consist of other Python objects

examples:

- lists
- tuples
- strings
- bytes

## Operations on sequences

- accessing an element (via index): `s[2]`
- accessing multiple elements: `s[2:4]`
- concatenation: `s + t`
- repetition: `3 * s`
- length: `len(s)`
- for loop: `for el in s:`
- if clause : `if el in s:`

## Operations

Accessing elements

```py
users = ['mike', 'tim', 'theresa']

users[0] # 'mike'
users[-1] # 'theresa'
```

## Operations

Changing elements

(if the sequence is mutable)

```py
users = ['mike', 'tim', 'theresa']

users[0] = 'molly'
```

## Operations

Accessing multiple elements

```py
users = ['mike', 'tim', 'theresa']

users[0:2] # ['mike', 'tim']
```

## Operations

Concatenation

```py
users = ['mike', 'tim', 'theresa']

new_users = users + ['tina', 'michelle']
```

## Operations

Repetition

```py
users = ['mike', 'tim', 'theresa']

new_users = users * 3
```

## Operations

Length

```py
users = ['mike', 'tim', 'theresa']

print(len(users))
```

## Operations

for loop

```py
users = ['mike', 'tim', 'theresa']

for user in users:
    print(user.upper())
```

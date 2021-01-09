# For loops

## For loops

With for loops we can iterate over the contents of lists (and similar objects).

In some other programming languages this construct would be called _for-each_

## For loops

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

## Exercise: for loops and if statements

start with a list of numbers, e.g. `[2, 5, -3, 8, 1, -5]`

print all positive entries, e.g. `2, 5, 8, 1`

print the biggest element, e.g. `8`

## Example: login system

<!-- might be too hard for programming beginners -->

```py
users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"}
]
```

## Example: login system

example program run:

```txt
Enter your username:
lice
No such user.
Enter your username:
Alice
Enter your password:
123
Wrong password
Enter your password:
1234
Logged in as Alice!
```

# For loops

---

## For loops

With for loops we can iterate over the contents of lists (and similar objects).

In other programming languages this construct is called _for-each_

---

## For loops

```py
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")
```

---

## Example: login system

```py
# users and passwords
users = [
  ["Alice", "1234"],
  ["Bob", "password"],
  ["Charlie", "paris41"]]
```

---

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

---

## counting with for loops

In order to count with Python there's a function named `range`.

The function call `range(5)` creates an Object that behaves like the list `[0, 1, 2, 3, 4]`.

Example use:

```py
for i in range(5):
    print(i)
```

---

## counting with for loops

exercise: creating a "multiplication table"

```txt
1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
...
```

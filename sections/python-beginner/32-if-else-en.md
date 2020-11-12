# If / else

## If / else

example:

```py
age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
else:
    print("You are older than 1 billion seconds")
```

## If / elif / else

```py
if age_seconds < 100000000:
    print("You are less than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
```

## Code blocks

code block = a group of lines that belong together - for example the code that gets executed when an if condition is true

In Python the line before the code block ends with a `:` and the code block is indented (usually by 4 spaces)

## Exercise: coin flip

Simulate a random coin flip via `random.choice(["heads", "tails"])`

Let the user guess the outcome and tell them if they were right

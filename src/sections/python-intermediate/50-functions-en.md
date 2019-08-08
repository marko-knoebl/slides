# Functions

## Arbitrary number of Arguments (args / kwargs)

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)

foo("one", "two", x="hello")
# args: ("one", "two")
# kwargs: {"x": "hello"}
```

`args` will be a tuple, `kwargs` will be a dictionary

## Arbitrary number of Arguments (args / kwargs)

Task: recreate `range()`

## Unpacking of parameter lists

```py
numbers = ["one", "two", "three"]

# equivalent:
print(numbers[0], numbers[1], numbers[2])

print(*numbers)
```

## Global and local scope

`global` / `nonlocal`

change the behavior of _assignments_

## Call by sharing

In Python values are passed to functions via _call by sharing_ (similar to _call by reference_ in other languages)

This means: A function _may_ mutate parameters that are passed in - and we should usually make sure not to do so

## Call by sharing

Example:

```py
def modify_a(mylist):
    mylist.append(1)
    return mylist

def modify_b(mylist):
    return mylist + [1]

list_a = [1, 2]
list_a_mod = modify_a(list_a)
list_b = [1, 2]
list_b_mod = modify_b(list_b)
```

(results on next slide)

## Call by sharing

```py
list_a_mod # [1, 2, 1]
list_b_mod # [1, 2, 1]
list_a # [1, 2, 1]
list_b # [1, 2]
```

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

## Example

Task: recreate `range()`

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

list1 = [1, 2]
list2 = modify_a(list1)
print(list1) # [1, 2, 1]
```

# Exercises

## Exercises

- todo list
- lottery generator
- hangman

## todo list

Interactive interface that allows a user to create a list of todos which will be printed in the end

Python topics: list, while, for, input

## todo list

```py
todolist = []
proceed = True
while proceed:
    new_todo = input("enter new todo:")
    todolist.append(new_todo)
    proceed_input = input("add another todo? (y/N)")
    proceed = proceed_input == 'y'

for todo in todolist:
    print('-', todo)
```

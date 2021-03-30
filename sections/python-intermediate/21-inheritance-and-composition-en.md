# Inheritance and composition

## Inheritance and composition

often we can use some class(es) as the basis for another class

e.g.:

- `User` class as the basis of the `AdminUser` class
- `TicTacToeGame` as the basis of `TicTacToeGameGUI`

## Inheritance and composition

inheritance: an `AdminUser` _is_ a `User`

composition: `TicTacToeGameGUI` could _use_ `TicTacToeGame` in the background

common mantra: _composition over inheritance_: don't overuse inheritance

## Inheritance

inheritance:

```py
class User():
    ...

class AdminUser(User):
    ...
```

the `AdminUser` class automatically inherits all existing methods from the `User` class

## Composition

composition:

```py
class TicTacToeGame():
    ...

class TicTacToeGameGUI():
    def __init__(self):
        self.game = TicTacToeGame()
```

## Inheritance

example of inheritance - database model in Django:

```py
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
```

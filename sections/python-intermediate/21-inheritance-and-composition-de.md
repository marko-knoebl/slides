# Vererbung und Komposition

## Vererbung und Komposition

öfters verwenden wir eine Klasse als Basis für eine andere Klasse

z.B.:

- `User`-Klasse als Basis der `AdminUser`-Klasse
- `TicTacToeGame` als Basis von `TicTacToeGameGUI`

## Vererbung und Komposition

Vererbung: ein `AdminUser` _ist_ ein `User`

Komposition: `TicTacToeGameGUI` könnte `TicTacToeGame` im Hintergrund verwenden

häufiges Mantra: _Composition over Inheritance_: verwende Vererbung nicht zu sehr

## Vererbung

Vererbung:

```py
class User():
    ...

class AdminUser(User):
    ...
```

die `AdminUser`-Klasse erbt automatisch alle bestehenden Methoden der `User`-Klasse

## Komposition

Komposition:

```py
class TicTacToeGame():
    ...

class TicTacToeGameGUI():
    def __init__(self):
        self.game = TicTacToeGame()
```

## Vererbung

Beispiel zur Vererbung - Datenbankmodell in Django:

```py
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
```

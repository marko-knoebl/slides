# Funktionen

## Beliebige Anzahl an Parametern (args / kwargs)

```py
def foo(*args, **kwargs):
    print(args)
    print(kwargs)

foo("one", "two", x="hello")
# args: ("one", "two")
# kwargs: {"x": "hello"}
```

`args` ist ein Tupel, `kwargs` ein Dictionary.

## Beliebige Anzahl an Parametern (args / kwargs)

Aufgabe: "Nachbau" von `range()` mit Hilfe einer while-Schleife

## Entpacken von Parameterlisten

```py
numbers = ["one", "two", "three"]

# equivalent:
print(numbers[0], numbers[1], numbers[2])

print(*numbers)
```

## Globaler und lokaler Scope

`global` / `nonlocal`

Spielt beim _Zuweisen_ von Variablen eine Rolle

## Globaler und lokaler Scope

Beispiel: Schere, Stein, Papier

```py
import random
wins = 0
losses = 0
def play_rock_paper_scissors():
    player = input("rock, paper or scissors?")
    opponent = random.choice(["rock", "paper", "scissors"])
    if player == opponent:
        pass
    elif (
        (player == "rock" and opponent == "scissors")
        or (player == "paper" and opponent == "rock")
        or (player == "scissors" and opponent == "paper")
    ):
        global wins
        wins += 1
    else:
        global losses
        losses += 1
while input("play? (y/n)") != "n":
    play_rock_paper_scissors()
print(f"won: {wins}, lost: {losses}")
```

## Globaler und lokaler Scope

Eine bessere Alternative zum Keyword `global` ist oft das Verwenden einer Klasse:

```py
import random
class RockPaperScissors():
    def __init__(self):
        self.wins = 0
        self.losses = 0
    def play(self):
        ...
    def run(self):
        while input("play? (y/n)") != "n":
            self.play()
        print(f"won: {wins}, lost: {losses}")
```

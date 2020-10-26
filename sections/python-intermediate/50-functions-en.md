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

Task: recreate `range()` by using a while loop

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

## Global and local scope

Example: rock, paper, scissors

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

## Global and local scope

A better alternative to the `global` keyword is often to create a class:

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

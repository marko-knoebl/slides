import random

print("Enter x to quit at any time")

correct = 0
incorrect = 0

while True:
    s = random.randint(1, 99)
    a = random.randint(1, s)
    b = s - a
    if random.randint(0, 1) == 0:
        # operation +
        question = f"What is {a} + {b}?"
        solution = s
    else:
        # operation -
        question = f"What is {s} - {a}?"
        solution = b
    answer_s = input(f"{question}\n")
    if answer_s == "x":
        break
    answer = int(answer_s)
    if answer == solution:
        print("correct")
        correct = correct + 1
    else:
        print("incorrect")
        incorrect = incorrect + 1

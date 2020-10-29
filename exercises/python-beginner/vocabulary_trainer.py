import random

entries = [
    {"de": "Apfel", "en": "apple"},
    {"de": "Birne", "en": "pear"},
    {"de": "Banane", "en": "banana"},
    {"de": "Erdbeere", "en": "strawberry"}
]

right = 0
wrong = 0

while True:
    entry = random.choice(entries)
    answer = input(f"What is the German word for {entry['en']}? (X to quit)")
    if answer.lower() == "x":
        break
    if answer == entry['de']:
        print("Correct!")
        right += 1
    else:
        print("Incorrect!")
        wrong += 1

print(f"You got {right} out of {right + wrong} correct!")

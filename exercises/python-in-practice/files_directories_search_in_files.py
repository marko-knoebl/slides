# count print functions in all python files

# functions:
#   os.walk
#   string.count('abc')

import os

term = "print"

total = 0

# list all python files
for root, dirs, files in os.walk('.'):
    for filename in files:
        if filename.endswith('.py'):
            filepath = f"{root}/{filename}"
            print(filepath)
            with open(filepath, encoding="utf-8") as file:
                filecontent = file.read()
                occurences = filecontent.count(term)
                print(occurences)
                total += occurences
print(total)

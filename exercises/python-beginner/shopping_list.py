shopping_list = []

while True:
    print('Enter an item or "x" to quit:')
    item = input()
    if item == "x":
        break
    shopping_list.append(item)

print("Your shopping list is:")

for item in shopping_list:
    print(f"- {item}")

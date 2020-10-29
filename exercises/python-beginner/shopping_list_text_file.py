shopping_list = []

while True:
    print('Enter an item or "x" to quit:')
    item = input()
    if item == "x":
        break
    shopping_list.append(item)

file_content = ""
for item in shopping_list:
    file_content += item
    file_content += "\n"

file = open("shoppinglist.txt", "w", encoding="utf-8")
file.write(file_content)
file.close()

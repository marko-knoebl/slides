poem_file = open("poem.txt", encoding="utf-8")
poem_text = poem_file.read()
poem_file.close()

poem_lines = poem_text.splitlines()
new_poem_lines = []
for i in range(len(poem_lines)):
    new_poem_lines.append(f"{poem_lines[i]:<78}{i+1:>2}")

new_poem_text = "\n".join(new_poem_lines)

new_poem_file = open("poem-out.txt", encoding="utf-8", mode="w")
new_poem_file.write("\n".join(new_poem_lines))

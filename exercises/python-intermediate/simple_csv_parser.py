def parse_csv_line(line):
    position = 0
    parsed_line = []

    while True:
        if line[position] == '"':
            closing_quote_position = line.find('"', position + 1)
            value = line[position + 1 : closing_quote_position]
            parsed_line.append(value)
            position = closing_quote_position + 2
            if position >= len(line):
                break
        else:
            next_comma_position = line.find(",", position)
            if next_comma_position != -1:
                value = line[position:next_comma_position]
                parsed_line.append(value)
                position = next_comma_position + 1
            else:
                value = line[position:]
                parsed_line.append(value)
                break
    return parsed_line


def parse_csv(csv_string):
    parsed_lines = []
    lines = csv_string.splitlines()
    for line in lines:
        parsed_line = parse_csv_line(line)
        parsed_lines.append(parsed_line)
    return parsed_lines


test_csv = """name,"country","age"
"Doe, John",Austria,32
"Doe, Jane",Germany,42
"""

print(parse_csv(test_csv))

source_code = open(
    "python-intermediate/string_source_code_analysis.py", encoding="utf-8"
).read()

functions = []

in_function = False

for line in source_code.splitlines():
    if not in_function:
        if line.startswith("def "):
            function_name = line[4: -1]
            functions.append({
                "name": function_name,
                "lines": 0,
                "blanks": 0,
                "comments": 0})
            in_function = True
    else:
        if line.lstrip().startswith('#'):
            functions[-1]["comments"] += 1
        elif line.isspace():
            functions[-1]["blanks"] += 1
        elif line.startswith(" "):
            functions[-1]["lines"] += 1
        else:
            # leaving function
            in_function = False

print(f"{'function':^20}{'lines':>10}{'comments':>10}{'blanks':>10}")
for function in functions:
    print(f"{function['name']:<20}{function['lines']:>10}{function['comments']:>10}{function['blanks']:>10}")

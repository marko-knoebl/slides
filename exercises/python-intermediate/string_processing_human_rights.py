from urllib.request import urlopen

with urlopen("https://unicode.org/udhr/d/udhr_eng.txt") as resource:
    text = resource.read().decode("utf-8")

md_text = ""
started = False

for line in text.splitlines():
    if not started:
        if line == "---":
            started = True
    else:
        if line.isspace() or line == "":
            new_line = ""
        elif line.startswith("Universal Declaration"):
            new_line = "# " + line + "\n\n"
        elif line.startswith("      Preamble") or line.startswith("      Article "):
            new_line = "## " + line.lstrip() + "\n\n"
        else:
            new_line = line.lstrip() + "\n\n"
        md_text = md_text + new_line

print(md_text)

# Continue

## Continue

keyword `continue`: similar to break, but only skips the rest of the _current_ iteration

example:

```py
for name in os.listdir("."):
    if not name.endswith(".txt"):
        # skip .txt files
        continue
    # process other files here
```

# sys

## sys

Functions for the Python environment

examples:

- `argv`
- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Command line parameters

may be read via `sys.argv`

```py
# hello.py
import sys
print(sys.argv)
```

```bash
python hello.py --run --file=foo.txt
```

```python
['hello.py', '--run', '--file=foo.txt']
```

## Overwriting stdout.write

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```

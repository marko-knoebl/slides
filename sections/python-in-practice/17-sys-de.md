# sys

## sys

Funktionen zur Python-Umgebung

Beispiele:

- `argv`
- `stdout.write`
- `getrefcount`
- `path`
- `version`
- `version_info`

## Kommandozeilenparameter

Kommandozeilenparameter sind auslesbar über `sys.argv`

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

## Überschreiben von stdout.write

```py
import sys

old_stdout = sys.stdout

class LoudStdout:
    def write(self, text):
        old_stdout.write(text.upper())

loudstdout = LoudStdout()

sys.stdout = loudstdout
```

# Fehlermeldungen und Tracebacks

## Fehlermeldungen und Tracebacks

Beispiel für Code, der eine Fehlermeldung erzeugt:

```py
open("foo.txt")
```

Fehlermeldung:

```txt
Traceback (most recent call last):
  File "xyz.py", line 1, in <module>
    open("foo.txt")
FileNotFoundError: [Errno 2] No such file or directory: 'foo.txt'
```

Letzte Zeile: Beschreibung des Fehlers

darüber: Ursprung des Fehlers

## Fehlermeldungen und Tracebacks

Beispielcode mit einer Kette von Funktionsaufrufen:

```py
import shutil
def demo_remove_dir_error():
    shutil.rmtree("./does_not_exist")

demo_remove_dir_error()
```

## Fehlermeldungen und Tracebacks

Fehlermeldung mit einer Kette von Funktionsaufrufen:

```txt
Traceback (most recent call last):
  File "...\demo_remove_dir_error.py", line 5, in <module>
    demo_remove_dir_error()
  File "...\demo_remove_dir_error.py", line 3, in demo_remove_dir_error
    shutil.rmtree("./does_not_exist")
  File "...\lib\shutil.py", line 748, in rmtree
    return _rmtree_unsafe(path, onerror)
  File "...\lib\shutil.py", line 607, in _rmtree_unsafe
    onerror(os.scandir, path, sys.exc_info())
  File "...\lib\shutil.py", line 604, in _rmtree_unsafe
    with os.scandir(path) as scandir_it:
FileNotFoundError: [WinError 3] The system cannot find the
    path specified: './does_not_exist'
```

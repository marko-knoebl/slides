# Error messages and tracebacks

## Error messages and tracebacks

example code that creates an error message:

```py
open("foo.txt")
```

error message:

```txt
Traceback (most recent call last):
  File "xyz.py", line 1, in <module>
    open("foo.txt")
FileNotFoundError: [Errno 2] No such file or directory: 'foo.txt'
```

Last line: description of the error

above: where the error came from

## Error messages and tracebacks

example code with a chain of function calls:

```py
import shutil
def demo_remove_dir_error():
    shutil.rmtree("./does_not_exist")

demo_remove_dir_error()
```

## Error messages and tracebacks

error message involving a chain of function calls:

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

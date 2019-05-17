# Working with files and folders

## Working with files and folders

two important packages:

- _os_
- _shutil_

## os

- `os.getcwd()` (current directory)
- `os.chdir()`
- `os.chmod()`
- `os.listdir()`
- `os.mkdir('foo')`
- `os.rename('foo', 'bar')`
- `os.mkdir('foo/bar/baz')`
- `os.remove('foo/bar/baz/qux.txt')`
- `os.rmdir('foo/bar/baz')`
- `os.walk()`

## shutil

- `shutil.copy('origin', 'destination')` (copy file)
- `shutil.copytree()` (copy folder)
- `shutil.rmtree()` (delete folder)
- `shutil.move()` (move file or folder)

## Exercise

create a program that searches for occurrences of a term in all files from a folder and prints their number

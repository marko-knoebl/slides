# Working with files and folders

## Working with files and folders

important packages:

- _os_
- _os.path_
- _shutil_

## os and shutil (1)

- `os.getcwd()` (current path)
- `os.chdir()`
- `os.listdir()`

<!-- list separator -->

- `os.walk()`

## os and shutil (2)

- `os.mkdir("foo")`
- `os.mkdir("foo/bar/baz")`

<!-- list separator -->

- `os.remove("foo.txt")` (delete file)
- `os.rmdir("foo/bar/baz")` (delete empty folder)
- `shutil.rmtree()` (delete folder)

<!-- list separator -->

- `os.rename("foo.txt", "bar.txt")`
- `shutil.move()` (move file or folder)
- `shutil.copy("foo.txt", "bar")` (copy file)
- `shutil.copytree()` (copy folder)

## Extra: general terminal commands

Direct output via `os.system`:

```py
os.system("ls .")
os.system("mkdir foo")
```

Read results in Python via `os.popen`:

```py
a = os.popen("ls .").read()
print(a)
```

## Exercise

create a program that searches for occurrences of a term in all files from a folder and prints their number

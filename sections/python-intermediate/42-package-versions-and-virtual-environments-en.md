# Package versions and virtual environments

## Package versions

installing a package via PIP:

```
pip install cowsay
```

installing a specific version:

```
pip install cowsay==6.1
```

installing a compatible version (this could also install versions 6.2, 6.3, etc. - if they are available):

```
pip install cowsay~=6.1
```

## Virtual environments

**virtual environments**: allow for installing different dependencies and dependency versions for different projects

## Virtual environments

creating a virtual environment (typically named ".venv"):

```
python -m venv .venv
```

will create a new folder ".venv/" which contains the virtual environment

## Virtual environments

activating an environment on Windows:

```
./.venv/Scripts/activate
```

deactivating a venv:

```
deactivate
```

if necessary: enable execution of local scripts on Windows - from an admin terminal:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Dependency lists

"old" configuration file: _requirements.txt_

"new" configuration file: _pyproject.toml_

## Dependency lists

example _requirements.txt_:

```txt
cowsay~=6.1
requests~=2.30
```

installation from _requirements.txt_:

```bash
pip install -r requirements.txt
```

## Dependency lists

example _pyproject.toml_:

```toml
[project]
name = "my-python-project"
version = "1.0"
dependencies = [
  "cowsay~=6.1",
  "requests~=2.30",
]
```

installation:

```
pip install .
```

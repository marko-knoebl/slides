# Installation on Windows

## Installation on Windows

Download from <https://python.org>

during installation, check the option "Add Python 3.x to PATH"

<!--
adding to path

program "environment variables" / "Umgebungsvariablen für dieses Konto bearbeiten"
add to PATH:

for Anaconda:
C:\Users\Marko\Anaconda3
C:\Users\Marko\Anaconda3\Scripts
-->

<!--
why not use windows store version?

- does not automatically resolve the maximum path limit (260 characters)
  manual fix: regedit: set `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled` to `1`
- does not put executables on PATH (instead of "flask" we have to run "python -m flask")
-->

## Installation on Windows

verify the installation:

`python --version` should display the version number

`pip install requests` should successfully download and install a small Python package named _requests_

## Installation on Windows

installation includes:

- Python _runtime_ for executing Python code
- interactive Python console
- IDLE: simple development environment
- PIP: package manager for installing extensions

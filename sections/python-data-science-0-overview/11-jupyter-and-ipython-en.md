# Jupyter and IPython

## IPython

IPython = advanced interactive Python console, supports features like autocompletion

## Jupyter notebooks

- interactive Python document (based on IPython)
- file format _.ipynb_
- may contain code, output text / graphics, documentation / notes

## Jupyter interfaces

- _Jupyter Notebook_: web-based interface that can run on a remote server or locally
- _JupyterLab_: successor to _Jupyter Notebook_
- _VS Code_: supports jupyter notebooks

## Jupyter notebook - VS Code

VS Code can connect to the IPython kernel:

In VS Code's command pallette (F1), search for: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter notebook - Anaconda

Launching Jupyter: Entry _Jupyter Notebook_ in the start menu / terminal command `jupyter notebook`

Stopping Jupyter: Press _Quit_ in the top right corner of the directory tree view (usually under http://localhost:8888/tree)

Python packages: _notebook_ or _jupyterlab_

## Jupyter notebook - online

free online Jupyter notebooks:

- _Binder_ (limited sessions): https://jupyter.org/try
- popular public notebooks on _kaggle_: https://www.kaggle.com/notebooks?sortBy=voteCount (login required to edit / create)
- _Google Colab_: https://colab.research.google.com (login required)

## Writing and evaluating code

Write code into a cell, e.g.

```py
import time
time.sleep(3)
"hello"
```

and press _Shift_ + _Enter_

## Writing and evaluating code

IPython has numbered inputs, e.g. `[1]`

When a computation is ongoing it will display `[*]`

If the last statement in a cell evaluates to something it will be considered the output and be displayed (to supress this, end the statement with a semicolon)

## Writing and evaluating code

interface functionality (varies along notebook types):

- run cell
- restart (forgets previous variables and state)
- run all cells / restart and run all cells
- interrupt evaluation

## Writing and evaluating code

accessing the last output:

```py
print(_ * 3)
```

## Writing documentation via markdown

We can add documentation via the standardized _markdown_ language:

Switch from _Code_ to _Markdown_ and try the following code:

```md
# Heading

- item 1
- item 2
```

Run or leave the cell to display the result, double click to edit again

[markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Documentation

displaying documentation in any Python console:

```py
help(str)
```

(navigate through long outputs via _Enter_, exit via _Q_)

shortcut for IPython / Jupyter:

```ipython
str?
```

## Tab completion and wildcard expressions

```ipython
*Error?
```

## Running terminal commands

IPython includes direct access to many terminal commands, e.g. `ls`, `cd`, ...

We can execute any terminal command by prefixing it with `!`

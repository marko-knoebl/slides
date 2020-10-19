# Jupyter and IPython

## IPython

IPython = advanced interactive Python console, supports features like autocompletion

## Jupyter notebooks

Jupyter notebook = file format (_.ipynb_) that represents an interactive Python document where cells may be evaluated individually; interactivity is based on IPython

## Jupyter interfaces

- _Jupyter Notebook_: web-based interface that can run on a remote server or locally
- _JupyterLab_: successor to _Jupyter Notebook_
- _VS Code_: supports jupyter notebooks

## Jupyter notebooks - online

Try Jupyter online:

### Google Colab (Google account needed)

- Go to https://colab.research.google.com
- Select _File_ - _New Python 3 Notebook_

### Binder (limited sessions)

- Go to https://jupyter.org/try
- Select _Try Classic Notebook_
- wait ...
- Select _File_ - _New Notebook_ - _Python 3_

## Jupyter notebooks - VS Code

install _ipykernel_ and its dependencies (_ipython_, _jupyter-core_, _jupyter-client_):

<!-- will install ipython, jupyter-core, jupyter-client -->

```bash
pip install ipykernel
```

In VS Code's command palette (F2), search for: _Python: Create New Blank Jupyter Notebook_

## Jupyter notebooks - locally

Launching Jupyter: Entry _Jupyter Notebook_ in the start menu / terminal command `jupyter notebook`

Stopping Jupyter: Press _Quit_ in the top right corner of the directory tree view (usually under http://localhost:8888/tree)

Python packages: _notebook_ or _jupyterlab_

## Notebook files

Jupyter notebook files can be created via _new_ - _Notebook: Python 3_

Will be saved under _notebook.ipynb_

_Ipynb_: File format that can contain Python code, outputs, text documentation

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

If the last statement in a cell evaluates to something it will be considered the output and be displayed

In order to restart the notebook and re-evaluate all cells, press ⏩

## Accessing the last output

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

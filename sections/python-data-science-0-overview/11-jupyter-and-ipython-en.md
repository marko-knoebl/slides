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

## Jupyter notebook - online

free online Jupyter environments:

- _Google Colab_: <a href="https://colab.research.google.com" target="_blank">https://colab.research.google.com</a> (login required)
- <https://jupyter.org/try>
  - _JupyterLite_: Jupyter notebooks that run directly in the browser (via WebAssembly)
  - _Binder_: limited sessions
- _kaggle_ (login required to edit / create notebooks): <a href="https://www.kaggle.com" target="_blank">https://www.kaggle.com</a>
  - popular public notebooks on _kaggle_: <a href="https://www.kaggle.com/code?sortBy=voteCount" target="_blank">https://www.kaggle.com/code?sortBy=voteCount</a>

## Jupyter notebook - VS Code

VS Code can connect to the IPython kernel:

In VS Code's command pallette (F1), search for: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter notebook - Jupyterlab

run Jupyterlab from the terminal:

```bash
jupyter-lab
```

## Writing and evaluating code

Write code into a cell, e.g.

```py
import time
time.sleep(3)
1 + 1
```

and press _Shift_ + _Enter_

## Writing and evaluating code

IPython has numbered inputs / outputs, e.g. `[1]`

## Writing and evaluating code

If the last statement in a cell evaluates to something it will be considered the output and be displayed

To supress this behavior, end the statement with a semicolon

## Writing and evaluating code

interface functionality (varies amongst notebook types):

- run cell
- restart (forgets previous variables and state)
- run all cells / restart and run all cells
- interrupt evaluation

## Writing documentation via markdown

We can add documentation via the standardized _markdown_ language:

Switch from _Code_ to _Markdown_ and try the following code:

```md
# Heading

- item 1
- item 2
```

Run (or leave) the cell to display the result, double click to edit again

<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatshee" target="_blank">markdown cheatsheet</a>

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

## Running terminal commands

IPython includes direct access to many terminal commands, e.g. `ls`, `cd`, ...

We can execute any terminal command by prefixing it with `!`

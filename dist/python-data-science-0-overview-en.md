# Python and Data Science: Overview

# Packages

## Python packages for data science

- _Jupyter_ & _IPython_: interactive Python environments
- _NumPy_: library for efficient processing of numerical data
- _Pandas_: library for data analysis, based on NumPy
- _Matplotlib_ and _Pyplot_: library for data visualization
- _Scikit-Learn_: library for machine learning, based on NumPy
- _Keras_: library for deep learning (based on _TensorFlow_)

## Compiled packages and Python versions

Compiled packages (like _NumPy_, _TensorFlow_ or _PyTables_) may take several months before they are available for the newest Python version.

recommendation: use an older Python version (e.g. 3.8 instead of 3.9) or a pre-built distribution (like Anaconda)

## Python packages for data science

installing the most important packages in an existing Python environment:

```bash
pip install jupyter numpy pandas matplotlib sklearn tensorflow
```

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

- _Google Colab_: <https://colab.research.google.com> (login required)
- _kaggle_ (login required to edit / create notebooks): <https://www.kaggle.com>
  - popular public notebooks on _kaggle_: <https://www.kaggle.com/notebooks?sortBy=voteCount> (login required to edit / create)
- _Binder_ (limited sessions): <https://jupyter.org/try>

## Jupyter packages

Python packages:

- _ipykernel_ - needed for VS Code support
- _notebook_ - old standalone browser interface
- _jupyterlab_ - new standalone browser interface

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
"hello"
```

and press _Shift_ + _Enter_

## Writing and evaluating code

IPython has numbered inputs, e.g. `[1]`

When a computation is ongoing it will display `[*]`

## Writing and evaluating code

If the last statement in a cell evaluates to something it will be considered the output and be displayed

(To supress this behavior, end the statement with a semicolon)

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

## Running terminal commands

IPython includes direct access to many terminal commands, e.g. `ls`, `cd`, ...

We can execute any terminal command by prefixing it with `!`

# In depth: Anaconda

## Anaconda

_Anaconda_ = Python distribution that includes many pre-built packages and developer tools

Uses ~ 3 GB of disk space

includes _Conda_: environment and package manager (enables installation multiple versions of Python and Python packages)

## Anaconda installation

download from <https://www.anaconda.com/products/individual>

On Windows, the installation path should not contain spaces or underscores (recommendation: `C:/anaconda`) - see <https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder>

## Anaconda

to launch a _Jupyter_ notebook: Entry _Jupyter Notebook_ in the start menu / terminal command `jupyter notebook`

Stopping Jupyter: Press _Quit_ in the top right corner of the directory tree view (usually under http&#x3A;//localhost:8888/tree)

# NumPy: overview and demo

## NumPy

_NumPy_: library for efficient processing of numerical data - based on multidimensional arrays

## NumPy: overview and demo

```py
import numpy as np

# create a 2-dimensional array
iris = np.array([[5.1, 3.5, 1.4, 0.2],
                 [4.9, 3.0, 1.4, 0.2],
                 [4.7, 3.2, 1.3, 0.2],
                 [4.6, 3.1, 1.5, 0.2]])
```

## NumPy: overview and demo

```py
# get the first column
iris[:, 0]  # [5.1, 4.9, 4.7, 4.6]
# get the second column
iris[:, 1]  # [3.5, 3.0, 3.2, 3.1]
```

## NumPy: overview and demo

```py
# get the mean value of the first column
iris[:, 0].mean()  # 4.825

# divide the entries in the first column by the entries
# in the second column
iris[:, 0] / iris[:, 1]  # [1.46, 1.63, 1.47, 1.48]
```

# Pandas: overview and demo

## Pandas

_Pandas_: library for data analysis, based on NumPy

## Pandas: overview and demo

load a data table (_DataFrame_) from a CSV file:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://public.opendatasoft.com/" +
        "explore/dataset/titanic-passengers/download",
    delimiter=";",
)
```

## Pandas: overview and demo

display data:

```py
titanic
```

display one column (series):

```py
titanic["age"]
```

## Pandas: overview and demo

summarize all numeric data:

```py
titanic.describe()
```

summarize one column (series):

```py
titanic["age"].describe()
```

mean value of one column (series):

```py
titanic["age"].mean()
```

## Pandas: overview and demo

querying data: passengers younger than 1 year

```py
titanic[titanic["age"] < 1]
```

## Pandas: overview and demo

preparing data for machine learning exercise:

```py
titanic_ml = pd.DataFrame({
    "female": titanic["sex"].replace(
        {"female": True, "male": False}
    ),
    "pclass": titanic["pclass"],
    "age": titanic["age"],
    "sibsp": titanic["sibsp"],
    "survived": titanic["survived"].replace(
        {"Yes": True, "No": False}
    )
})

# remove rows with missing data
titanic_ml = titanic_ml.dropna()
```

# Pyplot: overview and demo

## Pyplot: overview and demo

_Pyplot_: data plotting interface - included in matplotlib, accesible from _pandas_

## Pyplot: overview and demo

using pyplot directly:

```py
import matplotlib.pyplot as plt

plt.hist(
    titanic["pclass"],
    bins=[1, 2, 3, 4],
    align="left",
)
plt.xticks([1, 2, 3])
```

using pyplot from pandas:

```py
titanic["pclass"].plot.hist(
    bins=[1, 2, 3, 4],
    align="left",
    xticks=[1, 2, 3],
)
```

## Pyplot: overview and demo

```py
plt.boxplot(
    titanic["age"].dropna(),
    whis=[0, 100],
    labels=["age"]
)
```

## Pyplot: overview and demo

```py
plt.hist(
    titanic["age"],
    bins=[0, 10, 20, 30, 40, 50, 60, 70, 80],
    color="C1",
)
```

# Scikit-learn: overview and demo

## Scikit-learn: overview and demo

exercise: predicting survival on the Titanic via a linear regression

simple algorithms can be trained to predict survival with 80% accuracy (based on _sex_, _passenger class_, _age_, _number of siblings or spouses_)

## Scikit-learn: overview and demo

"training" a model:

```py
from sklearn.linear_model import LinearRegression

passenger_data = titanic_ml[["female", "pclass", "age", "sibsp"]]
survived = titanic_ml["survived"]

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: overview and demo

predicting chance of survival for:

- 40-year-old woman in first class (with no siblings or spouses)
- 40-year-old man in third class (with no siblings or spouses)

```py
model.predict(
    np.array([
        [1, 1, 40, 0],
        [0, 3, 40, 0],
    ])
)
# [0.93, 0.03]
```

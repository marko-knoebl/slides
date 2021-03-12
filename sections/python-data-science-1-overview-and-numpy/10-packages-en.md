# Packages

## Python packages for data science

- _Jupyter_ & _IPython_: interactive Python environments
- _NumPy_: library for efficient processing of numerical data
- _Pandas_: library for data analysis, based on NumPy
- _Matplotlib_: library for data visualization
- _Scikit-Learn_: library for machine learning, based on NumPy
- _Keras_: library for deep learning (based on _TensorFlow_)

## Python packages for data science

installing the most important packages in an existing Python environment:

```bash
pip install jupyter numpy pandas matplotlib sklearn tensorflow
```

Note: Packages like _NumPy_ or _TensorFlow_ may take several months before they are available for the newest Python version

## Anaconda

_Anaconda_ = Python distribution that includes many pre-built packages and developer tools

Uses ~ 3 GB of disk space

## Anaconda installation

download from https://www.anaconda.com/products/individual

On Windows, the installation path should not contain spaces or underscores (recommendation: `C:/anaconda`) - see https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder

## Conda

_Conda_ = management tool for Python packages and environments, used by Anaconda

Enables installation of multiple versions of Python and Python packages

Particularly useful for external libraries that are written in a compiled language

## Pyodide

_Pyodide_ = Python distribution that can be run directly in the Browser (via _WebAssembly_)

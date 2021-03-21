# Pakete

## Python Pakete für Data Science

- _Jupyter_ & _IPython_: interaktive Python Umgebungen
- _NumPy_: Bibliothek zum effizienten Verarbeiten numerischer Daten
- _Pandas_: Bibliothek zur Datenanalyse, basiert auf NumPy
- _Matplotlib_ und _Pyplot_: Bibliothek zur Datenvisualisierung
- _Scikit-Learn_: Bibliothek für Machine Learning, basiert auf NumPy
- _Keras_: Bibliothek für Deep Learning

## Python Pakete für Data Science

Installation der wichtigsten Pakete in einer vorhandenen Python-Umgebung:

```bash
pip install jupyter numpy pandas matplotlib sklearn tensorflow
```

Bemerkungen:

Pakete wie _NumPy_ oder _TensorFlow_ benötigen oft einige Monate, bis sie für eine neue Python-Version verfügbar sind

Manche Pakete müssen während der Installation kompiliert werden: z.B. _tables_ für Unterstützung von HDF5-Dateien (benötigt _Microsoft Visual C++_ unter Windows)

## Anaconda

_Anaconda_ = Python Distribution, die viele vorkompilierte Pakete und Entwicklerwerkzeuge enthält

Benötigt ~3GB Platz auf der Festplatte

## Installation von Anaconda

Download von https://www.anaconda.com/products/individual

Unter Windows sollte der Installationspfad keine Leerzeichen enthalten (Empfehlung: `C:/anaconda`) - siehe https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder

## Conda

_Conda_ = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten

insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

## Pyodide

_Pyodide_ = Python Distribution, die direkt im Browser ausgeführt wird (via _WebAssembly_)

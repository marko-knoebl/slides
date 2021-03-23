# Python und Data Science: Überblick

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

Download von <https://www.anaconda.com/products/individual>

Unter Windows sollte der Installationspfad keine Leerzeichen enthalten (Empfehlung: `C:/anaconda`) - siehe <https://docs.anaconda.com/anaconda/user-guide/faq/#distribution-faq-windows-folder>

## Conda

_Conda_ = Environment- und Paketmanager

Erlaubt das Installieren verschiedener Versionen von Python, von Python-Paketen und anderen Abhängigkeiten

insbesondere hilfreich für externe Libraries, die nicht in Python geschrieben sind und kompiliert werden müssen

## Pyodide

_Pyodide_ = Python Distribution, die direkt im Browser ausgeführt wird (via _WebAssembly_)

# Jupyter und IPython

## IPython

IPython = Fortgeschrittene interaktive Python Konsole, beinhaltet u.a. Autovervollständigung

## Jupyter Notebooks

- interaktives Python-Dokument (basierend auf IPython)
- Dateiformat mit Endung _.ipynb_
- kann Python Code, Ausgaben / Grafiken und Dokumentation / Notizen beinhalten

## Jupyter Interfaces

- _Jupyter Notebook_: webbasiertes Interface, das auf einem Server oder lokal laufen kann
- _JupyterLab_: Nachfolgeprojekt von _Jupyter Notebook_
- _VS Code_: unterstützt Jupyter notebooks ebenfalls

## Jupyter Notebook - VS Code

VS Code kann sich mit dem IPython-Kernel verbinden:

In der Befehlspalette von VS Code (via F1) suchen wir nach: _Python: Create New Blank Jupyter Notebook_

<!-- pip install ipykernel - will install ipython, jupyter-core, jupyter-client -->

## Jupyter Notebook - Anaconda

Starten: Eintrag _Jupyter Notebook_ im Startmenü / Befehl `jupyter notebook` im Terminal

Stoppen: _Quit_ im rechten oberen Eck der Ordneransicht (üblicherweise unter http&#x3A;//localhost:8888/tree)

Python-Pakete: _notebook_ oder _jupyterlab_

## Jupyter Notebook - online

kostenlose online Jupyter Notebooks:

- _Binder_ (begrenzte Sessions): <https://jupyter.org/try>
- populäre öffentliche Notebooks auf _kaggle_: <https://www.kaggle.com/notebooks?sortBy=voteCount> (Login zum Ändern / Erstellen erforderlich)
- _Google Colab_: <https://colab.research.google.com> (Login erforderlich)

## Code schreiben und ausführen

Code in eine Zelle schreiben, z.B.

```py
import time
time.sleep(3)
"hello"
```

dann _Shift_ + _Enter_ drücken

## Code schreiben und ausführen

In IPython gibt es nummerierte Eingaben, z.B. `[1]`

Während eine Eingabe ausgewertet wird, wird `[*]` angezeigt

Wenn das letzte Statement in einer Zelle einen Wert ergibt, wird dies als Ausgabe angezeigt (um dies zu unterdrücken, schließe das letzte Statement mit einem Semikolon ab)

## Code schreiben und ausführen

Interface-Funktionalität (je nach Notebook-Typ verschieden):

- Zelle ausführen
- neu starten (vergisst bisherige Variablen und Zustand)
- alle Zellen ausführen / neu starten und alle Zellen ausführen
- Ausführung unterbrechen

## Code schreiben und ausführen

Auf die letzte Ausgabe zugreifen:

```py
print(_ * 3)
```

## Dokumentation via Markdown

Wir können Dokumentation über die standardisierte Sprache _Markdown_ hinzufügen:

Wechsle von _Code_ auf _Markdown_ und versuche den folgenden Code:

```md
# Heading

- item 1
- item 2
```

Zelle ausführen oder verlassen, um das Resultat anzuzeigen, doppelklicken zum erneuten Editieren

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Dokumentation

Dokumentation zu Funktion / Klasse / Modul / ... in einer Python Konsole anzeigen:

```py
help(str)
```

(Navigieren durch lange Ausgaben via _Enter_, Beenden via _Q_)

Shortcut in IPython / Jupyter:

```ipython
str?
```

## Tab-Vervollständigung und Wildcard-Ausdrücke

```ipython
*Error?
```

## Terminal-Befehle ausführen

IPython beinhaltet direkten Zugriff auf viele Terminal-Befehle, z.B. `ls`, `cd`, ...

Wir können beliebige Terminal-Befehle ausführen, indem wir ein `!` davor setzen

# NumPy: Überblick und Demo

## NumPy

_NumPy_: Library zur effizienten Verarbeitung numerischer Daten - basierend auf mehrdimensionalen Arrays

## NumPy: Überblick und Demo

```py
import numpy as np

# create a 2-dimensional array
iris = np.array([[5.1, 3.5, 1.4, 0.2],
                 [4.9, 3.0, 1.4, 0.2],
                 [4.7, 3.2, 1.3, 0.2],
                 [4.6, 3.1, 1.5, 0.2]])
```

## NumPy: Überblick und Demo

```py
# get the first column
col0 = iris[:, 0]  # [5.1, 4.9, 4.7, 4.6]
# get the second column
col1 = iris[:, 1]  # [3.5, 3.0, 3.2, 3.1]
```

## NumPy: Überblick und Demo

```py
# get the mean value of the first column
mean0 = col0.mean()  # 4.825

# divide the entries in the first column by the entries
# in the second column
quot = col0 / col1  # [1.46, 1.63, 1.47, 1.48]
```

# Pandas: Überblick und Demo

## Pandas

_Pandas_: Library für Datenanalyse, basiert auf NumPy

## Pandas: Überblick und Demo

Laden einer Tabelle (_DataFrame_) aus einer CSV-Datei:

```py
import pandas as pd

titanic = pd.read_csv(
    "https://public.opendatasoft.com/" +
        "explore/dataset/titanic-passengers/download",
    delimiter=";",
)
```

## Pandas: Überblick und Demo

Anzeigen von Daten:

```py
titanic
```

Anzeigen einer Spalte ("Series"):

```py
titanic["age"]
```

## Pandas: Überblick und Demo

Zusammenfassung aller numerischen Daten:

```py
titanic.describe()
```

Zusammenfassung einer Spalte ("Series"):

```py
titanic["age"].describe()
```

Durchschnitt einer Spalte ("Series"):

```py
titanic["age"].mean()
```

## Pandas: Überblick und Demo

Abfragen von Daten: Passagiere jünger als 1 Jahr

```py
titanic[titanic["age"] < 1]
```

## Pandas: Überblick und Demo

Vorbereiten der Daten für eine Machine Learning Übung:

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

# Pyplot: Überblick und Demo

## Pyplot: Überblick und Demo

_Pyplot_: Interface zum Darstellen von Daten - in matplotlib beinhaltet, aus _pandas_ aufrufbar

## Pyplot: Überblick und Demo

direktes Verwenden von pyplot:

```py
import matplotlib.pyplot as plt

plt.hist(
    titanic["pclass"],
    bins=[1, 2, 3, 4],
    align="left",
)
plt.xticks([1, 2, 3])
```

pyplot aus pandas heraus verwenden:

```py
titanic["pclass"].plot.hist(
    bins=[1, 2, 3, 4],
    align="left",
    xticks=[1, 2, 3],
)
```

## Pyplot: Überblick und Demo

```py
plt.boxplot(
    titanic["age"].dropna(),
    whis=[0, 100],
    labels=["age"]
)
```

## Pyplot: Überblick und Demo

```py
plt.hist(
    titanic["age"],
    bins=[0, 10, 20, 30, 40, 50, 60, 70, 80],
    color="C1",
)
```

# Scikit-learn: Überblick und Demo

## Scikit-learn: Überblick und Demo

Übung: Voraussagen von Überleben auf der Titanic basierend auf einer linearen Regression

## Scikit-learn: Überblick und Demo

"Trainieren" eines Modells:

```py
from sklearn.linear_model import LinearRegression

passenger_data = titanic_ml[["female", "pclass", "age", "sibsp"]]
survived = titanic_ml["survived"]

model = LinearRegression()

model.fit(passenger_data, survived)
```

## Scikit-learn: Überblick und Demo

Voraussagen der Überlebenschance für:

- 40 Jahre alte Frau in der ersten Klasse (ohne Geschwister oder Ehemann)
- 40 Jahre alter Mann in der dritten Klasse (ohne Geschwister oder Ehefrau)

```py
model.predict(
    np.array([
        [1, 1, 40, 0],
        [0, 3, 40, 0],
    ])
)
# [0.93, 0.03]
```

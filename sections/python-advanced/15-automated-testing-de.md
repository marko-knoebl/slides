# Automatisiertes Testen

## Automatisiertes Testen

warum:

- sicher stellen, dass Code wie erwünscht funktioniert
- einfacheres Refactoring / Ändern des Codes ohne Schaden zu verursachen
- Dokumentation von erwartetem Verhalten

## Testtools

**pytest**: Testlibrary mit einfachem Interface

**doctest**: Überprüft Codebeispiele in Docstrings

**unittest**: Testlibrary, die in der Standardlibrary beinhaltet ist

## Beispiel: zu testender Code

zu testender Code:

```py
# insertion_sort.py
def insertion_sort(unsorted):
    """Return a sorted version of a list."""
    sorted = []
    for new_item in unsorted:
        i = 0
        for sorted_item in sorted:
            if new_item >= sorted_item:
                i += 1
            else:
                break
        sorted.insert(i, new_item)
    return sorted
```

## assert

_assert_: Keyword, das sicherstellt, dass eine bestimmte Bedingung eintrifft

```py
assert isinstance(a, int)
assert a > 0
```

Bei Nichterfüllen wird ein _assertion error_ ausgelöst

## Beispiel: Menuelle Tests mit assert

```py
# insertion_sort_test.py
from insertion_sort import insertion_sort

assert insertion_sort([3, 2, 4, 1, 5]) == [1, 2, 3, 4, 5]
assert insertion_sort([1, 1, 1]) == [1, 1, 1]
assert insertion_sort([]) == []
```

Das Skript sollte ohne Fehler laufen

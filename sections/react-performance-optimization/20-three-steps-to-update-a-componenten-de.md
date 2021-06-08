# Drei Schritte beim Update einer Komponente

## Drei Schritte beim Update einer Komponente

1. build a virtual DOM representation of the new rendering ("render phase")
2. create a diff between the new and old virtual DOM ("reconciliation phase")
3. apply any changes in the virtual DOM to the real DOM ("commit phase")

## Drei Schritte beim Update einer Komponente

Beschleunigen der drei Schritte:

- Memoisieren aufwändiger Berechnungen (_useMemo_) - kann Schritt 1 beschleunigen
- Vermeiden unnötiger Komponenten-Rerenderings - überspringt alle Schritte, falls sich nichts geändert hat
- Verwenden der _key_-Property - hilft beim Finden des minimalen diffs

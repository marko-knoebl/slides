# Drei Schritte beim Update einer Komponente

## Drei Schritte beim Update einer Komponente

1. Erstellen einer virtuellen DOM-Repräsentation des neuen Renderings ("Render Phase")
2. Erstellen eines Diffs zwischen dem alten und dem neuen virtuellen DOM ("Reconcilliation Phase")
3. Anwenden der im virtuellen DOM gefundenen Änderungen auf das echte DOM ("Commit Phase")

## Drei Schritte beim Update einer Komponente

Beschleunigen der drei Schritte:

- Memoisieren aufwändiger Berechnungen (_useMemo_) - kann Schritt 1 beschleunigen
- Vermeiden unnötiger Komponenten-Rerenderings - überspringt alle Schritte, falls sich nichts geändert hat
- Verwenden der _key_-Property - hilft beim Finden des minimalen diffs

# Refs zum Ablegen von Objektreferenzen

## Refs zum Ablegen von Objektreferenzen

**refs**: ähnlich zu _State_, mit Unterschieden:

- Änderung eines Refs führt nicht zu einem Re-Rendering
- Der Wert eines Refs ist nie veraltet

## Refs zum Ablegen von Objektreferenzen

erster Use-Case:

Ablegen von Werten / Objektreferenzen, die das Rendering einer Komponente nicht beeinflussen:

- Timer IDs
- Request IDs
- WebSocket-Verbindungen
- ein PWA-Installationsdialog (siehe Abschnitt PWA)
- DOM-Elemente (siehe nächster Abschnitt "Ref Property zum Zugriff auf DOM-Elemente")

## Refs zum Ablegen von Objektreferenzen

zweiter Use-Case:

Speichern der aktuellsten Version eines States

## Refs zum Ablegen von Objektreferenzen

Auf eine Ref kann mittels `useRef` zugegriffen werden

Objekte werden in der `.current`-Property der Ref abgelegt

## Refs zum Ablegen von Objektreferenzen

ein Beispiel mit beiden Use-Cases:

```tsx
function StopWatch() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);
  const intervalId = useRef<number>(null);
  function start() {
    setTime(0);
    timeRef.current = 0;
    intervalId.current = setInterval(() => {
      timeRef.current++;
      setTime(timeRef.current);
    }, 1000);
  }
  function stop() {
    clearInterval(intervalId.current);
  }
  return <div>...</div>;
}
```

## Refs zum Ablegen von Objektreferenzen

Bemerkung: oft gibt es auch mögliche Implementierungen, die Refs vermeiden:

```jsx
function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [running]);
  return <div>...</div>;
}
```

# Refs zum Ablegen von Objektreferenzen

## Refs zum Ablegen von Objektreferenzen

In Funktionskomponenten können _Refs_ verwendet werden, um Werte / Objektreferenzen abzulegen, die sich mit der Zeit ändern, aber das Rendering einer Komponente nicht beeinflussen (sie gehören nicht in den State)

Beispiele dafür, was in Refs abgelegt wird:

- Timer IDs
- Request IDs
- WebSocket-Verbindungen
- ein PWA-Installationsdialog (siehe Abschnitt PWA)
- DOM-Elemente (siehe nächster Abschnitt "Ref Property zum Zugriff auf DOM-Elemente")

## Refs zum Ablegen von Objektreferenzen

Auf eine Ref kann mittels `useRef` zugegriffen werden

Objekte werden in der `.current`-Property der Ref abgelegt

## Refs zum Ablegen von Objektreferenzen

```tsx
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number>(null);
  const start = () => {
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  return <div>...</div>;
};
```

Bemerkung: dieses einfache Beispiel könnte auch ohne Refs mittels des Effect-Hooks umgesetzt werden

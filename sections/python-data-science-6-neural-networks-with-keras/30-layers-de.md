# Layer

## Arten von Layern

- Aktivierungslayer (Outputs: einzelnes Anwenden einer Aktivierungsfunktion auf jeden Input)
- Dense Layer (Outputs: individuelle gewichtete Summe aller Inputs)
- Convolution Layer (Outputs: gewichtete Summe benachbarter Inputs)
- Pooling Layer (Outputs: z.B. Maximum oder Durchschnitt benachbarter Inputs)
- Dropout Layer (für individuelle Outputs: entweder gleich dem Input oder 0)
- Normalisierungslayer (z.B. um das Mittel nahe bei 0 und die Standardabweichung nahe bei 1 zu behalten)

manche Layer (z.B. Dense, Convolution) können optional eine eingebaute (nachgeschaltete) Aktivierungsfunktion haben

## Layer in Keras

- `Activation`
- `Dense`
- `Conv1D`, `Conv2D`, `Conv3D`
- `MaxPooling1D`, `MaxPooling2D`, `MaxPooling3D`
- `Dropout`
- `BatchNormalization`

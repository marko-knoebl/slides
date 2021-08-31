# Internationalisierung

## Internationalisierung

Libraries:

- _react-i18next_ (basiert auf _i18next_)
- _react-intl_

## i18next - Grundlagen

```ts
// src/i18n.ts

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
```

## i18next - Grundlagen

Setup mit Inline-Daten:

```ts
// src/i18n.ts

i18next.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  resources: {
    en: {
      translation: { hello: 'Hello!', sign_in: 'Sign in' },
    },
    de: {
      translation: { hello: 'Hallo!', sign_in: 'Anmelden' },
    },
  },
});
```

## i18next - Grundlagen

Einbinden in das Projekt in _src/index.tsx_:

```ts
// ...
import './i18n';
// ...
```

Ausprobieren der Funktionalität in _src/index.tsx_:

```ts
import i18next from 'i18next';

console.log(i18next.t('hello'));
console.log(i18next.t('sign_in', { lng: 'de' }));
```

## i18next - Grundlagen

Zugriff auf die Übersetzungsfunktion mit einem Hook:

```ts
function SignInButton() {
  const { t } = useTranslation();

  return <button>{t('sign_in')}</button>;
}
```

## i18next - Vertiefende Themen

- Übersetzungsdateien und Hosting am Server
  - Laden via _suspense_
- Namespaces
- Interpolation
- Mehrzahl
- Ändern der Sprache

Ressourcen:

- <a href="https://www.robinwieruch.de/react-internationalization" target="_blank">Robin Wieruch: "React Internationalization with i18n"</a>
- <a href="https://www.i18next.com/translation-function/essentials" target="_blank">i18next.com: Translation function</a>

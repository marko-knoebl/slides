# Internationalization

## Internationalization

libraries:

- _react-i18next_ (based on _i18next_)
- _react-intl_

## i18next - basics

```ts
// src/i18n.ts

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
```

## i18next - basics

setup with inline data:

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

## i18next - basics

including in the project in _src/index.tsx_:

```ts
// ...
import './i18n';
// ...
```

testing its functionality:

```ts
import i18next from 'i18next';

console.log(i18next.t('hello'));
console.log(i18next.t('sign_in', { lng: 'de' }));
```

## i18next - basics

accessing the translation function via a hook:

```ts
function SignInButton() {
  const { t } = useTranslation();

  return <button>{t('sign_in')}</button>;
}
```

## i18next - topics in depth

- translation files hosted on the server
  - loading via _suspense_
- namespaces
- interpolation
- plural
- changing languages

resources:

- <a href="https://www.robinwieruch.de/react-internationalization" target="_blank">Robin Wieruch: "React Internationalization with i18n"</a>
- <a href="https://www.i18next.com/translation-function/essentials" target="_blank">i18next.com: Translation function</a>

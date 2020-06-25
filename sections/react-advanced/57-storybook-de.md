# Storybook

## Storybook

Ermöglicht das Erstellen isolierter Komponentendemos

Beispiele:

- <https://storybookjs.netlify.com/official-storybook/>
- <https://airbnb.io/react-dates/>

## Setup

in einem Create-React-App Projekt:

```bash
npx -p @storybook/cli sb init --type react_scripts
```

in einem regulären React Projekt:

```bash
npx -p @storybook/cli sb init --type react
```

## Ausführen

```bash
npm run storybook
```

## Stories schreiben

Beispiel: _Rating.stories.js_

```jsx
import React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const oneStar = () => <Rating stars={1} />;
export const fiveStars = () => <Rating stars={5} />;
```

## Addons

siehe <https://storybook.js.org/addons/>:

- _@storybook/knobs_ (Komponentenprops)
- _@storybook/actions_ (Komponentenevents)
- ...

Addons werden in _.storybook/main.js_ konfiguriert

## Knobs Addon

für Komponentenprops:

```jsx
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Rating',
  component: Rating,
  decorators: [withKnobs],
};

export const variableStars = () => {
  const rating = number('rating', 1);
  return <Rating stars={rating} />;
};
```

## Actions Addon

für Komponentenevents:

```jsx
import { action } from '@storybook/addon-actions';

export const oneStarInteraction = () => (
  <Rating
    stars={1}
    onChange={action('rating change triggered')}
  />
);
```

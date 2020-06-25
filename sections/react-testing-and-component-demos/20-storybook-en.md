# Storybook

## Storybook

Enables the creation of isolated component demos

examples:

- <https://storybookjs.netlify.com/official-storybook/>
- <https://airbnb.io/react-dates/>

## Setup

in a Create-React-App project:

```bash
npx -p @storybook/cli sb init --type react_scripts
```

in a regular React project:

```bash
npx -p @storybook/cli sb init --type react
```

## Running

```bash
npm run storybook
```

## Stories

basic example: _Rating.stories.js_

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

see <https://storybook.js.org/addons/>:

- _@storybook/knobs_ (component props)
- _@storybook/actions_ (component events)
- ...

Addons are configured via _.storybook/main.js_

## Knobs addon

for component props:

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

## Actions addon

for component events:

```jsx
import { action } from '@storybook/addon-actions';

export const oneStarInteraction = () => (
  <Rating
    stars={1}
    onChange={action('rating change triggered')}
  />
);
```

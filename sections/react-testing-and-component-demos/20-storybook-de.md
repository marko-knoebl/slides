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

## Stories

einfaches Beispiel: _Rating.stories.js_

```jsx
import Rating from './Rating';

export default { title: 'Rating', component: Rating };

export const OneStar = () => <Rating stars={1} />;
export const FiveStars = () => <Rating stars={5} />;
```

## Stories

Beispiel mit Template, props (controls) und events (actions)

```jsx
import Rating from './Rating';

export default { title: 'Rating', component: Rating };

const RatingStoryTemplate = (args) => <Rating {...args} />;

export const OneStar = RatingStoryTemplate.bind({});
OneStar.args = { stars: 1 };
export const FiveStars = RatingStoryTemplate.bind({});
FiveStars.args = { stars: 5 };
```

## Stories

Beispiel mit TypeScript:

```ts
import { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
```

```tsx
const RatingStoryTemplate: Story<ComponentProps<
  typeof Rating
>> = (args) => <Rating {...args} />;
```

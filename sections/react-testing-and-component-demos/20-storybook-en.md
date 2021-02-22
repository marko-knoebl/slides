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
import Rating from './Rating';

export default { title: 'Rating', component: Rating };

export const OneStar = () => <Rating stars={1} />;
export const FiveStars = () => <Rating stars={5} />;
```

## Stories

example with template, props (controls) and events (actions)

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

props with TypeScript:

```ts
import { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
```

```tsx
const RatingStoryTemplate: Story<ComponentProps<
  typeof Rating
>> = (args) => <Rating {...args} />;
```

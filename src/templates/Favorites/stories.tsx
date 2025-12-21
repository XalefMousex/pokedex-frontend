import { type Meta, type StoryObj } from '@storybook/react';

import { Favorites } from '.';

const meta = {
  component: Favorites,
  title: 'Templates/Favorites',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Favorites>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

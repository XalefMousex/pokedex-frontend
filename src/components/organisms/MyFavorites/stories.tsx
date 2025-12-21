import { type Meta, type StoryObj } from '@storybook/react';

import { MyFavorites } from '.';

const meta = {
  component: MyFavorites,
  title: 'Organisms/MyFavorites',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MyFavorites>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

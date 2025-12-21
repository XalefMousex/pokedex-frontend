import { type Meta, type StoryObj } from '@storybook/react';

import { Search } from '.';

const meta = {
  component: Search,
  title: 'Molecules/Search',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Search>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

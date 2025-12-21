import { type Meta, type StoryObj } from '@storybook/react';

import { NavBadge } from '.';

const meta = {
  component: NavBadge,
  title: 'Atoms/NavBadge',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavBadge>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    children: 'Success',
  },
};

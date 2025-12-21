import { type Meta, type StoryObj } from '@storybook/react';

import { NavUser } from '.';

const meta = {
  component: NavUser,
  title: 'Molecules/NavUser',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavUser>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

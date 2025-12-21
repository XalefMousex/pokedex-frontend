import { type Meta, type StoryObj } from '@storybook/react';

import { Command } from '.';

const meta = {
  component: Command,
  title: 'Atoms/Command',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Command>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

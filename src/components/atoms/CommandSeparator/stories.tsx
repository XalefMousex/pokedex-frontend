import { type Meta, type StoryObj } from '@storybook/react';

import { CommandSeparator } from '.';

const meta = {
  component: CommandSeparator,
  title: 'Atoms/CommandSeparator',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandSeparator>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

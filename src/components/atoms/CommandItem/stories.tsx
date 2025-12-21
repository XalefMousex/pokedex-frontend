import { type Meta, type StoryObj } from '@storybook/react';

import { CommandItem } from '.';

const meta = {
  component: CommandItem,
  title: 'Atoms/CommandItem',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandItem>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

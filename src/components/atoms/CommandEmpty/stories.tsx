import { type Meta, type StoryObj } from '@storybook/react';

import { CommandEmpty } from '.';

const meta = {
  component: CommandEmpty,
  title: 'Atoms/CommandEmpty',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandEmpty>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

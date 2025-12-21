import { type Meta, type StoryObj } from '@storybook/react';

import { CommandInput } from '.';

const meta = {
  component: CommandInput,
  title: 'Molecules/CommandInput',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandInput>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

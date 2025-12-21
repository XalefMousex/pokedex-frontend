import { type Meta, type StoryObj } from '@storybook/react';

import { CommandDialog } from '.';

const meta = {
  component: CommandDialog,
  title: 'Molecules/CommandDialog',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandDialog>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

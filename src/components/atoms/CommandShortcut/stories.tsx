import { type Meta, type StoryObj } from '@storybook/react';

import { CommandShortcut } from '.';

const meta = {
  component: CommandShortcut,
  title: 'Atoms/CommandShortcut',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandShortcut>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

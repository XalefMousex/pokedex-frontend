import { type Meta, type StoryObj } from '@storybook/react';

import { DropdownMenuShortcut } from '.';

const meta = {
  component: DropdownMenuShortcut,
  title: 'Atoms/DropdownMenuShortcut',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenuShortcut>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

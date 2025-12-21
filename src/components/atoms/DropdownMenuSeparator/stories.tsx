import { type Meta, type StoryObj } from '@storybook/react';

import { DropdownMenuSeparator } from '.';

const meta = {
  component: DropdownMenuSeparator,
  title: 'Atoms/DropdownMenuSeparator',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenuSeparator>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { DropdownMenuLabel } from '.';

const meta = {
  component: DropdownMenuLabel,
  title: 'Atoms/DropdownMenuLabel',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenuLabel>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

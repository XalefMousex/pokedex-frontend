import { type Meta, type StoryObj } from '@storybook/react';

import { DropdownMenuGroup } from '.';

const meta = {
  component: DropdownMenuGroup,
  title: 'Atoms/DropdownMenuGroup',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenuGroup>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

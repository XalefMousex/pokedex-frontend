import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarSeparator } from '.';

const meta = {
  component: SidebarSeparator,
  title: 'Atoms/SidebarSeparator',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarSeparator>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuSub } from '.';

const meta = {
  component: SidebarMenuSub,
  title: 'Atoms/SidebarMenuSub',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuSub>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

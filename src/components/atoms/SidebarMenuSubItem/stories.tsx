import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuSubItem } from '.';

const meta = {
  component: SidebarMenuSubItem,
  title: 'Atoms/SidebarMenuSubItem',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuSubItem>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

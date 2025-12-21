import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuCollapsedDropdown } from '.';

const meta = {
  component: SidebarMenuCollapsedDropdown,
  parameters: {
    layout: 'centered',
  },
  title: 'Molecules/SidebarMenuCollapsedDropdown',
} satisfies Meta<typeof SidebarMenuCollapsedDropdown>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    href: '#',
    item: { badge: 5, title: 'Menu Link' },
  },
};

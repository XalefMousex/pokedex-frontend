import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuLink } from '.';

const meta = {
  component: SidebarMenuLink,
  title: 'Atoms/SidebarMenuLink',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuLink>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    href: '#',
    children: 'Menu Link',
    item: { badge: 5, title: 'Menu Link' },
  },
};

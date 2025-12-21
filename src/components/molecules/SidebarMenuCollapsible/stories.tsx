import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuCollapsible } from '.';

const meta = {
  component: SidebarMenuCollapsible,
  title: 'Molecules/SidebarMenuCollapsible',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuCollapsible>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    href: '#',
    item: { title: 'Collapsible Item' },
  },
};

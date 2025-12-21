import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuButton } from '.';

const meta = {
  component: SidebarMenuButton,
  title: 'Atoms/SidebarMenuButton',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuButton>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

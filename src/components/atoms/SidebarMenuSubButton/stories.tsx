import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuSubButton } from '.';

const meta = {
  component: SidebarMenuSubButton,
  title: 'Atoms/SidebarMenuSubButton',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuSubButton>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

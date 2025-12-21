import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenuItem } from '.';

const meta = {
  component: SidebarMenuItem,
  title: 'Atoms/SidebarMenuItem',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenuItem>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

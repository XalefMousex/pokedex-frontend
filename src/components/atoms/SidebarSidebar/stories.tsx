import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarSidebar } from '.';

const meta = {
  component: SidebarSidebar,
  title: 'Atoms/SidebarSidebar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarSidebar>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

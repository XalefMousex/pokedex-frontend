import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarContent } from '.';

const meta = {
  component: SidebarContent,
  title: 'Atoms/SidebarContent',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarContent>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

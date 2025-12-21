import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarHeader } from '.';

const meta = {
  component: SidebarHeader,
  title: 'Atoms/SidebarHeader',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarHeader>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

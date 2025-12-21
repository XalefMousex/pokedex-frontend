import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarGroup } from '.';

const meta = {
  component: SidebarGroup,
  title: 'Atoms/SidebarGroup',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarGroup>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarFooter } from '.';

const meta = {
  component: SidebarFooter,
  title: 'Atoms/SidebarFooter',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarFooter>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

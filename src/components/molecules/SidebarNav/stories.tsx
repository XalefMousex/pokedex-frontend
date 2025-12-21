import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarNav } from '.';

const meta = {
  component: SidebarNav,
  title: 'Molecules/SidebarNav',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarNav>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarMenu } from '.';

const meta = {
  component: SidebarMenu,
  title: 'Atoms/SidebarMenu',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarMenu>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

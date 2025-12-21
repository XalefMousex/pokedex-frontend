import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarTrigger } from '.';

const meta = {
  component: SidebarTrigger,
  title: 'Atoms/SidebarTrigger',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarTrigger>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

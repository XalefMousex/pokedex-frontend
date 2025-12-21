import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarInset } from '.';

const meta = {
  component: SidebarInset,
  title: 'Atoms/SidebarInset',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarInset>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

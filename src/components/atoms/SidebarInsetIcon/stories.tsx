import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarInsetIcon } from '.';

const meta = {
  component: SidebarInsetIcon,
  title: 'Atoms/SidebarInsetIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarInsetIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

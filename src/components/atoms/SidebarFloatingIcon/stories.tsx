import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarFloatingIcon } from '.';

const meta = {
  component: SidebarFloatingIcon,
  title: 'Atoms/SidebarFloatingIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarFloatingIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

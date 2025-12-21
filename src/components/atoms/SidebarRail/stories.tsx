import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarRail } from '.';

const meta = {
  component: SidebarRail,
  title: 'Atoms/SidebarRail',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarRail>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

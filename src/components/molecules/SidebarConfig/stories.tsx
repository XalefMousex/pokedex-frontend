import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarConfig } from '.';

const meta = {
  component: SidebarConfig,
  title: 'Molecules/SidebarConfig',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarConfig>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

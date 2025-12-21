import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarGroupLabel } from '.';

const meta = {
  component: SidebarGroupLabel,
  title: 'Atoms/SidebarGroupLabel',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarGroupLabel>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

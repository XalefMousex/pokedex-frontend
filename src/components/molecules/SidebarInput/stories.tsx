import { type Meta, type StoryObj } from '@storybook/react';

import { SidebarInput } from '.';

const meta = {
  component: SidebarInput,
  title: 'Molecules/SidebarInput',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SidebarInput>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

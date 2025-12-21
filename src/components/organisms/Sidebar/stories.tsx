import { type Meta, type StoryObj } from '@storybook/react';

import { Sidebar } from '.';

const meta = {
  component: Sidebar,
  title: 'Organisms/Sidebar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

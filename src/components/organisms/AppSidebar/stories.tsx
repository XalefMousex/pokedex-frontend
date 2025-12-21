import { type Meta, type StoryObj } from '@storybook/react';

import { AppSidebar } from '.';

const meta = {
  component: AppSidebar,
  title: 'Organisms/AppSidebar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppSidebar>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

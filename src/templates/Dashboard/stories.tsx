import { type Meta, type StoryObj } from '@storybook/react';

import { Dashboard } from '.';

const meta = {
  component: Dashboard,
  title: 'Templates/Dashboard',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dashboard>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

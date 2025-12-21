import { type Meta, type StoryObj } from '@storybook/react';

import { Notifications } from '.';

const meta = {
  component: Notifications,
  title: 'Molecules/Notifications',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Notifications>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

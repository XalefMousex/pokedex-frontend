import { type Meta, type StoryObj } from '@storybook/react';

import { NotificationIcon } from '.';

const meta = {
  component: NotificationIcon,
  title: 'Atoms/NotificationIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NotificationIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

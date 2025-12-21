import { type Meta, type StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta = {
  component: Avatar,
  title: 'Atoms/Avatar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

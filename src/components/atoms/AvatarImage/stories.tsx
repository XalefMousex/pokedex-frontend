import { type Meta, type StoryObj } from '@storybook/react';

import { AvatarImage } from '.';

const meta = {
  component: AvatarImage,
  title: 'Atoms/AvatarImage',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarImage>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

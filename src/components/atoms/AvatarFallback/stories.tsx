import { type Meta, type StoryObj } from '@storybook/react';

import { AvatarFallback } from '.';

const meta = {
  component: AvatarFallback,
  title: 'Atoms/AvatarFallback',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarFallback>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

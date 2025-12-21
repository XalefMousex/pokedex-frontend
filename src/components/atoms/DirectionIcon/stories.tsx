import { type Meta, type StoryObj } from '@storybook/react';

import { DirectionIcon } from '.';

const meta = {
  component: DirectionIcon,
  title: 'Atoms/DirectionIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DirectionIcon>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    direction: 'ltr',
  },
};

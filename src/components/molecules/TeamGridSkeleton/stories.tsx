import { type Meta, type StoryObj } from '@storybook/react';

import { TeamGridSkeleton } from '.';

const meta = {
  component: TeamGridSkeleton,
  title: 'Molecules/TeamGridSkeleton',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TeamGridSkeleton>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

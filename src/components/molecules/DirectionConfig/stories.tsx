import { type Meta, type StoryObj } from '@storybook/react';

import { DirectionConfig } from '.';

const meta = {
  component: DirectionConfig,
  title: 'Molecules/DirectionConfig',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DirectionConfig>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

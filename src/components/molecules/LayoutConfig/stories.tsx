import { type Meta, type StoryObj } from '@storybook/react';

import { LayoutConfig } from '.';

const meta = {
  component: LayoutConfig,
  title: 'Molecules/LayoutConfig',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LayoutConfig>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeConfig } from '.';

const meta = {
  component: ThemeConfig,
  title: 'Molecules/ThemeConfig',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeConfig>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

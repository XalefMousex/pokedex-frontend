import { type Meta, type StoryObj } from '@storybook/react';

import { AlertDescription } from '.';

const meta = {
  component: AlertDescription,
  title: 'Atoms/AlertDescription',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertDescription>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

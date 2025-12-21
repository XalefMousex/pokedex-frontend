import { type Meta, type StoryObj } from '@storybook/react';

import { Alert } from '.';

const meta = {
  component: Alert,
  title: 'Atoms/Alert',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Alert>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

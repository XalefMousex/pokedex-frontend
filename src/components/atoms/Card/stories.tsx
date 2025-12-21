import { type Meta, type StoryObj } from '@storybook/react';

import { Card } from '.';

const meta = {
  component: Card,
  title: 'Atoms/Card',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { CollapsibleTrigger } from '.';

const meta = {
  component: CollapsibleTrigger,
  title: 'Atoms/CollapsibleTrigger',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CollapsibleTrigger>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { Label } from '.';

const meta = {
  component: Label,
  title: 'Atoms/Label',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Label>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

import { type Meta, type StoryObj } from '@storybook/react';

import { Input } from '.';

const meta = {
  component: Input,
  title: 'Molecules/Input',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

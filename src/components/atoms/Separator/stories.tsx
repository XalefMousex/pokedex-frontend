import { type Meta, type StoryObj } from '@storybook/react';

import { Separator } from '.';

const meta = {
  component: Separator,
  title: 'Atoms/Separator',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Separator>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

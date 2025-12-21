import { type Meta, type StoryObj } from '@storybook/react';

import { ScrollBar } from '.';

const meta = {
  component: ScrollBar,
  title: 'Atoms/ScrollBar',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollBar>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

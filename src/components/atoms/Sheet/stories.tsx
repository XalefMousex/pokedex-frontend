import { type Meta, type StoryObj } from '@storybook/react';

import { Sheet } from '.';

const meta = {
  component: Sheet,
  title: 'Atoms/Sheet',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sheet>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

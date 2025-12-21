import { type Meta, type StoryObj } from '@storybook/react';

import { Kbd } from '.';

const meta = {
  component: Kbd,
  title: 'Atoms/Kbd',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Kbd>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

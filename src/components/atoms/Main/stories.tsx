import { type Meta, type StoryObj } from '@storybook/react';

import { Main } from '.';

const meta = {
  component: Main,
  title: 'Atoms/Main',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Main>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

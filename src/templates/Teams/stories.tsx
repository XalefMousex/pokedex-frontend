import { type Meta, type StoryObj } from '@storybook/react';

import { Teams } from '.';

const meta = {
  component: Teams,
  title: 'Templates/Teams',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Teams>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

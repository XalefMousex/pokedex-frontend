import { type Meta, type StoryObj } from '@storybook/react';

import { Collapsible } from '.';

const meta = {
  component: Collapsible,
  title: 'Atoms/Collapsible',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Collapsible>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

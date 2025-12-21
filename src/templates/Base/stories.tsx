import { type Meta, type StoryObj } from '@storybook/react';

import { Base } from '.';

const meta = {
  component: Base,
  title: 'Templates/Base',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Base>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    children: 'Base Template',
  },
};

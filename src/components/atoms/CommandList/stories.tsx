import { type Meta, type StoryObj } from '@storybook/react';

import { CommandList } from '.';

const meta = {
  component: CommandList,
  title: 'Atoms/CommandList',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandList>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

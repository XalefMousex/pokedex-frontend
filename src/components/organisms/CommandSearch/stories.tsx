import { type Meta, type StoryObj } from '@storybook/react';

import { CommandSearch } from '.';

const meta = {
  component: CommandSearch,
  title: 'Organisms/CommandSearch',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandSearch>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

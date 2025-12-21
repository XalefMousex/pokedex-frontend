import { type Meta, type StoryObj } from '@storybook/react';

import { CommandGroup } from '.';

const meta = {
  component: CommandGroup,
  title: 'Atoms/CommandGroup',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CommandGroup>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

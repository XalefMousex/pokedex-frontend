import { type Meta, type StoryObj } from '@storybook/react';

import { NavGroups } from '.';

const meta = {
  component: NavGroups,
  title: 'Organisms/NavGroups',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavGroups>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

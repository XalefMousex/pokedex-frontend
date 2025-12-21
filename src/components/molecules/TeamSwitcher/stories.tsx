import { type Meta, type StoryObj } from '@storybook/react';

import { TeamSwitcher } from '.';

const meta = {
  component: TeamSwitcher,
  title: 'Molecules/TeamSwitcher',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TeamSwitcher>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

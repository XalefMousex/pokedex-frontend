import { type Meta, type StoryObj } from '@storybook/react';

import { MyTeams } from '.';

const meta = {
  component: MyTeams,
  title: 'Organisms/MyTeams',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MyTeams>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

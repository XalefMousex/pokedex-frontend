import { type Meta, type StoryObj } from '@storybook/react';

import { TeamBuilder } from '.';

const meta = {
  component: TeamBuilder,
  title: 'Molecules/TeamBuilder',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TeamBuilder>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    onCloseAction: () => {},
    team: {
      id: '1',
      user_id: '1',
      name: 'My Team',
      team_pokemons: [],
      active: true,
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    },
  },
};

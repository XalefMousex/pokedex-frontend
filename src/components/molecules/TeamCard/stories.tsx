import { type Meta, type StoryObj } from '@storybook/react';

import { TeamCard } from '.';

const meta = {
  component: TeamCard,
  title: 'Molecules/TeamCard',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TeamCard>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    onEdit: () => {},
    onDelete: () => {},
    team: {
      id: '1',
      user_id: '1',
      team_pokemons: [],
      name: 'Team Rocket',
      active: true,
      updated_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    },
  },
};

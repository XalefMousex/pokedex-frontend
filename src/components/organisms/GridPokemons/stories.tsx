import { type Meta, type StoryObj } from '@storybook/react';

import { GridPokemons } from '.';

const meta = {
  component: GridPokemons,
  title: 'Organisms/GridPokemons',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GridPokemons>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {},
};

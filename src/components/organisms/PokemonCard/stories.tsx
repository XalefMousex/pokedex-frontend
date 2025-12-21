import { type Meta, type StoryObj } from '@storybook/react';

import { PokemonCard } from '.';

const meta = {
  component: PokemonCard,
  title: 'Organisms/PokemonCard',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PokemonCard>;

export default meta;

type StoryProps = StoryObj<typeof meta>;

export const Default: StoryProps = {
  args: {
    id: 1,
    index: 0,
    name: 'Bulbasaur',
    types: ['Grass', 'Poison'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
    pokemon: {
      id: 132,
      height: 3,
      weight: 40,
      name: 'ditto',
      types: [
        {
          type: {
            name: 'normal',
          },
        },
      ],
      moves: [
        {
          move: {
            name: 'transform',
            url: 'https://pokeapi.co/api/v2/move/144/',
          },
        },
      ],
      abilities: [
        {
          ability: {
            name: 'imposter',
          },
        },
        {
          ability: {
            name: 'limber',
          },
        },
      ],
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
          },
          official_artwork: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
          },
        },
      },
      stats: [
        {
          base_stat: 48,
          stat: {
            name: 'hp',
          },
        },
        {
          base_stat: 48,
          stat: {
            name: 'attack',
          },
        },
        {
          base_stat: 48,
          stat: {
            name: 'defense',
          },
        },
        {
          base_stat: 48,
          stat: {
            name: 'special-attack',
          },
        },
        {
          base_stat: 48,
          stat: {
            name: 'special-defense',
          },
        },
        {
          base_stat: 48,
          stat: {
            name: 'speed',
          },
        },
      ],
    },
  },
};

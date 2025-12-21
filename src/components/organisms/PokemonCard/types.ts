import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  index: number;
  types: string[];
  pokemon?: PokemonModel;
} & Omit<ComponentProps<'div'>, 'id'>;

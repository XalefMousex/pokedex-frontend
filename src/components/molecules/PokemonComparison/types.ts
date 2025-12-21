import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type PokemonComparisonProps = {
  onClose: () => void;
  pokemons: PokemonModel[];
} & ComponentProps<'div'>;

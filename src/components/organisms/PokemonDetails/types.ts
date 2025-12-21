import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type PokemonDetailsProps = {
  pokemon: PokemonModel;
} & ComponentProps<'div'>;

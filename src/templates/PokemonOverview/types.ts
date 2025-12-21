import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type PokemonOverviewProps = {
  pokemon: PokemonModel;
} & ComponentProps<'div'>;

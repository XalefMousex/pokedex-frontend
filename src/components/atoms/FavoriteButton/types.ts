import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type FavoriteButtonProps = {
  pokemon: PokemonModel;
} & ComponentProps<'div'>;

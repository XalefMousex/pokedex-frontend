import { type ComponentProps } from 'react';

import { type PokemonModel } from 'graphql/generated';

export type AddToTeamButtonProps = {
  pokemon: PokemonModel;
} & ComponentProps<'div'>;

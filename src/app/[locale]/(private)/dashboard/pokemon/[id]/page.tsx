import { server } from 'graphql/client/server';
import { QUERY_POKEMON_BY_ID } from 'graphql/queries/pokemon/pokemon-by-id';
import {
  type PokemonByIdQuery,
  type PokemonByIdQueryVariables,
} from 'graphql/generated';

import { PokemonOverview } from 'templates/PokemonOverview';

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const parameters = await params;

  const { pokemonById } = await server<
    PokemonByIdQuery,
    PokemonByIdQueryVariables
  >(QUERY_POKEMON_BY_ID, {
    pokemonById: Number(parameters.id),
  });

  return <PokemonOverview pokemon={pokemonById} />;
};

export default Page;

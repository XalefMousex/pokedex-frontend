import { gql } from 'graphql-request';

export const MUTATION_CREATE_MY_FAVORITE_POKEMON = gql`
  mutation CreateFavoritePokemon(
    $favoritePokemon: CreateFavoritePokemonInput!
  ) {
    createFavoritePokemon(favoritePokemon: $favoritePokemon) {
      active
      created_at
      id
      pokemon_id
      updated_at
      user_id
    }
  }
`;

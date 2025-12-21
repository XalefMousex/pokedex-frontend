import { gql } from 'graphql-request';

export const MUTATION_DELETE_MY_FAVORITE_POKEMON = gql`
  mutation DeleteFavoritePokemon(
    $favoritePokemon: DeleteFavoritePokemonInput!
  ) {
    deleteFavoritePokemon(favoritePokemon: $favoritePokemon) {
      active
      created_at
      id
      pokemon_id
      updated_at
      user_id
    }
  }
`;

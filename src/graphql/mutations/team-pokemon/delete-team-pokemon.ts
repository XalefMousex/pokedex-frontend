import { gql } from 'graphql-request';

export const MUTATION_DELETE_TEAM_POKEMON = gql`
  mutation DeleteTeamPokemon($teamPokemon: DeleteTeamPokemonInput!) {
    deleteTeamPokemon(teamPokemon: $teamPokemon) {
      active
      created_at
      id
      pokemon_id
      position
      team_id
      updated_at
    }
  }
`;

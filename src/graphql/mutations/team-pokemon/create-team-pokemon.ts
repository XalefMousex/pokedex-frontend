import { gql } from 'graphql-request';

export const MUTATION_CREATE_TEAM_POKEMON = gql`
  mutation CreateTeamPokemon($teamPokemon: CreateTeamPokemonInput!) {
    createTeamPokemon(teamPokemon: $teamPokemon) {
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

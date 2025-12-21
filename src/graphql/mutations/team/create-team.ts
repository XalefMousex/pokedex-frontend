import { gql } from 'graphql-request';

export const MUTATION_CREATE_TEAM = gql`
  mutation CreateTeam($team: CreateTeamInput!) {
    createTeam(team: $team) {
      active
      created_at
      id
      name
      updated_at
      user_id
    }
  }
`;

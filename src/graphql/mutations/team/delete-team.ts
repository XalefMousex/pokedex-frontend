import { gql } from 'graphql-request';

export const MUTATION_DELETE_TEAM = gql`
  mutation DeleteTeam($team: DeleteTeamInput!) {
    deleteTeam(team: $team) {
      active
      created_at
      id
      name
      updated_at
      user_id
    }
  }
`;

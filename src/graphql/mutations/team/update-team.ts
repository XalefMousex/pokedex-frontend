import { gql } from 'graphql-request';

export const MUTATION_UPDATE_TEAM = gql`
  mutation UpdateTeam($team: UpdateTeamInput!) {
    updateTeam(team: $team) {
      active
      created_at
      id
      name
      updated_at
      user_id
    }
  }
`;

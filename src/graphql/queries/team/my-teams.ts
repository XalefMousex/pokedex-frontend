import { gql } from 'graphql-request';

export const QUERY_MY_TEAMS = gql`
  query MyTeams($order: TeamOrderByWithRelationInput, $where: TeamWhereInput) {
    myTeams(order: $order, where: $where) {
      active
      created_at
      id
      name
      team_pokemons {
        active
        created_at
        id
        pokemon {
          # Identificação
          id
          name

          # Dimensões
          height
          weight

          # Tipos
          types {
            type {
              name
            }
          }

          # Habilidades
          abilities {
            ability {
              name
            }
          }

          # Status base
          stats {
            base_stat
            stat {
              name
            }
          }

          # Movimentos
          moves {
            move {
              name
              url
            }
          }

          # Sprites
          sprites {
            front_default
            other {
              home {
                front_default
              }
              official_artwork {
                front_default
              }
            }
          }
        }
        pokemon_id
        position
        team_id
        updated_at
      }
      updated_at
      user_id
    }
  }
`;

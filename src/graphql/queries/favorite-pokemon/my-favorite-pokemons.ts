import { gql } from 'graphql-request';

export const QUERY_MY_FAVORITE_POKEMONS = gql`
  query MyFavoritePokemons(
    $order: FavoritePokemonOrderByWithRelationInput
    $where: FavoritePokemonWhereInput
  ) {
    myFavoritePokemons(order: $order, where: $where) {
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
      updated_at
      user_id
    }
  }
`;

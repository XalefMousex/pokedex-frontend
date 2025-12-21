import { gql } from 'graphql-request';

export const QUERY_POKEMON_BY_NAME = gql`
  query PokemonByName($name: String!) {
    pokemonByName(name: $name) {
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
  }
`;

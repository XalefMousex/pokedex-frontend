import { client } from 'graphql/client/base';
import { QUERY_MY_FAVORITE_POKEMONS } from 'graphql/queries/favorite-pokemon/my-favorite-pokemons';
import { MUTATION_CREATE_MY_FAVORITE_POKEMON } from 'graphql/mutations/favorite-pokemon/create-favorite-pokemon';
import { MUTATION_DELETE_MY_FAVORITE_POKEMON } from 'graphql/mutations/favorite-pokemon/delete-favorite-pokemon';
import {
  type PokemonModel,
  type MyFavoritePokemonsQuery,
  type DeleteFavoritePokemonMutation,
  type CreateFavoritePokemonMutation,
  type MyFavoritePokemonsQueryVariables,
  type DeleteFavoritePokemonMutationVariables,
  type CreateFavoritePokemonMutationVariables,
} from 'graphql/generated';

import { uuidv7 } from 'uuidv7';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type FavoritesStateProps = {
  isLoading: boolean;
  favorites: MyFavoritePokemonsQuery['myFavoritePokemons'];
};

type FavoritesActionsProps = {
  loadFavorites: () => Promise<void>;
  isFavorite: (pokemonId: number) => boolean;
  removeFavorite: (pokemonId: number) => Promise<void>;
  addFavorite: (pokemon: PokemonModel) => Promise<void>;
  toggleFavorite: (pokemon: PokemonModel) => Promise<void>;
};

type FavoritesStoreProps = FavoritesStateProps & FavoritesActionsProps;

export const useFavoritesStore = create<FavoritesStoreProps>()(
  devtools(
    immer((set, get) => ({
      favorites: [],
      isLoading: false,

      isFavorite: pokemonId =>
        get().favorites.some(favorite => favorite.pokemon.id === pokemonId),

      toggleFavorite: async pokemon => {
        const isFav = get().isFavorite(pokemon.id);

        if (isFav) {
          get().removeFavorite(pokemon.id);
        }

        if (!isFav) {
          get().addFavorite(pokemon);
        }
      },

      loadFavorites: async () => {
        set({ isLoading: true });

        const { myFavoritePokemons } = await client.request<
          MyFavoritePokemonsQuery,
          MyFavoritePokemonsQueryVariables
        >(QUERY_MY_FAVORITE_POKEMONS, {});

        set({
          isLoading: false,
          favorites: myFavoritePokemons,
        });
      },

      removeFavorite: async pokemonId => {
        const myFavorite = get().favorites.find(
          favorite => favorite.pokemon.id === pokemonId,
        );

        const { deleteFavoritePokemon } = await client.request<
          DeleteFavoritePokemonMutation,
          DeleteFavoritePokemonMutationVariables
        >(MUTATION_DELETE_MY_FAVORITE_POKEMON, {
          favoritePokemon: { where: { id: myFavorite?.id } },
        });

        set(state => {
          state.favorites = state.favorites.filter(
            favorite =>
              favorite.pokemon.id !== deleteFavoritePokemon.pokemon_id,
          );
        });
      },

      addFavorite: async pokemon => {
        const { createFavoritePokemon } = await client.request<
          CreateFavoritePokemonMutation,
          CreateFavoritePokemonMutationVariables
        >(MUTATION_CREATE_MY_FAVORITE_POKEMON, {
          favoritePokemon: { pokemon_id: pokemon.id },
        });

        set(state => {
          const hasExists = state.favorites.some(
            favorite => favorite.pokemon.id === pokemon.id,
          );

          if (hasExists) return;

          state.favorites.push({
            id: uuidv7(),
            pokemon,
            pokemon_id: pokemon.id,
            user_id: createFavoritePokemon.user_id,
            active: true,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          });
        });
      },
    })),
    {
      name: 'favorites-store',
    },
  ),
);

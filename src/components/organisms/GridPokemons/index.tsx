'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useInfinitePaginationPokemonsQuery } from 'graphql/generated';

import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTeamsStore } from 'stores/useTeamsStore';
import { useFavoritesStore } from 'stores/useFavoritesStore';

import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

import { Input } from 'components/molecules/Input';
import { PokemonCard } from 'components/organisms/PokemonCard';

import { cn } from 'utils/tailwind/cn';

import { gridPokemonsSchema } from './schema';
import { type GridPokemonsProps, type GridPokemonsSchemaProps } from './types';

export const GridPokemons = ({ className, ...props }: GridPokemonsProps) => {
  const { register } = useForm<GridPokemonsSchemaProps>({
    defaultValues: {
      search: '',
    },
    resolver: zodResolver(gridPokemonsSchema),
  });

  const { loadTeams } = useTeamsStore();
  const { loadFavorites } = useFavoritesStore();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfinitePaginationPokemonsQuery(
      {
        limit: 15,
        offset: 0,
      },
      {
        initialPageParam: {
          limit: 15,
          offset: 0,
        },
        getNextPageParam: lastPage => {
          const next = lastPage?.paginationPokemons?.next;

          if (!next) return undefined;

          const url = new URL(next);

          const offset = Number(url.searchParams.get('offset'));
          const limit = Number(url.searchParams.get('limit'));

          return {
            limit,
            offset,
          };
        },
      },
    );

  const loadMoreRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, Boolean(hasNextPage));

  const pokemons = data?.pages.flatMap(
    page => page?.paginationPokemons?.results || [],
  );

  useEffect(() => {
    loadTeams();
    loadFavorites();
  }, [loadTeams, loadFavorites]);

  return (
    <div
      className={cn(
        `
          flex flex-col gap-8 p-0
          lg:p-6
        `,
        className,
      )}
      {...props}
    >
      <div
        className={`
          flex flex-col items-center justify-between
          md:flex-row
        `}
      >
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1
              className={cn(
                'text-3xl font-bold transition-colors',
                `
                  text-shark-950
                  dark:text-white
                `,
              )}
            >
              Descubra todos os Pokémon
            </h1>
            <p
              className={cn(
                'mt-1 transition-colors',
                `
                  text-neutral-500
                  dark:text-neutral-400
                `,
              )}
            >
              Explore todas as gerações
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-md">
        <Input
          {...register('search')}
          className="p-2"
          placeholder="Pesquise por nome ou número"
        />
      </div>

      <div
        className={`
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        `}
      >
        {pokemons?.map((pokemon, index) => (
          <PokemonCard
            image={
              pokemon.sprites.other.official_artwork.front_default ??
              pokemon.sprites.front_default ??
              ''
            }
            index={index}
            id={pokemon.id}
            key={pokemon.id}
            pokemon={pokemon}
            name={pokemon.name}
            types={pokemon.types.map(({ type }) => type.name)}
          />
        ))}
      </div>

      <div className="h-10" ref={loadMoreRef} />

      {isFetchingNextPage && (
        <p className="mb-10 text-center text-neutral-500">
          Carregando mais Pokémon...
        </p>
      )}
    </div>
  );
};

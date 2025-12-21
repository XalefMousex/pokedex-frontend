'use client';

import { useTranslations } from 'next-intl';

import { useState, useEffect } from 'react';

import { type PokemonModel } from 'graphql/generated';

import { GitCompare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTeamsStore } from 'stores/useTeamsStore';
import { useFavoritesStore } from 'stores/useFavoritesStore';

import { Button } from 'components/atoms/Button';
import { PokemonCard } from 'components/organisms/PokemonCard';
import { PokemonComparison } from 'components/molecules/PokemonComparison';

import { cn } from 'utils/tailwind/cn';

import { type MyFavoritesProps } from './types';

export const MyFavorites = ({ className, ...props }: MyFavoritesProps) => {
  const t = useTranslations('favorites');

  const { loadTeams } = useTeamsStore();
  const { favorites, isLoading, loadFavorites } = useFavoritesStore();

  const [isShowComparison, setIsShowComparison] = useState(false);

  const [selectedForComparison, setSelectedForComparison] = useState<
    PokemonModel[]
  >([]);

  const handleCompare = () => {
    if (selectedForComparison.length >= 2) {
      setIsShowComparison(true);
    }
  };

  const toggleSelection = (pokemon: PokemonModel) => {
    if (
      selectedForComparison.find(
        currentPokemon => currentPokemon.id === pokemon.id,
      )
    ) {
      setSelectedForComparison(
        selectedForComparison.filter(
          currentPokemon => currentPokemon.id !== pokemon.id,
        ),
      );

      return;
    }

    if (selectedForComparison.length < 4) {
      setSelectedForComparison([...selectedForComparison, pokemon]);
    }
  };

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
          className="flex w-full items-center justify-between"
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
              {t('title')}
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
              {favorites.length === 0 && 'Você ainda não tem favoritos'}

              {favorites.length > 0 &&
                t('subtitle', { number: favorites.length })}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-4">
            {selectedForComparison.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-subtitle"
              >
                {selectedForComparison.length} selecionados
              </motion.div>
            )}

            <Button
              className="gap-2"
              onClick={handleCompare}
              icon={<GitCompare className="size-4" />}
              isDisabled={selectedForComparison.length < 2}
            >
              {t('button')}
            </Button>
          </div>
        </motion.div>
      </div>

      {!isLoading && favorites.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl py-20 text-center"
        >
          <div className="mb-4 text-6xl">💫</div>
          <p className="mb-2 text-xl text-main">Você ainda não tem favoritos</p>

          <p className="text-sm text-subtitle">
            Comece explorando a Pokédex e adicionando seus favoritos!
          </p>
        </motion.div>
      )}

      <div
        className={`
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        `}
      >
        {favorites.map((favPokemon, index) => {
          const isSelected = selectedForComparison.find(
            item => item.id === favPokemon.pokemon.id,
          );

          return (
            <motion.div
              key={favPokemon.id}
              className="relative"
              animate={{ scale: 1, opacity: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className={cn(
                  `
                    absolute inset-0 z-10 cursor-pointer rounded-xl border-4
                    transition-all
                  `,
                  {
                    'border-primary-500 bg-primary-500/10': isSelected,
                    'border-transparent hover:border-primary-500/50':
                      !isSelected,
                  },
                )}
                type="button"
                aria-label="button"
                onClick={() => toggleSelection(favPokemon.pokemon)}
              />
              <PokemonCard
                image={
                  favPokemon.pokemon.sprites.other.official_artwork
                    .front_default ??
                  favPokemon.pokemon.sprites.front_default ??
                  ''
                }
                index={index}
                id={favPokemon.pokemon.id}
                pokemon={favPokemon.pokemon}
                name={favPokemon.pokemon.name}
                types={favPokemon.pokemon.types.map(type => type.type.name)}
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {isShowComparison && (
          <PokemonComparison
            pokemons={selectedForComparison}
            onClose={() => setIsShowComparison(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

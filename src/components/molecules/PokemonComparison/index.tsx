'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { X } from 'lucide-react';
import { motion } from 'framer-motion';

import { Badge } from 'components/atoms/Badge';
import { SimpleButton } from 'components/atoms/SimpleButton';

import { typeBadges, typeColors } from 'utils/mappers/pokemon';

import { type PokemonComparisonProps } from './types';

export const PokemonComparison = ({
  onClose,
  pokemons,
}: PokemonComparisonProps) => {
  const t = useTranslations('pokemon.type');

  if (pokemons.length === 0) return null;

  const statNames = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];

  return (
    <motion.div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-white/80 p-4
        backdrop-blur-sm
        dark:bg-background-950/80
      `}
      onClick={onClose}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={`
          max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border
          bg-white shadow-2xl
          dark:border-shark-950 dark:bg-background-950
        `}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.9 }}
        initial={{ y: 20, scale: 0.9 }}
        onClick={event => event.stopPropagation()}
      >
        <div
          className={`
            sticky top-0 z-10 flex items-center justify-between border-b
            bg-white/30 p-6 backdrop-blur-lg
            dark:border-shark-950 dark:bg-shark-950/30
          `}
        >
          <h2 className="text-2xl font-bold">Comparação de Favoritos</h2>

          <SimpleButton size="icon" variant="ghost" onClick={onClose}>
            <X className="size-5" />
          </SimpleButton>
        </div>

        <div className="p-6">
          <div
            className={`
              grid grid-cols-1 gap-6
              md:grid-cols-2
            `}
          >
            {pokemons.map(pokemon => {
              const primaryType = pokemon.types[0].type.name;
              const bgColor = typeColors[primaryType] || '#A8A878';

              return (
                <motion.div
                  className={`
                    overflow-hidden rounded-xl bg-gray-100
                    dark:bg-shark-950/20
                  `}
                  key={pokemon.id}
                  animate={{ scale: 1, opacity: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                >
                  <div
                    className={`
                      relative flex h-48 items-center justify-center p-4
                    `}
                    style={{
                      background: `linear-gradient(135deg, ${bgColor}20 0%, ${bgColor}40 100%)`,
                    }}
                  >
                    <Image
                      src={
                        pokemon.sprites.other.official_artwork.front_default ??
                        pokemon.sprites.front_default ??
                        ''
                      }
                      width={160}
                      height={160}
                      alt={pokemon.name}
                      className="object-contain drop-shadow-xl"
                    />

                    <div
                      className={`
                        absolute top-3 right-3 rounded-full bg-white/80 px-2
                        py-1 text-xs font-bold text-main backdrop-blur-sm
                        dark:bg-background-950/50
                      `}
                    >
                      #{pokemon.id.toString().padStart(3, '0')}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold capitalize">
                      {pokemon.name}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {pokemon.types.map(({ type }) => (
                        <Badge key={type.name} color={typeBadges[type.name]}>
                          {t(type.name as any)}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {pokemon.stats.map((stat, index) => {
                        const maxStat = 255;
                        const percentage = (stat.base_stat / maxStat) * 100;

                        return (
                          <div key={stat.stat.name}>
                            <div className="mb-1 flex justify-between text-sm">
                              <span className="font-medium text-main">
                                {statNames[index]}
                              </span>

                              <span className="text-subtitle">
                                {stat.base_stat}
                              </span>
                            </div>

                            <div
                              className={`
                                h-2 overflow-hidden rounded-full bg-gray-200
                                dark:bg-shark-950
                              `}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: bgColor }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                          </div>
                        );
                      })}

                      <div
                        className={`
                          mt-4 border-t pt-2
                          dark:border-shark-950
                        `}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-main">
                            Total Base Stats
                          </span>
                          <span className="font-bold text-primary-500">gg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

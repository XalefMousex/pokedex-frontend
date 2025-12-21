'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import { Card } from 'components/atoms/Card';
import { Badge } from 'components/atoms/Badge';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { FavoriteButton } from 'components/atoms/FavoriteButton';
import { AddToTeamButton } from 'components/molecules/AddToTeamButton';

import { typeBadges, typeColors } from 'utils/mappers/pokemon';

import { type PokemonDetailsProps } from './types';

export const PokemonDetails = ({ pokemon, ...props }: PokemonDetailsProps) => {
  const t = useTranslations('pokemon.type');

  const router = useRouter();

  const primaryType = pokemon.types[0].type.name;

  const bgColor = typeColors[primaryType];

  return (
    <div className="container mx-auto px-4 py-8" {...props}>
      <SimpleButton
        variant="ghost"
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 size-4" />
        Voltar
      </SimpleButton>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        initial={{ y: 20, opacity: 0 }}
      >
        <Card className="overflow-hidden pt-0">
          <div
            style={{
              background: `linear-gradient(135deg, ${bgColor}30 0%, ${bgColor}60 100%)`,
            }}
            className="relative flex h-80 items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Image
                src={
                  pokemon.sprites.other.official_artwork.front_default ||
                  pokemon.sprites.front_default ||
                  '/placeholder.svg' ||
                  '/placeholder.svg' ||
                  '/placeholder.svg' ||
                  '/placeholder.svg'
                }
                width={300}
                height={300}
                alt={pokemon.name}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            <div
              className={`
                absolute top-3 right-3 rounded-full bg-white/80 px-4 py-2
                text-xs font-bold backdrop-blur-sm
                dark:bg-background-950/50
              `}
            >
              #{pokemon.id.toString().padStart(3, '0')}
            </div>

            <div className="absolute top-4 left-4">
              <FavoriteButton pokemon={pokemon} />
            </div>
          </div>

          <div className="p-8">
            <div className="mb-4 flex items-start justify-between">
              <motion.h1
                transition={{ delay: 0.3 }}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -20, opacity: 0 }}
                className="text-4xl font-bold capitalize"
              >
                {pokemon.name}
              </motion.h1>

              <div>
                <AddToTeamButton pokemon={pokemon} />
              </div>
            </div>

            <motion.div
              transition={{ delay: 0.4 }}
              className="mb-8 flex gap-3"
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -20, opacity: 0 }}
            >
              {pokemon.types.map(({ type }) => (
                <Badge
                  key={type.name}
                  color={typeBadges[type.name]}
                  className="px-3 py-1.5 text-sm"
                >
                  {t(type.name as any)}
                </Badge>
              ))}
            </motion.div>

            <div
              className={`
                grid gap-8
                md:grid-cols-2
              `}
            >
              <motion.div
                transition={{ delay: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
              >
                <h2 className="mb-4 text-2xl font-bold">Informações</h2>
                <div className="space-y-3">
                  <div
                    className={`
                      flex justify-between rounded-lg bg-gray-100 p-3
                      dark:bg-shark-950/40
                    `}
                  >
                    <span className="font-semibold">Altura</span>
                    <span>{pokemon.height / 10}m</span>
                  </div>

                  <div
                    className={`
                      flex justify-between rounded-lg bg-gray-100 p-3
                      dark:bg-shark-950/40
                    `}
                  >
                    <span className="font-semibold">Peso</span>
                    <span>{pokemon.weight / 10}kg</span>
                  </div>

                  <div
                    className={`
                      rounded-lg bg-gray-100 p-3
                      dark:bg-shark-950/40
                    `}
                  >
                    <span className="mb-2 block font-semibold">
                      Habilidades
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {pokemon.abilities.map(ability => (
                        <Badge key={ability.ability.name}>
                          {ability.ability.name.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                transition={{ delay: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
              >
                <h2 className="mb-4 text-2xl font-bold">Estatísticas</h2>
                <div className="space-y-3">
                  {pokemon.stats.map((stat, index) => {
                    const percentage = (stat.base_stat / 255) * 100;

                    return (
                      <div key={stat.stat.name}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="font-medium capitalize">
                            {stat.stat.name.replace('-', ' ')}
                          </span>
                          <span className="font-bold">{stat.base_stat}</span>
                        </div>
                        <div
                          className={`
                            h-3 overflow-hidden rounded-full bg-gray-100
                            dark:bg-shark-950/40
                          `}
                        >
                          <motion.div
                            transition={{
                              duration: 1,
                              delay: 0.7 + index * 0.1,
                            }}
                            initial={{ width: 0 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: bgColor }}
                            animate={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

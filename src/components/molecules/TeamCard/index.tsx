'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';
import { Edit3, Trash2 } from 'lucide-react';

import { Card } from 'components/atoms/Card';
import { Badge } from 'components/atoms/Badge';
import { SimpleButton } from 'components/atoms/SimpleButton';

import { typeBadges } from 'utils/mappers/pokemon';

import { type TeamCardProps } from './types';

export const TeamCard = ({ team, onEdit, onDelete }: TeamCardProps) => {
  const t = useTranslations('pokemon.type');

  const types = team.team_pokemons.flatMap(currentPokemon =>
    currentPokemon.pokemon.types.map(type => type.type.name),
  );

  const uniqueTypes = Array.from(new Set(types));

  const totalStats = team.team_pokemons.reduce(
    (sum, currentPokemon) =>
      sum +
      currentPokemon.pokemon.stats.reduce(
        (statSum, stat) => statSum + stat.base_stat,
        0,
      ),
    0,
  );

  const avgStats =
    team.team_pokemons.length > 0
      ? Math.round(totalStats / team.team_pokemons.length)
      : 0;

  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      exit={{ opacity: 0, scale: 0.9 }}
      animate={{ scale: 1, opacity: 1 }}
      initial={{ opacity: 0, scale: 0.9 }}
      layout
    >
      <Card
        className={`
          overflow-hidden transition-colors
          hover:border-primary-500
        `}
      >
        <div className="px-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-bold text-balance">
                {team.name}
              </h3>

              <p className="text-sm text-subtitle">
                {team.team_pokemons.length}/6 Pokémon
              </p>
            </div>

            <div className="flex gap-1">
              <SimpleButton size="icon" variant="ghost" onClick={onEdit}>
                <Edit3 className="size-4" />
              </SimpleButton>

              <SimpleButton
                className={`
                  text-danger-500
                  dark:text-danger-500
                `}
                size="icon"
                variant="ghost"
                onClick={onDelete}
              >
                <Trash2 className="size-4" />
              </SimpleButton>
            </div>
          </div>

          {team.team_pokemons.length > 0 ? (
            <>
              <div className="mb-4 grid grid-cols-3 gap-2">
                {team.team_pokemons.slice(0, 6).map(currentPokemon => (
                  <div
                    className={`
                      relative flex aspect-square items-center justify-center
                      rounded-lg bg-gray-100
                      dark:bg-shark-950/50
                    `}
                    key={currentPokemon.pokemon.id}
                  >
                    <Image
                      src={
                        currentPokemon.pokemon.sprites.other.official_artwork
                          .front_default ?? '/placeholder.svg'
                      }
                      alt={currentPokemon.pokemon.name}
                      className="w-full object-contain p-2"
                      fill
                    />
                  </div>
                ))}
                {Array.from({ length: 6 - team.team_pokemons.length }).map(
                  (_, index) => (
                    <div
                      className={`
                        aspect-square rounded-lg bg-gray-100
                        dark:bg-shark-950/50
                      `}
                      key={`empty-${index}`}
                    />
                  ),
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-subtitle">Stats Médios</span>
                  <span className="font-bold">{avgStats}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {uniqueTypes.map(type => (
                    <Badge key={type} color={typeBadges[type]}>
                      {t(type as any)}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-subtitle">
              <p className="text-sm text-subtitle">Time vazio</p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

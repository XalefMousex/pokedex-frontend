'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from 'framer-motion';

import { Card } from 'components/atoms/Card';
import { Badge } from 'components/atoms/Badge';
import { FavoriteButton } from 'components/atoms/FavoriteButton';
import { AddToTeamButton } from 'components/molecules/AddToTeamButton';

import { typeBadges, typeColors } from 'utils/mappers/pokemon';

import { type PokemonCardProps } from './types';

export const PokemonCard = ({
  id,
  name,
  image,
  types,
  index,
  pokemon,
}: PokemonCardProps) => {
  const t = useTranslations('pokemon.type');

  const primaryType = types[0];
  const bgColor = typeColors[primaryType] ?? '#A8A878';

  const MAX_DELAY = 0.2;
  const delay = Math.min(index * 0.03, MAX_DELAY);

  return (
    <motion.div
      transition={{
        delay,
        duration: 0.25,
        ease: 'easeOut',
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className={`gap-4 overflow-hidden pt-0 pb-3`}>
        <Link href={`/dashboard/pokemon/${id}`}>
          <div
            style={{
              background: `linear-gradient(135deg, ${bgColor}20 0%, ${bgColor}40 100%)`,
            }}
            className="relative flex h-48 items-center justify-center p-4"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                alt={name}
                width={160}
                height={160}
                src={image || '/placeholder.svg'}
                className="object-contain drop-shadow-xl"
              />
            </motion.div>

            <div
              className={`
                absolute top-3 right-3 rounded-full bg-white/80 px-2 py-1
                text-xs font-bold backdrop-blur-sm
                dark:bg-background-950/50
              `}
            >
              #{id.toString().padStart(3, '0')}
            </div>

            {pokemon && (
              <div className="absolute top-3 left-3">
                <FavoriteButton pokemon={pokemon} />
              </div>
            )}
          </div>
        </Link>

        <div className="px-4">
          <Link href={`/pokemon/${id}`}>
            <h3 className="mb-2 text-xl font-bold text-main capitalize">
              {name}
            </h3>
          </Link>

          <div className="mb-3 flex flex-wrap gap-2">
            {types.map(type => (
              <Badge key={type} color={typeBadges[type]}>
                {t(type as any)}
              </Badge>
            ))}
          </div>

          {pokemon && (
            <div
              className={`
                z-40 space-y-2 border-t border-gray-300 pt-2
                dark:border-shark-950
              `}
            >
              <AddToTeamButton pokemon={pokemon} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

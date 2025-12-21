'use client';

import React, { type MouseEvent } from 'react';

import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useFavoritesStore } from 'stores/useFavoritesStore';

import { cn } from 'utils/tailwind/cn';

import { type FavoriteButtonProps } from './types';

export const FavoriteButton = ({ pokemon, className }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();

  const isMyFavorite = isFavorite(pokemon.id);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(pokemon);
  };

  return (
    <motion.button
      className={cn(
        `
          relative cursor-pointer rounded-full bg-white/80 p-2 backdrop-blur-sm
          transition-colors
          hover:bg-white
          dark:bg-background-950/50 dark:hover:bg-background-950
        `,
        className,
      )}
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      <AnimatePresence mode="wait">
        {isMyFavorite && (
          <motion.div
            key="favorited"
            exit={{ scale: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 15, type: 'spring', stiffness: 500 }}
          >
            <Heart className="size-5 fill-red-500 text-red-500" />
          </motion.div>
        )}

        {!isMyFavorite && (
          <motion.div
            key="not-favorited"
            exit={{ scale: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 15, type: 'spring', stiffness: 500 }}
          >
            <Heart className="size-5 text-main" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMyFavorite && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            className="absolute inset-0 rounded-full border-2 border-red-500"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

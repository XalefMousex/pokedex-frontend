'use client';

import { useTranslations } from 'next-intl';

import { useState } from 'react';

import { Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTeamsStore } from 'stores/useTeamsStore';

import { Card } from 'components/atoms/Card';
import { Dialog } from 'components/atoms/Dialog';
import { DialogTitle } from 'components/atoms/DialogTitle';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { DialogHeader } from 'components/atoms/DialogHeader';
import { DialogContent } from 'components/atoms/DialogContent';
import { DialogDescription } from 'components/atoms/DialogDescription';

import { cn } from 'utils/tailwind/cn';

import { type AddToTeamButtonProps } from './types';

export const AddToTeamButton = ({ pokemon }: AddToTeamButtonProps) => {
  const t = useTranslations('pokemon-card');

  const { teams, addPokemonToTeam } = useTeamsStore();

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [addedTeamId, setAddedTeamId] = useState<null | string>(null);

  const handleAddToTeam = async (teamId: string) => {
    const validation = await addPokemonToTeam(teamId, pokemon);

    if (validation.isValid) {
      setAddedTeamId(teamId);
      setError(null);
      setTimeout(() => {
        setAddedTeamId(null);
        setIsOpen(false);
      }, 1000);
    } else {
      setError(validation.errors[0]);
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <>
      <SimpleButton
        className={`
          w-full gap-2
          disabled:cursor-not-allowed disabled:opacity-50
        `}
        size="sm"
        variant="outline"
        disabled={teams.length === 0}
        onClick={() => setIsOpen(true)}
      >
        <Plus className="size-4" />
        {t('button-time')}
      </SimpleButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('dialog-title')}</DialogTitle>
            <DialogDescription>
              {t('dialog-description', { name: pokemon.name })}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-2">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  className={`
                    rounded-lg bg-danger-500/10 px-4 py-2 text-sm
                    text-danger-500
                  `}
                  exit={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: -10, opacity: 0 }}
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {teams.map(team => {
              const isAdded = addedTeamId === team.id;
              const isFull = team.team_pokemons.length >= 6;

              const hasAlready = team.team_pokemons.some(
                currentPokemon => currentPokemon.pokemon.id === pokemon.id,
              );

              return (
                <motion.div
                  key={team.id}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    onClick={() =>
                      !isFull &&
                      !hasAlready &&
                      !isAdded &&
                      handleAddToTeam(team.id)
                    }
                    className={cn(`cursor-pointer p-4 transition-all`, {
                      'hover:border-primary-500': !isFull && !hasAlready,
                      'cursor-not-allowed opacity-50': isFull || hasAlready,
                      'border-green-500 bg-green-50 dark:bg-green-950': isAdded,
                    })}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{team.name}</h3>
                        <p className="text-sm text-subtitle">
                          {team.team_pokemons.length}/6 Pokémon
                          {hasAlready && ` • ${t('team-already-added')}`}
                          {isFull && ` • ${t('team-complete')}`}
                        </p>
                      </div>
                      {isAdded && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="rounded-full bg-green-500 p-1"
                        >
                          <Check className="size-5 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

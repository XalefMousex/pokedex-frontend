'use client';

import { useState, useEffect } from 'react';

import { Users, PlusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTeamsStore } from 'stores/useTeamsStore';

import { Card } from 'components/atoms/Card';
import { Button } from 'components/atoms/Button';
import { Dialog } from 'components/atoms/Dialog';
import { Input } from 'components/molecules/Input';
import { TeamCard } from 'components/molecules/TeamCard';
import { DialogTitle } from 'components/atoms/DialogTitle';
import { DialogHeader } from 'components/atoms/DialogHeader';
import { DialogTrigger } from 'components/atoms/DialogTrigger';
import { DialogContent } from 'components/atoms/DialogContent';
import { TeamBuilder } from 'components/molecules/TeamBuilder';
import { DialogDescription } from 'components/atoms/DialogDescription';
import { TeamGridSkeleton } from 'components/molecules/TeamGridSkeleton';

import { cn } from 'utils/tailwind/cn';

import { type MyTeamsProps } from './types';

export const MyTeams = ({ className, ...props }: MyTeamsProps) => {
  const {
    teams,
    isLoading,
    loadTeams,
    createTeam,
    deleteTeam,
    currentTeam,
    setCurrentTeam,
  } = useTeamsStore();

  const [newTeamName, setNewTeamName] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleCreateTeam = async () => {
    if (newTeamName.trim()) {
      const team = await createTeam(newTeamName);

      setCurrentTeam(team);
      setNewTeamName('');
      setIsCreateDialogOpen(false);
    }
  };

  const handleDeleteTeam = (teamId: string) => {
    if (confirm('Tem certeza que deseja excluir este time?')) {
      deleteTeam(teamId);
    }
  };

  useEffect(() => {
    loadTeams();
  }, [loadTeams]);

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
              Meus Times
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
              Crie e gerencie seus times de Pokémon com até 6 membros cada
            </p>
          </div>

          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button icon={<PlusIcon size={16} />}>Criar Time</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Novo Time</DialogTitle>

                <DialogDescription>
                  Dê um nome ao seu time e configure as regras de composição
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 flex flex-col gap-4">
                <Input
                  onKeyDown={event =>
                    event.key === 'Enter' && handleCreateTeam()
                  }
                  animate={false}
                  value={newTeamName}
                  labelType="default"
                  label="Nome do Time"
                  placeholder="Ex: Campeões da Liga"
                  onChange={event => setNewTeamName(event.target.value)}
                />
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsCreateDialogOpen(false)}
                >
                  Cancelar
                </Button>

                <Button
                  onClick={handleCreateTeam}
                  isDisabled={!newTeamName.trim()}
                >
                  Criar Time
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {currentTeam && (
        <TeamBuilder
          team={currentTeam}
          onCloseAction={() => setCurrentTeam(null)}
        />
      )}

      {!currentTeam && (
        <>
          {isLoading && <TeamGridSkeleton count={3} />}

          {!isLoading && teams.length === 0 && (
            <Card
              className={`
                flex flex-col items-center justify-center gap-4 p-12 text-center
              `}
            >
              <Users className="size-10 text-subtitle" />

              <div>
                <h2 className="mb-2 text-2xl font-bold">
                  Nenhum time criado ainda
                </h2>

                <p className="mb-4 text-subtitle">
                  Crie seu primeiro time e comece a adicionar Pokémon
                </p>

                <Button
                  className="gap-2"
                  icon={<PlusIcon className="size-5" />}
                  onClick={() => setIsCreateDialogOpen(true)}
                >
                  Criar Primeiro Time
                </Button>
              </div>
            </Card>
          )}

          {!isLoading && teams.length > 0 && (
            <div
              className={`
                grid gap-6
                md:grid-cols-2
                lg:grid-cols-3
              `}
            >
              <AnimatePresence>
                {teams.map(team => (
                  <TeamCard
                    team={team}
                    key={team.id}
                    onEdit={() => setCurrentTeam(team)}
                    onDelete={() => handleDeleteTeam(team.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </>
      )}
    </div>
  );
};

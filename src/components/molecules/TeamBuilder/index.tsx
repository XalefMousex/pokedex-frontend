'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useState } from 'react';

import { type MyTeamsQuery } from 'graphql/generated';

import { motion, Reorder, useDragControls } from 'framer-motion';
import { X, Plus, Share2, AlertCircle, GripVertical } from 'lucide-react';

import { useTeamsStore } from 'stores/useTeamsStore';

import { Card } from 'components/atoms/Card';
import { Badge } from 'components/atoms/Badge';
import { Alert } from 'components/atoms/Alert';
import { Input } from 'components/molecules/Input';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { AlertDescription } from 'components/atoms/AlertDescription';

import { typeBadges } from 'utils/mappers/pokemon';

import { type TeamBuilderProps } from './types';

type TeamPokemonCardProps = {
  onRemove: () => void;
  teamPokemon: MyTeamsQuery['myTeams'][number]['team_pokemons'][number];
};

const TeamPokemonCard = ({ onRemove, teamPokemon }: TeamPokemonCardProps) => {
  const t = useTranslations('pokemon.type');

  const dragControls = useDragControls();
  const { pokemon } = teamPokemon;

  const totalStats = pokemon.stats.reduce(
    (sum, stat) => sum + stat.base_stat,
    0,
  );

  return (
    <Reorder.Item
      value={teamPokemon}
      dragListener={false}
      className="relative"
      dragControls={dragControls}
    >
      <motion.div
        className={`
          flex cursor-move items-center gap-4 rounded-lg border bg-gray-200/20
          p-4
          dark:border-shark-950 dark:bg-shark-950/20
        `}
        whileHover={{ scale: 1.01 }}
      >
        <div
          className={`
            cursor-grab
            active:cursor-grabbing
          `}
          onPointerDown={event => dragControls.start(event)}
        >
          <GripVertical className="size-6 text-subtitle" />
        </div>

        <div className="flex flex-1 items-center gap-4">
          <div className="relative size-20">
            <Image
              src={
                pokemon.sprites.other.official_artwork.front_default ??
                '/placeholder.svg'
              }
              alt={pokemon.name}
              className="size-full object-contain"
              fill
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>

            <div className="mt-1 flex gap-2">
              {pokemon.types.map(({ type }) => (
                <Badge key={type.name} color={typeBadges[type.name]}>
                  {t(type.name as any)}
                </Badge>
              ))}
            </div>

            <p className="mt-1 text-sm text-subtitle">
              Total Stats: {totalStats}
            </p>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-subtitle">
              #{pokemon.id.toString().padStart(3, '0')}
            </div>
          </div>
        </div>

        <SimpleButton
          className={`
            text-danger-500
            dark:text-danger-500
          `}
          size="icon"
          variant="ghost"
          onClick={onRemove}
        >
          <X className="size-5" />
        </SimpleButton>
      </motion.div>
    </Reorder.Item>
  );
};

export const TeamBuilder = ({ team, onCloseAction }: TeamBuilderProps) => {
  const { updateTeam, reorderTeam, removePokemonFromTeam } = useTeamsStore();

  const [teamName, setTeamName] = useState(team.name);
  const [isSharing, setIsSharing] = useState(false);
  const [pokemons, setPokemons] = useState(team.team_pokemons);

  const handleNameChange = (name: string) => {
    setTeamName(name);
    updateTeam(team.id, { name });
  };

  const handleRemovePokemon = async (pokemonId: number) => {
    await removePokemonFromTeam(team.id, pokemonId);
  };

  const handleReorder = (
    newOrder: MyTeamsQuery['myTeams'][number]['team_pokemons'],
  ) => {
    setPokemons(newOrder);
    reorderTeam(team.id, newOrder);
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/teams/share?data=${btoa(
      JSON.stringify({
        name: team.name,
        pokemons: team.team_pokemons.map(pokemon => pokemon.pokemon.id),
      }),
    )}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsSharing(true);
      setTimeout(() => setIsSharing(false), 2000);
    } catch {
      alert('Falha ao copiar link');
    }
  };

  const stats = team.team_pokemons.reduce((accumulator, p) => {
    const total = p.pokemon.stats.reduce(
      (sum, stat) => sum + stat.base_stat,
      0,
    );

    return accumulator + total;
  }, 0);

  const avgStats =
    team.team_pokemons.length > 0
      ? Math.round(stats / team.team_pokemons.length)
      : 0;

  return (
    <motion.div
      className="space-y-6"
      exit={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Input
            className={`
              border-none bg-transparent px-0 text-2xl font-bold
              focus-visible:ring-0 focus-visible:ring-offset-0
            `}
            value={teamName}
            placeholder="Nome do Time"
            onChange={event => handleNameChange(event.target.value)}
          />

          <p className="mt-1 text-sm text-subtitle">
            {team.team_pokemons.length}/6 Pokémon • Stats Médios: {avgStats}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <SimpleButton
            size="sm"
            variant="outline"
            onClick={handleShare}
            className="gap-2 bg-transparent"
          >
            <Share2 className="size-4" />
            {isSharing ? 'Link copiado!' : 'Compartilhar'}
          </SimpleButton>

          {onCloseAction && (
            <SimpleButton size="icon" variant="ghost" onClick={onCloseAction}>
              <X className="size-5" />
            </SimpleButton>
          )}
        </div>
      </div>

      {team.team_pokemons.length === 0 && (
        <Alert>
          <AlertCircle className="size-4" />

          <AlertDescription>
            Seu time está vazio. Adicione Pokémon clicando no botão + nos cards
            da página principal ou favoritos.
          </AlertDescription>
        </Alert>
      )}

      {team.team_pokemons.length > 0 && (
        <Reorder.Group
          axis="y"
          values={pokemons}
          className="space-y-3"
          onReorder={handleReorder}
        >
          {team.team_pokemons.map(teamPokemon => (
            <TeamPokemonCard
              teamPokemon={teamPokemon}
              key={teamPokemon.pokemon.id}
              onRemove={() => handleRemovePokemon(teamPokemon.pokemon.id)}
            />
          ))}
        </Reorder.Group>
      )}

      {team.team_pokemons.length < 6 && (
        <Card
          className={`
            flex flex-col items-center justify-center gap-2 border-2
            border-dashed p-8 text-subtitle
          `}
        >
          <Plus className="size-8" />
          <p className="text-sm">Adicione mais Pokémon ao seu time</p>
        </Card>
      )}
    </motion.div>
  );
};

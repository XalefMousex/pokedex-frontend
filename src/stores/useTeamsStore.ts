import { client } from 'graphql/client/base';
import { QUERY_MY_TEAMS } from 'graphql/queries/team/my-teams';
import { MUTATION_CREATE_TEAM } from 'graphql/mutations/team/create-team';
import { MUTATION_DELETE_TEAM } from 'graphql/mutations/team/delete-team';
import { MUTATION_UPDATE_TEAM } from 'graphql/mutations/team/update-team';
import { MUTATION_CREATE_TEAM_POKEMON } from 'graphql/mutations/team-pokemon/create-team-pokemon';
import { MUTATION_DELETE_TEAM_POKEMON } from 'graphql/mutations/team-pokemon/delete-team-pokemon';
import {
  type PokemonModel,
  type MyTeamsQuery,
  type UpdateTeamMutation,
  type DeleteTeamMutation,
  type CreateTeamMutation,
  type MyTeamsQueryVariables,
  type DeleteTeamPokemonMutation,
  type CreateTeamPokemonMutation,
  type UpdateTeamMutationVariables,
  type DeleteTeamMutationVariables,
  type CreateTeamMutationVariables,
  type DeleteTeamPokemonMutationVariables,
  type CreateTeamPokemonMutationVariables,
} from 'graphql/generated';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TeamValidationProps = {
  isValid: boolean;
  errors: string[];
};

type TeamsStateProps = {
  isLoading: boolean;
  teams: MyTeamsQuery['myTeams'];
  currentTeam: null | MyTeamsQuery['myTeams'][number];
};

type TeamsActionsProps = {
  loadTeams: () => Promise<void>;
  refreshTeams: () => Promise<void>;
  deleteTeam: (teamId: string) => Promise<void>;
  setCurrentTeam: (team: null | MyTeamsQuery['myTeams'][number]) => void;
  removePokemonFromTeam: (teamId: string, pokemonId: number) => Promise<void>;
  addPokemonToTeam: (
    teamId: string,
    pokemon: PokemonModel,
  ) => Promise<TeamValidationProps>;
  updateTeam: (
    teamId: string,
    updates: Partial<MyTeamsQuery['myTeams'][number]>,
  ) => Promise<void>;
  reorderTeam: (
    teamId: string,
    newOrder: MyTeamsQuery['myTeams'][number]['team_pokemons'],
  ) => void;
  createTeam: (
    name: string,
    allowDuplicateTypes?: boolean,
  ) => Promise<MyTeamsQuery['myTeams'][number]>;
};

type TeamsStoreProps = TeamsStateProps & TeamsActionsProps;

export const useTeamsStore = create<TeamsStoreProps>()(
  devtools(
    immer((set, get) => ({
      teams: [],
      isLoading: false,
      currentTeam: null,

      setCurrentTeam: team => {
        set(state => {
          state.currentTeam = team;
        });
      },

      loadTeams: async () => {
        set({ isLoading: true });

        const { myTeams } = await client.request<
          MyTeamsQuery,
          MyTeamsQueryVariables
        >(QUERY_MY_TEAMS, {});

        set({ teams: myTeams, isLoading: false });
      },

      reorderTeam: (teamId, newOrder) => {
        set(({ teams }) => {
          const team = teams.find(currentTeam => currentTeam.id === teamId);

          if (!team) return;

          team.team_pokemons = newOrder.map((item, index) => ({
            ...item,
            position: index,
          }));

          team.updated_at = new Date().toISOString();
        });
      },

      refreshTeams: async () => {
        set(state => {
          state.isLoading = true;
        });

        const { myTeams } = await client.request<
          MyTeamsQuery,
          MyTeamsQueryVariables
        >(QUERY_MY_TEAMS, {});

        set(state => {
          state.teams = myTeams;
          state.isLoading = false;
        });

        set(state => {
          state.isLoading = false;
        });
      },

      deleteTeam: async teamId => {
        const { deleteTeam } = await client.request<
          DeleteTeamMutation,
          DeleteTeamMutationVariables
        >(MUTATION_DELETE_TEAM, {
          team: { where: { id: teamId } },
        });

        set(state => {
          state.teams = state.teams.filter(team => team.id !== deleteTeam.id);

          if (state.currentTeam?.id === deleteTeam.id) {
            state.currentTeam = null;
          }
        });
      },

      createTeam: async name => {
        const { createTeam } = await client.request<
          CreateTeamMutation,
          CreateTeamMutationVariables
        >(MUTATION_CREATE_TEAM, { team: { name } });

        const newTeam: MyTeamsQuery['myTeams'][number] = {
          id: createTeam.id,
          name,
          team_pokemons: [],
          user_id: createTeam.user_id,
          active: true,
          updated_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        };

        set((state: TeamsStoreProps) => {
          state.teams.push(newTeam);
        });

        return newTeam;
      },

      updateTeam: async (teamId, updates) => {
        await client.request<UpdateTeamMutation, UpdateTeamMutationVariables>(
          MUTATION_UPDATE_TEAM,
          {
            team: {
              where: { id: teamId },
              data: {
                name: updates.name,
              },
            },
          },
        );

        set(({ teams, currentTeam }) => {
          const team = teams.find(
            currentTeamValue => currentTeamValue.id === teamId,
          );

          if (!team) return;

          Object.assign(team, {
            ...updates,
            updated_at: Date.now(),
          });

          if (currentTeam?.id === teamId) {
            currentTeam = team;
          }
        });
      },

      removePokemonFromTeam: async (teamId, pokemonId) => {
        const state = get();

        const currentTeamPokemon = state.currentTeam?.team_pokemons.find(
          teamPokemon => teamPokemon.pokemon.id === pokemonId,
        );

        if (!currentTeamPokemon) return;

        await client.request<
          DeleteTeamPokemonMutation,
          DeleteTeamPokemonMutationVariables
        >(MUTATION_DELETE_TEAM_POKEMON, {
          teamPokemon: {
            where: { id: currentTeamPokemon.id },
          },
        });

        set(currentState => {
          const team = currentState.teams.find(
            currentTeam => currentTeam.id === teamId,
          );

          if (!team) return;

          team.team_pokemons = team.team_pokemons.filter(
            teamPokemon => teamPokemon.pokemon.id !== pokemonId,
          );

          team.team_pokemons.forEach((teamPokemon, index) => {
            teamPokemon.position = index;
          });

          team.updated_at = new Date().toISOString();

          if (currentState.currentTeam?.id === teamId) {
            currentState.currentTeam = team;
          }
        });
      },

      addPokemonToTeam: async (teamId, pokemon) => {
        const errors: string[] = [];
        const state = get();

        const team = state.teams.find(currentTeam => currentTeam.id === teamId);

        if (!team) {
          return { isValid: false, errors: ['Team not found'] };
        }

        if (pokemon.types) {
          const existingTypes = team.team_pokemons.flatMap(
            currentPokemon => currentPokemon.pokemon.types ?? [],
          );

          const hasDuplicateType = pokemon.types.some(type =>
            existingTypes.includes(type),
          );

          if (hasDuplicateType) {
            errors.push('Duplicate Pokémon type is not allowed');
          }
        }

        if (errors.length > 0) {
          return { errors, isValid: false };
        }

        const { createTeamPokemon } = await client.request<
          CreateTeamPokemonMutation,
          CreateTeamPokemonMutationVariables
        >(MUTATION_CREATE_TEAM_POKEMON, {
          teamPokemon: {
            team_id: team.id,
            pokemon_id: pokemon.id,
            position: team.team_pokemons.length,
          },
        });

        set(({ teams }) => {
          const teamDraft = teams.find(
            currentTeam => currentTeam.id === teamId,
          );

          if (!teamDraft) return;

          teamDraft.team_pokemons.push({
            id: createTeamPokemon.id,
            pokemon,
            team_id: teamDraft.id,
            pokemon_id: pokemon.id,
            position: teamDraft.team_pokemons.length,
            active: true,
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
          });

          teamDraft.updated_at = new Date().toISOString();
        });

        return { errors: [], isValid: true };
      },
    })),
    { name: 'teams-store' },
  ),
);

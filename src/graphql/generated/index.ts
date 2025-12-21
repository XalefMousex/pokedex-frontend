import {
  graphql,
  type GraphQLResponseResolver,
  type RequestHandlerOptions,
} from 'msw';
import {
  useMutation,
  useQuery,
  useSuspenseQuery,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
  UseSuspenseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { useClient } from 'graphql/client/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  DateTimeISO: { input: string; output: string };
  UUID: { input: string; output: string };
};

export type Account = {
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  account_id: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider_id: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type AccountCountAggregate = {
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  access_token_expires_at: Scalars['Int']['output'];
  account_id: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  provider_id: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  refresh_token_expires_at: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AccountMinAggregate = {
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  account_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type AccountModel = {
  access_token?: Maybe<Scalars['String']['output']>;
  access_token_expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
  account_id: Scalars['String']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  provider_id: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTimeISO']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrderInput>;
  access_token_expires_at?: InputMaybe<SortOrderInput>;
  account_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrderInput>;
  provider_id?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  refresh_token_expires_at?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  access_token_expires_at?: InputMaybe<DateTimeNullableFilter>;
  account_id?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  provider_id?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  refresh_token_expires_at?: InputMaybe<DateTimeNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<UuidFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AccountsCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<AccountsEdge>;
  nodes: Array<AccountModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type AccountsEdge = {
  cursor: Scalars['String']['output'];
  node: AccountModel;
};

export type AccountsOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<AccountModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type CreateAccountInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  account_id: Scalars['String']['input'];
  id_token?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider_id: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export type CreateFavoritePokemonInput = {
  pokemon_id: Scalars['Float']['input'];
};

export type CreatePokemonViewHistoryInput = {
  pokemon_id: Scalars['Float']['input'];
  user_id: Scalars['String']['input'];
  viewed_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CreateSessionInput = {
  active_organization_id?: InputMaybe<Scalars['String']['input']>;
  expires_at: Scalars['DateTimeISO']['input'];
  impersonated_by?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export type CreateTeamInput = {
  name: Scalars['String']['input'];
};

export type CreateTeamPokemonInput = {
  pokemon_id: Scalars['Float']['input'];
  position?: InputMaybe<Scalars['Float']['input']>;
  team_id: Scalars['String']['input'];
};

export type CreateUserInput = {
  ban_expires?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ban_reason?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_login_method?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVerificationInput = {
  expires_at: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DeleteAccountInput = {
  where: AccountWhereUniqueInput;
};

export type DeleteFavoritePokemonInput = {
  where: FavoritePokemonWhereUniqueInput;
};

export type DeletePokemonViewHistoryInput = {
  where: PokemonViewHistoryWhereUniqueInput;
};

export type DeleteSessionInput = {
  where: SessionWhereUniqueInput;
};

export type DeleteTeamInput = {
  where: TeamWhereUniqueInput;
};

export type DeleteTeamPokemonInput = {
  where: TeamPokemonWhereUniqueInput;
};

export type DeleteUserInput = {
  where: UserWhereUniqueInput;
};

export type DeleteVerificationInput = {
  where: VerificationWhereUniqueInput;
};

export type FavoritePokemon = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  pokemon_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type FavoritePokemonAvgAggregate = {
  pokemon_id?: Maybe<Scalars['Float']['output']>;
};

export type FavoritePokemonCountAggregate = {
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pokemon_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type FavoritePokemonCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<FavoritePokemonEdge>;
  nodes: Array<FavoritePokemonModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type FavoritePokemonEdge = {
  cursor: Scalars['String']['output'];
  node: FavoritePokemonModel;
};

export type FavoritePokemonListRelationFilter = {
  every?: InputMaybe<FavoritePokemonWhereInput>;
  none?: InputMaybe<FavoritePokemonWhereInput>;
  some?: InputMaybe<FavoritePokemonWhereInput>;
};

export type FavoritePokemonMaxAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type FavoritePokemonMinAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type FavoritePokemonModel = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  pokemon: PokemonModel;
  pokemon_id: Scalars['Float']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type FavoritePokemonOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<FavoritePokemonModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type FavoritePokemonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FavoritePokemonOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type FavoritePokemonSumAggregate = {
  pokemon_id?: Maybe<Scalars['Int']['output']>;
};

export type FavoritePokemonWhereInput = {
  AND?: InputMaybe<Array<FavoritePokemonWhereInput>>;
  NOT?: InputMaybe<Array<FavoritePokemonWhereInput>>;
  OR?: InputMaybe<Array<FavoritePokemonWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  pokemon_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<UuidFilter>;
};

export type FavoritePokemonWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  activateFavoritePokemon: FavoritePokemonModel;
  activatePokemonViewHistory: PokemonViewHistoryModel;
  activateTeam: TeamModel;
  activateTeamPokemon: TeamPokemonModel;
  createAccount: AccountModel;
  createFavoritePokemon: FavoritePokemonModel;
  createManyAccounts: Array<AccountModel>;
  createManyFavoritePokemon: Array<FavoritePokemonModel>;
  createManyPokemonViewHistories: Array<PokemonViewHistoryModel>;
  createManySessions: Array<SessionModel>;
  createManyTeamPokemon: Array<TeamPokemonModel>;
  createManyTeams: Array<TeamModel>;
  createManyUsers: Array<UserModel>;
  createManyVerifications: Array<VerificationModel>;
  createPokemonViewHistory: PokemonViewHistoryModel;
  createSession: SessionModel;
  createTeam: TeamModel;
  createTeamPokemon: TeamPokemonModel;
  createUser: UserModel;
  createVerification: VerificationModel;
  deactivateFavoritePokemon: FavoritePokemonModel;
  deactivatePokemonViewHistory: PokemonViewHistoryModel;
  deactivateTeam: TeamModel;
  deactivateTeamPokemon: TeamPokemonModel;
  deleteAccount: AccountModel;
  deleteFavoritePokemon: FavoritePokemonModel;
  deleteManyAccounts: Array<AccountModel>;
  deleteManyFavoritePokemon: Array<FavoritePokemonModel>;
  deleteManyPokemonViewHistories: Array<PokemonViewHistoryModel>;
  deleteManySessions: Array<SessionModel>;
  deleteManyTeamPokemon: Array<TeamPokemonModel>;
  deleteManyTeams: Array<TeamModel>;
  deleteManyUsers: Array<UserModel>;
  deleteManyVerifications: Array<VerificationModel>;
  deletePokemonViewHistory: PokemonViewHistoryModel;
  deleteSession: SessionModel;
  deleteTeam: TeamModel;
  deleteTeamPokemon: TeamPokemonModel;
  deleteUser: UserModel;
  deleteVerification: VerificationModel;
  updateAccount: AccountModel;
  updateFavoritePokemon: FavoritePokemonModel;
  updateManyAccounts: Array<AccountModel>;
  updateManyFavoritePokemon: Array<FavoritePokemonModel>;
  updateManyPokemonViewHistories: Array<PokemonViewHistoryModel>;
  updateManySessions: Array<SessionModel>;
  updateManyTeamPokemon: Array<TeamPokemonModel>;
  updateManyTeams: Array<TeamModel>;
  updateManyUsers: Array<UserModel>;
  updateManyVerifications: Array<VerificationModel>;
  updatePokemonViewHistory: PokemonViewHistoryModel;
  updateSession: SessionModel;
  updateTeam: TeamModel;
  updateTeamPokemon: TeamPokemonModel;
  updateUser: UserModel;
  updateVerification: VerificationModel;
};

export type MutationActivateFavoritePokemonArgs = {
  where?: InputMaybe<FavoritePokemonWhereUniqueInput>;
};

export type MutationActivatePokemonViewHistoryArgs = {
  where?: InputMaybe<PokemonViewHistoryWhereUniqueInput>;
};

export type MutationActivateTeamArgs = {
  where?: InputMaybe<TeamWhereUniqueInput>;
};

export type MutationActivateTeamPokemonArgs = {
  where?: InputMaybe<TeamPokemonWhereUniqueInput>;
};

export type MutationCreateAccountArgs = {
  account: CreateAccountInput;
};

export type MutationCreateFavoritePokemonArgs = {
  favoritePokemon: CreateFavoritePokemonInput;
};

export type MutationCreateManyAccountsArgs = {
  account: Array<CreateAccountInput>;
};

export type MutationCreateManyFavoritePokemonArgs = {
  favoritePokemon: Array<CreateFavoritePokemonInput>;
};

export type MutationCreateManyPokemonViewHistoriesArgs = {
  pokemonViewHistory: Array<CreatePokemonViewHistoryInput>;
};

export type MutationCreateManySessionsArgs = {
  session: Array<CreateSessionInput>;
};

export type MutationCreateManyTeamPokemonArgs = {
  teamPokemon: Array<CreateTeamPokemonInput>;
};

export type MutationCreateManyTeamsArgs = {
  team: Array<CreateTeamInput>;
};

export type MutationCreateManyUsersArgs = {
  user: Array<CreateUserInput>;
};

export type MutationCreateManyVerificationsArgs = {
  verification: Array<CreateVerificationInput>;
};

export type MutationCreatePokemonViewHistoryArgs = {
  pokemonViewHistory: CreatePokemonViewHistoryInput;
};

export type MutationCreateSessionArgs = {
  session: CreateSessionInput;
};

export type MutationCreateTeamArgs = {
  team: CreateTeamInput;
};

export type MutationCreateTeamPokemonArgs = {
  teamPokemon: CreateTeamPokemonInput;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type MutationCreateVerificationArgs = {
  verification: CreateVerificationInput;
};

export type MutationDeactivateFavoritePokemonArgs = {
  where?: InputMaybe<FavoritePokemonWhereUniqueInput>;
};

export type MutationDeactivatePokemonViewHistoryArgs = {
  where?: InputMaybe<PokemonViewHistoryWhereUniqueInput>;
};

export type MutationDeactivateTeamArgs = {
  where?: InputMaybe<TeamWhereUniqueInput>;
};

export type MutationDeactivateTeamPokemonArgs = {
  where?: InputMaybe<TeamPokemonWhereUniqueInput>;
};

export type MutationDeleteAccountArgs = {
  account: DeleteAccountInput;
};

export type MutationDeleteFavoritePokemonArgs = {
  favoritePokemon: DeleteFavoritePokemonInput;
};

export type MutationDeleteManyAccountsArgs = {
  accounts: Array<DeleteAccountInput>;
};

export type MutationDeleteManyFavoritePokemonArgs = {
  favoritePokemon: Array<DeleteFavoritePokemonInput>;
};

export type MutationDeleteManyPokemonViewHistoriesArgs = {
  pokemonViewHistories: Array<DeletePokemonViewHistoryInput>;
};

export type MutationDeleteManySessionsArgs = {
  sessions: Array<DeleteSessionInput>;
};

export type MutationDeleteManyTeamPokemonArgs = {
  teamPokemon: Array<DeleteTeamPokemonInput>;
};

export type MutationDeleteManyTeamsArgs = {
  teams: Array<DeleteTeamInput>;
};

export type MutationDeleteManyUsersArgs = {
  users: Array<DeleteUserInput>;
};

export type MutationDeleteManyVerificationsArgs = {
  verifications: Array<DeleteVerificationInput>;
};

export type MutationDeletePokemonViewHistoryArgs = {
  pokemonViewHistory: DeletePokemonViewHistoryInput;
};

export type MutationDeleteSessionArgs = {
  session: DeleteSessionInput;
};

export type MutationDeleteTeamArgs = {
  team: DeleteTeamInput;
};

export type MutationDeleteTeamPokemonArgs = {
  teamPokemon: DeleteTeamPokemonInput;
};

export type MutationDeleteUserArgs = {
  user: DeleteUserInput;
};

export type MutationDeleteVerificationArgs = {
  verification: DeleteVerificationInput;
};

export type MutationUpdateAccountArgs = {
  account: UpdateAccountInput;
};

export type MutationUpdateFavoritePokemonArgs = {
  favoritePokemon: UpdateFavoritePokemonInput;
};

export type MutationUpdateManyAccountsArgs = {
  accounts: Array<UpdateAccountInput>;
};

export type MutationUpdateManyFavoritePokemonArgs = {
  favoritePokemon: Array<UpdateFavoritePokemonInput>;
};

export type MutationUpdateManyPokemonViewHistoriesArgs = {
  pokemonViewHistories: Array<UpdatePokemonViewHistoryInput>;
};

export type MutationUpdateManySessionsArgs = {
  sessions: Array<UpdateSessionInput>;
};

export type MutationUpdateManyTeamPokemonArgs = {
  teamPokemon: Array<UpdateTeamPokemonInput>;
};

export type MutationUpdateManyTeamsArgs = {
  teams: Array<UpdateTeamInput>;
};

export type MutationUpdateManyUsersArgs = {
  users: Array<UpdateUserInput>;
};

export type MutationUpdateManyVerificationsArgs = {
  verifications: Array<UpdateVerificationInput>;
};

export type MutationUpdatePokemonViewHistoryArgs = {
  pokemonViewHistory: UpdatePokemonViewHistoryInput;
};

export type MutationUpdateSessionArgs = {
  session: UpdateSessionInput;
};

export type MutationUpdateTeamArgs = {
  team: UpdateTeamInput;
};

export type MutationUpdateTeamPokemonArgs = {
  teamPokemon: UpdateTeamPokemonInput;
};

export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};

export type MutationUpdateVerificationArgs = {
  verification: UpdateVerificationInput;
};

export type NamedResource = {
  name: Scalars['String']['output'];
};

export type NamedResourceWithUrl = {
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last',
}

export type PageInfoCursor = {
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type PageInfoOffset = {
  currentPage: Scalars['Float']['output'];
  isFirstPage: Scalars['Boolean']['output'];
  isLastPage: Scalars['Boolean']['output'];
  nextPage?: Maybe<Scalars['Float']['output']>;
  previousPage?: Maybe<Scalars['Float']['output']>;
};

export type PaginationListPokemonsResponseModel = {
  count: Scalars['Float']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<PaginationPokemonModel>;
};

export type PaginationPokemonModel = {
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PaginationPokemonsResponseModel = {
  count: Scalars['Float']['output'];
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results: Array<PokemonModel>;
};

export type PokemonAbility = {
  ability: NamedResource;
};

export type PokemonModel = {
  abilities: Array<PokemonAbility>;
  height: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  moves: Array<PokemonMove>;
  name: Scalars['String']['output'];
  sprites: PokemonSprites;
  stats: Array<PokemonStat>;
  types: Array<PokemonType>;
  weight: Scalars['Float']['output'];
};

export type PokemonMove = {
  move: NamedResourceWithUrl;
};

export type PokemonSpriteHome = {
  front_default?: Maybe<Scalars['String']['output']>;
};

export type PokemonSpriteOfficialArtwork = {
  front_default?: Maybe<Scalars['String']['output']>;
};

export type PokemonSpriteOther = {
  home: PokemonSpriteHome;
  official_artwork: PokemonSpriteOfficialArtwork;
};

export type PokemonSprites = {
  front_default?: Maybe<Scalars['String']['output']>;
  other: PokemonSpriteOther;
};

export type PokemonStat = {
  base_stat: Scalars['Float']['output'];
  stat: NamedResource;
};

export type PokemonType = {
  type: NamedResource;
};

export type PokemonViewHistoriesCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<PokemonViewHistoriesEdge>;
  nodes: Array<PokemonViewHistoryModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type PokemonViewHistoriesEdge = {
  cursor: Scalars['String']['output'];
  node: PokemonViewHistoryModel;
};

export type PokemonViewHistoriesOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<PokemonViewHistoryModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type PokemonViewHistory = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  pokemon_id: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_id: Scalars['String']['output'];
  viewed_at: Scalars['DateTime']['output'];
};

export type PokemonViewHistoryAvgAggregate = {
  pokemon_id?: Maybe<Scalars['Float']['output']>;
};

export type PokemonViewHistoryCountAggregate = {
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pokemon_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  viewed_at: Scalars['Int']['output'];
};

export type PokemonViewHistoryListRelationFilter = {
  every?: InputMaybe<PokemonViewHistoryWhereInput>;
  none?: InputMaybe<PokemonViewHistoryWhereInput>;
  some?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type PokemonViewHistoryMaxAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  viewed_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PokemonViewHistoryMinAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  viewed_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PokemonViewHistoryModel = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  pokemon_id: Scalars['Float']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
  viewed_at: Scalars['DateTimeISO']['output'];
};

export type PokemonViewHistoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PokemonViewHistoryOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
  viewed_at?: InputMaybe<SortOrder>;
};

export type PokemonViewHistorySumAggregate = {
  pokemon_id?: Maybe<Scalars['Int']['output']>;
};

export type PokemonViewHistoryWhereInput = {
  AND?: InputMaybe<Array<PokemonViewHistoryWhereInput>>;
  NOT?: InputMaybe<Array<PokemonViewHistoryWhereInput>>;
  OR?: InputMaybe<Array<PokemonViewHistoryWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  pokemon_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<UuidFilter>;
  viewed_at?: InputMaybe<DateTimeFilter>;
};

export type PokemonViewHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Query = {
  account: AccountModel;
  accountFirst: AccountModel;
  accounts: Array<AccountModel>;
  accountsCount: Scalars['Float']['output'];
  accountsPaginationCursor: AccountsCursorConnection;
  accountsPaginationOffset: AccountsOffsetConnection;
  favoritePokemon: FavoritePokemonModel;
  favoritePokemonCount: Scalars['Float']['output'];
  favoritePokemonFirst: FavoritePokemonModel;
  favoritePokemonPaginationCursor: FavoritePokemonCursorConnection;
  favoritePokemonPaginationOffset: FavoritePokemonOffsetConnection;
  favoritePokemons: Array<FavoritePokemonModel>;
  myFavoritePokemons: Array<FavoritePokemonModel>;
  myTeams: Array<TeamModel>;
  paginationListPokemons: PaginationListPokemonsResponseModel;
  paginationPokemons: PaginationPokemonsResponseModel;
  pokemonById: PokemonModel;
  pokemonByName: PokemonModel;
  pokemonViewHistories: Array<PokemonViewHistoryModel>;
  pokemonViewHistoriesCount: Scalars['Float']['output'];
  pokemonViewHistoriesPaginationCursor: PokemonViewHistoriesCursorConnection;
  pokemonViewHistoriesPaginationOffset: PokemonViewHistoriesOffsetConnection;
  pokemonViewHistory: PokemonViewHistoryModel;
  pokemonViewHistoryFirst: PokemonViewHistoryModel;
  session: SessionModel;
  sessionFirst: SessionModel;
  sessions: Array<SessionModel>;
  sessionsCount: Scalars['Float']['output'];
  sessionsPaginationCursor: SessionsCursorConnection;
  sessionsPaginationOffset: SessionsOffsetConnection;
  team: TeamModel;
  teamFirst: TeamModel;
  teamPokemon: TeamPokemonModel;
  teamPokemonCount: Scalars['Float']['output'];
  teamPokemonFirst: TeamPokemonModel;
  teamPokemonPaginationCursor: TeamPokemonCursorConnection;
  teamPokemonPaginationOffset: TeamPokemonOffsetConnection;
  teamPokemons: Array<TeamPokemonModel>;
  teams: Array<TeamModel>;
  teamsCount: Scalars['Float']['output'];
  teamsPaginationCursor: TeamsCursorConnection;
  teamsPaginationOffset: TeamsOffsetConnection;
  user: UserModel;
  userFirst: UserModel;
  users: Array<UserModel>;
  usersCount: Scalars['Float']['output'];
  usersPaginationCursor: UsersCursorConnection;
  usersPaginationOffset: UsersOffsetConnection;
  verification: VerificationModel;
  verificationFirst: VerificationModel;
  verifications: Array<VerificationModel>;
  verificationsCount: Scalars['Float']['output'];
  verificationsPaginationCursor: VerificationsCursorConnection;
  verificationsPaginationOffset: VerificationsOffsetConnection;
};

export type QueryAccountArgs = {
  where?: InputMaybe<AccountWhereUniqueInput>;
};

export type QueryAccountFirstArgs = {
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsArgs = {
  order?: InputMaybe<AccountOrderByWithRelationInput>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsCountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<AccountOrderByWithRelationInput>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<AccountOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryFavoritePokemonArgs = {
  where?: InputMaybe<FavoritePokemonWhereUniqueInput>;
};

export type QueryFavoritePokemonCountArgs = {
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryFavoritePokemonFirstArgs = {
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryFavoritePokemonPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<FavoritePokemonOrderByWithRelationInput>;
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryFavoritePokemonPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<FavoritePokemonOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryFavoritePokemonsArgs = {
  order?: InputMaybe<FavoritePokemonOrderByWithRelationInput>;
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryMyFavoritePokemonsArgs = {
  order?: InputMaybe<FavoritePokemonOrderByWithRelationInput>;
  where?: InputMaybe<FavoritePokemonWhereInput>;
};

export type QueryMyTeamsArgs = {
  order?: InputMaybe<TeamOrderByWithRelationInput>;
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryPaginationListPokemonsArgs = {
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
};

export type QueryPaginationPokemonsArgs = {
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
};

export type QueryPokemonByIdArgs = {
  id: Scalars['Float']['input'];
};

export type QueryPokemonByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryPokemonViewHistoriesArgs = {
  order?: InputMaybe<PokemonViewHistoryOrderByWithRelationInput>;
  where?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type QueryPokemonViewHistoriesCountArgs = {
  where?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type QueryPokemonViewHistoriesPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<PokemonViewHistoryOrderByWithRelationInput>;
  where?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type QueryPokemonViewHistoriesPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<PokemonViewHistoryOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type QueryPokemonViewHistoryArgs = {
  where?: InputMaybe<PokemonViewHistoryWhereUniqueInput>;
};

export type QueryPokemonViewHistoryFirstArgs = {
  where?: InputMaybe<PokemonViewHistoryWhereInput>;
};

export type QuerySessionArgs = {
  where?: InputMaybe<SessionWhereUniqueInput>;
};

export type QuerySessionFirstArgs = {
  where?: InputMaybe<SessionWhereInput>;
};

export type QuerySessionsArgs = {
  order?: InputMaybe<SessionOrderByWithRelationInput>;
  where?: InputMaybe<SessionWhereInput>;
};

export type QuerySessionsCountArgs = {
  where?: InputMaybe<SessionWhereInput>;
};

export type QuerySessionsPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<SessionOrderByWithRelationInput>;
  where?: InputMaybe<SessionWhereInput>;
};

export type QuerySessionsPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<SessionOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type QueryTeamArgs = {
  where?: InputMaybe<TeamWhereUniqueInput>;
};

export type QueryTeamFirstArgs = {
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryTeamPokemonArgs = {
  where?: InputMaybe<TeamPokemonWhereUniqueInput>;
};

export type QueryTeamPokemonCountArgs = {
  where?: InputMaybe<TeamPokemonWhereInput>;
};

export type QueryTeamPokemonFirstArgs = {
  where?: InputMaybe<TeamPokemonWhereInput>;
};

export type QueryTeamPokemonPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<TeamPokemonOrderByWithRelationInput>;
  where?: InputMaybe<TeamPokemonWhereInput>;
};

export type QueryTeamPokemonPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<TeamPokemonOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<TeamPokemonWhereInput>;
};

export type QueryTeamPokemonsArgs = {
  order?: InputMaybe<TeamPokemonOrderByWithRelationInput>;
  where?: InputMaybe<TeamPokemonWhereInput>;
};

export type QueryTeamsArgs = {
  order?: InputMaybe<TeamOrderByWithRelationInput>;
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryTeamsCountArgs = {
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryTeamsPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<TeamOrderByWithRelationInput>;
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryTeamsPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<TeamOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};

export type QueryUserFirstArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersArgs = {
  order?: InputMaybe<UserOrderByWithRelationInput>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<UserOrderByWithRelationInput>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<UserOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryVerificationArgs = {
  where?: InputMaybe<VerificationWhereUniqueInput>;
};

export type QueryVerificationFirstArgs = {
  where?: InputMaybe<VerificationWhereInput>;
};

export type QueryVerificationsArgs = {
  order?: InputMaybe<VerificationOrderByWithRelationInput>;
  where?: InputMaybe<VerificationWhereInput>;
};

export type QueryVerificationsCountArgs = {
  where?: InputMaybe<VerificationWhereInput>;
};

export type QueryVerificationsPaginationCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<VerificationOrderByWithRelationInput>;
  where?: InputMaybe<VerificationWhereInput>;
};

export type QueryVerificationsPaginationOffsetArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  order?: InputMaybe<VerificationOrderByWithRelationInput>;
  page?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<VerificationWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Session = {
  created_at: Scalars['DateTime']['output'];
  expires_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  impersonated_by?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  impersonated_by: Scalars['Int']['output'];
  ip_address: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_agent: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  impersonated_by?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type SessionMinAggregate = {
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  impersonated_by?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type SessionModel = {
  active_organization_id?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTimeISO']['output'];
  expires_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  impersonated_by?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  impersonated_by?: InputMaybe<SortOrderInput>;
  ip_address?: InputMaybe<SortOrderInput>;
  token?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_agent?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  impersonated_by?: InputMaybe<StringNullableFilter>;
  ip_address?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_agent?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type SessionsCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<SessionsEdge>;
  nodes: Array<SessionModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type SessionsEdge = {
  cursor: Scalars['String']['output'];
  node: SessionModel;
};

export type SessionsOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<SessionModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  _count: TeamCount;
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pokemons?: Maybe<Array<TeamPokemon>>;
  updated_at: Scalars['DateTime']['output'];
  user: User;
  user_id: Scalars['String']['output'];
};

export type TeamCount = {
  pokemons: Scalars['Int']['output'];
};

export type TeamCountAggregate = {
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type TeamListRelationFilter = {
  every?: InputMaybe<TeamWhereInput>;
  none?: InputMaybe<TeamWhereInput>;
  some?: InputMaybe<TeamWhereInput>;
};

export type TeamMaxAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type TeamMinAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type TeamModel = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  team_pokemons: Array<TeamPokemonModel>;
  updated_at: Scalars['DateTimeISO']['output'];
  user_id: Scalars['String']['output'];
};

export type TeamOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pokemons?: InputMaybe<TeamPokemonOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type TeamPokemon = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  pokemon_id: Scalars['Int']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  team: Team;
  team_id: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type TeamPokemonAvgAggregate = {
  pokemon_id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

export type TeamPokemonCountAggregate = {
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  pokemon_id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  team_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type TeamPokemonCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<TeamPokemonEdge>;
  nodes: Array<TeamPokemonModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type TeamPokemonEdge = {
  cursor: Scalars['String']['output'];
  node: TeamPokemonModel;
};

export type TeamPokemonListRelationFilter = {
  every?: InputMaybe<TeamPokemonWhereInput>;
  none?: InputMaybe<TeamPokemonWhereInput>;
  some?: InputMaybe<TeamPokemonWhereInput>;
};

export type TeamPokemonMaxAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamPokemonMinAggregate = {
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamPokemonModel = {
  active: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  pokemon: PokemonModel;
  pokemon_id: Scalars['Float']['output'];
  position?: Maybe<Scalars['Float']['output']>;
  team_id: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
};

export type TeamPokemonOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<TeamPokemonModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type TeamPokemonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamPokemonOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon_id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrderInput>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  team_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TeamPokemonSumAggregate = {
  pokemon_id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

export type TeamPokemonWhereInput = {
  AND?: InputMaybe<Array<TeamPokemonWhereInput>>;
  NOT?: InputMaybe<Array<TeamPokemonWhereInput>>;
  OR?: InputMaybe<Array<TeamPokemonWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  pokemon_id?: InputMaybe<IntFilter>;
  position?: InputMaybe<IntNullableFilter>;
  team?: InputMaybe<TeamWhereInput>;
  team_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TeamPokemonWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  pokemons?: InputMaybe<TeamPokemonListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  user_id?: InputMaybe<UuidFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type TeamsCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<TeamsEdge>;
  nodes: Array<TeamModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type TeamsEdge = {
  cursor: Scalars['String']['output'];
  node: TeamModel;
};

export type TeamsOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<TeamModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type UpdateAccountInput = {
  data: UpdateDataAccountInput;
  where: AccountWhereUniqueInput;
};

export type UpdateDataAccountInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  access_token_expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  account_id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDataFavoritePokemonInput = {
  pokemon_id?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateDataPokemonViewHistoryInput = {
  pokemon_id?: InputMaybe<Scalars['Float']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  viewed_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UpdateDataSessionInput = {
  active_organization_id?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  impersonated_by?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDataTeamInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDataTeamPokemonInput = {
  pokemon_id?: InputMaybe<Scalars['Float']['input']>;
  position?: InputMaybe<Scalars['Float']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDataUserInput = {
  ban_expires?: InputMaybe<Scalars['DateTimeISO']['input']>;
  ban_reason?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_login_method?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDataVerificationInput = {
  expires_at?: InputMaybe<Scalars['DateTimeISO']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFavoritePokemonInput = {
  data: UpdateDataFavoritePokemonInput;
  where: FavoritePokemonWhereUniqueInput;
};

export type UpdatePokemonViewHistoryInput = {
  data: UpdateDataPokemonViewHistoryInput;
  where: PokemonViewHistoryWhereUniqueInput;
};

export type UpdateSessionInput = {
  data: UpdateDataSessionInput;
  where: SessionWhereUniqueInput;
};

export type UpdateTeamInput = {
  data: UpdateDataTeamInput;
  where: TeamWhereUniqueInput;
};

export type UpdateTeamPokemonInput = {
  data: UpdateDataTeamPokemonInput;
  where: TeamPokemonWhereUniqueInput;
};

export type UpdateUserInput = {
  data: UpdateDataUserInput;
  where: UserWhereUniqueInput;
};

export type UpdateVerificationInput = {
  data: UpdateDataVerificationInput;
  where: VerificationWhereUniqueInput;
};

export type User = {
  _count: UserCount;
  accounts?: Maybe<Array<Account>>;
  ban_expires?: Maybe<Scalars['DateTime']['output']>;
  ban_reason?: Maybe<Scalars['String']['output']>;
  banned?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  favorites?: Maybe<Array<FavoritePokemon>>;
  history?: Maybe<Array<PokemonViewHistory>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_login_method?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<Session>>;
  teams?: Maybe<Array<Team>>;
  updated_at: Scalars['DateTime']['output'];
};

export type UserCount = {
  accounts: Scalars['Int']['output'];
  favorites: Scalars['Int']['output'];
  history: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  teams: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  _all: Scalars['Int']['output'];
  ban_expires: Scalars['Int']['output'];
  ban_reason: Scalars['Int']['output'];
  banned: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  email_verified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  last_login_method: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type UserMaxAggregate = {
  ban_expires?: Maybe<Scalars['DateTime']['output']>;
  ban_reason?: Maybe<Scalars['String']['output']>;
  banned?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_login_method?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  ban_expires?: Maybe<Scalars['DateTime']['output']>;
  ban_reason?: Maybe<Scalars['String']['output']>;
  banned?: Maybe<Scalars['Boolean']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_login_method?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserModel = {
  ban_expires?: Maybe<Scalars['DateTimeISO']['output']>;
  ban_reason?: Maybe<Scalars['String']['output']>;
  banned: Scalars['Boolean']['output'];
  created_at: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_login_method?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeISO']['output'];
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  ban_expires?: InputMaybe<SortOrderInput>;
  ban_reason?: InputMaybe<SortOrderInput>;
  banned?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  email_verified?: InputMaybe<SortOrder>;
  favorites?: InputMaybe<FavoritePokemonOrderByRelationAggregateInput>;
  history?: InputMaybe<PokemonViewHistoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  last_login_method?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrderInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  teams?: InputMaybe<TeamOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  ban_expires?: InputMaybe<DateTimeNullableFilter>;
  ban_reason?: InputMaybe<StringNullableFilter>;
  banned?: InputMaybe<BoolNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  email_verified?: InputMaybe<BoolFilter>;
  favorites?: InputMaybe<FavoritePokemonListRelationFilter>;
  history?: InputMaybe<PokemonViewHistoryListRelationFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringNullableFilter>;
  last_login_method?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  teams?: InputMaybe<TeamListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type UsersCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<UsersEdge>;
  nodes: Array<UserModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type UsersEdge = {
  cursor: Scalars['String']['output'];
  node: UserModel;
};

export type UsersOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<UserModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type VerificationCountAggregate = {
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type VerificationMaxAggregate = {
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type VerificationMinAggregate = {
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type VerificationModel = {
  created_at: Scalars['DateTimeISO']['output'];
  expires_at: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  value: Scalars['String']['output'];
};

export type VerificationOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type VerificationWhereInput = {
  AND?: InputMaybe<Array<VerificationWhereInput>>;
  NOT?: InputMaybe<Array<VerificationWhereInput>>;
  OR?: InputMaybe<Array<VerificationWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<UuidFilter>;
  identifier?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type VerificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type VerificationsCursorConnection = {
  count: Scalars['Float']['output'];
  edges: Array<VerificationsEdge>;
  nodes: Array<VerificationModel>;
  pageInfo: PageInfoCursor;
  totalCount: Scalars['Float']['output'];
};

export type VerificationsEdge = {
  cursor: Scalars['String']['output'];
  node: VerificationModel;
};

export type VerificationsOffsetConnection = {
  count: Scalars['Float']['output'];
  nodes: Array<VerificationModel>;
  pageInfo: PageInfoOffset;
  totalCount: Scalars['Float']['output'];
};

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateFavoritePokemonMutation(
 *   ({ query, variables }) => {
 *     const { favoritePokemon } = variables;
 *     return HttpResponse.json({
 *       data: { createFavoritePokemon }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateFavoritePokemonMutation = (
  resolver: GraphQLResponseResolver<
    CreateFavoritePokemonMutation,
    CreateFavoritePokemonMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<
    CreateFavoritePokemonMutation,
    CreateFavoritePokemonMutationVariables
  >('CreateFavoritePokemon', resolver, options);

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteFavoritePokemonMutation(
 *   ({ query, variables }) => {
 *     const { favoritePokemon } = variables;
 *     return HttpResponse.json({
 *       data: { deleteFavoritePokemon }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeleteFavoritePokemonMutation = (
  resolver: GraphQLResponseResolver<
    DeleteFavoritePokemonMutation,
    DeleteFavoritePokemonMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<
    DeleteFavoritePokemonMutation,
    DeleteFavoritePokemonMutationVariables
  >('DeleteFavoritePokemon', resolver, options);

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateTeamPokemonMutation(
 *   ({ query, variables }) => {
 *     const { teamPokemon } = variables;
 *     return HttpResponse.json({
 *       data: { createTeamPokemon }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateTeamPokemonMutation = (
  resolver: GraphQLResponseResolver<
    CreateTeamPokemonMutation,
    CreateTeamPokemonMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<
    CreateTeamPokemonMutation,
    CreateTeamPokemonMutationVariables
  >('CreateTeamPokemon', resolver, options);

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteTeamPokemonMutation(
 *   ({ query, variables }) => {
 *     const { teamPokemon } = variables;
 *     return HttpResponse.json({
 *       data: { deleteTeamPokemon }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeleteTeamPokemonMutation = (
  resolver: GraphQLResponseResolver<
    DeleteTeamPokemonMutation,
    DeleteTeamPokemonMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<
    DeleteTeamPokemonMutation,
    DeleteTeamPokemonMutationVariables
  >('DeleteTeamPokemon', resolver, options);

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateTeamMutation(
 *   ({ query, variables }) => {
 *     const { team } = variables;
 *     return HttpResponse.json({
 *       data: { createTeam }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCreateTeamMutation = (
  resolver: GraphQLResponseResolver<
    CreateTeamMutation,
    CreateTeamMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<CreateTeamMutation, CreateTeamMutationVariables>(
    'CreateTeam',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteTeamMutation(
 *   ({ query, variables }) => {
 *     const { team } = variables;
 *     return HttpResponse.json({
 *       data: { deleteTeam }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockDeleteTeamMutation = (
  resolver: GraphQLResponseResolver<
    DeleteTeamMutation,
    DeleteTeamMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<DeleteTeamMutation, DeleteTeamMutationVariables>(
    'DeleteTeam',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateTeamMutation(
 *   ({ query, variables }) => {
 *     const { team } = variables;
 *     return HttpResponse.json({
 *       data: { updateTeam }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockUpdateTeamMutation = (
  resolver: GraphQLResponseResolver<
    UpdateTeamMutation,
    UpdateTeamMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<UpdateTeamMutation, UpdateTeamMutationVariables>(
    'UpdateTeam',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMyFavoritePokemonsQuery(
 *   ({ query, variables }) => {
 *     const { order, where } = variables;
 *     return HttpResponse.json({
 *       data: { myFavoritePokemons }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockMyFavoritePokemonsQuery = (
  resolver: GraphQLResponseResolver<
    MyFavoritePokemonsQuery,
    MyFavoritePokemonsQueryVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.query<MyFavoritePokemonsQuery, MyFavoritePokemonsQueryVariables>(
    'MyFavoritePokemons',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPaginationPokemonsQuery(
 *   ({ query, variables }) => {
 *     const { limit, offset } = variables;
 *     return HttpResponse.json({
 *       data: { paginationPokemons }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPaginationPokemonsQuery = (
  resolver: GraphQLResponseResolver<
    PaginationPokemonsQuery,
    PaginationPokemonsQueryVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.query<PaginationPokemonsQuery, PaginationPokemonsQueryVariables>(
    'PaginationPokemons',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPokemonByIdQuery(
 *   ({ query, variables }) => {
 *     const { pokemonById } = variables;
 *     return HttpResponse.json({
 *       data: { pokemonById }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPokemonByIdQuery = (
  resolver: GraphQLResponseResolver<
    PokemonByIdQuery,
    PokemonByIdQueryVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.query<PokemonByIdQuery, PokemonByIdQueryVariables>(
    'PokemonById',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPokemonByNameQuery(
 *   ({ query, variables }) => {
 *     const { name } = variables;
 *     return HttpResponse.json({
 *       data: { pokemonByName }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockPokemonByNameQuery = (
  resolver: GraphQLResponseResolver<
    PokemonByNameQuery,
    PokemonByNameQueryVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.query<PokemonByNameQuery, PokemonByNameQueryVariables>(
    'PokemonByName',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockMyTeamsQuery(
 *   ({ query, variables }) => {
 *     const { order, where } = variables;
 *     return HttpResponse.json({
 *       data: { myTeams }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockMyTeamsQuery = (
  resolver: GraphQLResponseResolver<MyTeamsQuery, MyTeamsQueryVariables>,
  options?: RequestHandlerOptions,
) =>
  graphql.query<MyTeamsQuery, MyTeamsQueryVariables>(
    'MyTeams',
    resolver,
    options,
  );

export type CreateFavoritePokemonMutationVariables = Exact<{
  favoritePokemon: CreateFavoritePokemonInput;
}>;

export type CreateFavoritePokemonMutation = {
  createFavoritePokemon: {
    active: boolean;
    created_at: string;
    id: string;
    pokemon_id: number;
    updated_at: string;
    user_id: string;
  };
};

export type DeleteFavoritePokemonMutationVariables = Exact<{
  favoritePokemon: DeleteFavoritePokemonInput;
}>;

export type DeleteFavoritePokemonMutation = {
  deleteFavoritePokemon: {
    active: boolean;
    created_at: string;
    id: string;
    pokemon_id: number;
    updated_at: string;
    user_id: string;
  };
};

export type CreateTeamPokemonMutationVariables = Exact<{
  teamPokemon: CreateTeamPokemonInput;
}>;

export type CreateTeamPokemonMutation = {
  createTeamPokemon: {
    active: boolean;
    created_at: string;
    id: string;
    pokemon_id: number;
    position?: number | null;
    team_id: string;
    updated_at: string;
  };
};

export type DeleteTeamPokemonMutationVariables = Exact<{
  teamPokemon: DeleteTeamPokemonInput;
}>;

export type DeleteTeamPokemonMutation = {
  deleteTeamPokemon: {
    active: boolean;
    created_at: string;
    id: string;
    pokemon_id: number;
    position?: number | null;
    team_id: string;
    updated_at: string;
  };
};

export type CreateTeamMutationVariables = Exact<{
  team: CreateTeamInput;
}>;

export type CreateTeamMutation = {
  createTeam: {
    active: boolean;
    created_at: string;
    id: string;
    name: string;
    updated_at: string;
    user_id: string;
  };
};

export type DeleteTeamMutationVariables = Exact<{
  team: DeleteTeamInput;
}>;

export type DeleteTeamMutation = {
  deleteTeam: {
    active: boolean;
    created_at: string;
    id: string;
    name: string;
    updated_at: string;
    user_id: string;
  };
};

export type UpdateTeamMutationVariables = Exact<{
  team: UpdateTeamInput;
}>;

export type UpdateTeamMutation = {
  updateTeam: {
    active: boolean;
    created_at: string;
    id: string;
    name: string;
    updated_at: string;
    user_id: string;
  };
};

export type MyFavoritePokemonsQueryVariables = Exact<{
  order?: InputMaybe<FavoritePokemonOrderByWithRelationInput>;
  where?: InputMaybe<FavoritePokemonWhereInput>;
}>;

export type MyFavoritePokemonsQuery = {
  myFavoritePokemons: Array<{
    active: boolean;
    created_at: string;
    id: string;
    pokemon_id: number;
    updated_at: string;
    user_id: string;
    pokemon: {
      id: number;
      name: string;
      height: number;
      weight: number;
      types: Array<{ type: { name: string } }>;
      abilities: Array<{ ability: { name: string } }>;
      stats: Array<{ base_stat: number; stat: { name: string } }>;
      moves: Array<{ move: { name: string; url: string } }>;
      sprites: {
        front_default?: string | null;
        other: {
          home: { front_default?: string | null };
          official_artwork: { front_default?: string | null };
        };
      };
    };
  }>;
};

export type PaginationPokemonsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
}>;

export type PaginationPokemonsQuery = {
  paginationPokemons: {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<{
      id: number;
      name: string;
      height: number;
      weight: number;
      types: Array<{ type: { name: string } }>;
      abilities: Array<{ ability: { name: string } }>;
      stats: Array<{ base_stat: number; stat: { name: string } }>;
      moves: Array<{ move: { name: string; url: string } }>;
      sprites: {
        front_default?: string | null;
        other: {
          home: { front_default?: string | null };
          official_artwork: { front_default?: string | null };
        };
      };
    }>;
  };
};

export type PokemonByIdQueryVariables = Exact<{
  pokemonById: Scalars['Float']['input'];
}>;

export type PokemonByIdQuery = {
  pokemonById: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{ type: { name: string } }>;
    abilities: Array<{ ability: { name: string } }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
    moves: Array<{ move: { name: string; url: string } }>;
    sprites: {
      front_default?: string | null;
      other: {
        home: { front_default?: string | null };
        official_artwork: { front_default?: string | null };
      };
    };
  };
};

export type PokemonByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type PokemonByNameQuery = {
  pokemonByName: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: Array<{ type: { name: string } }>;
    abilities: Array<{ ability: { name: string } }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
    moves: Array<{ move: { name: string; url: string } }>;
    sprites: {
      front_default?: string | null;
      other: {
        home: { front_default?: string | null };
        official_artwork: { front_default?: string | null };
      };
    };
  };
};

export type MyTeamsQueryVariables = Exact<{
  order?: InputMaybe<TeamOrderByWithRelationInput>;
  where?: InputMaybe<TeamWhereInput>;
}>;

export type MyTeamsQuery = {
  myTeams: Array<{
    active: boolean;
    created_at: string;
    id: string;
    name: string;
    updated_at: string;
    user_id: string;
    team_pokemons: Array<{
      active: boolean;
      created_at: string;
      id: string;
      pokemon_id: number;
      position?: number | null;
      team_id: string;
      updated_at: string;
      pokemon: {
        id: number;
        name: string;
        height: number;
        weight: number;
        types: Array<{ type: { name: string } }>;
        abilities: Array<{ ability: { name: string } }>;
        stats: Array<{ base_stat: number; stat: { name: string } }>;
        moves: Array<{ move: { name: string; url: string } }>;
        sprites: {
          front_default?: string | null;
          other: {
            home: { front_default?: string | null };
            official_artwork: { front_default?: string | null };
          };
        };
      };
    }>;
  }>;
};

export const CreateFavoritePokemonDocument = `
    mutation CreateFavoritePokemon($favoritePokemon: CreateFavoritePokemonInput!) {
  createFavoritePokemon(favoritePokemon: $favoritePokemon) {
    active
    created_at
    id
    pokemon_id
    updated_at
    user_id
  }
}
    `;

export const useCreateFavoritePokemonMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateFavoritePokemonMutation,
    TError,
    CreateFavoritePokemonMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    CreateFavoritePokemonMutation,
    TError,
    CreateFavoritePokemonMutationVariables,
    TContext
  >({
    mutationKey: ['CreateFavoritePokemon'],
    mutationFn: useClient<
      CreateFavoritePokemonMutation,
      CreateFavoritePokemonMutationVariables
    >(CreateFavoritePokemonDocument),
    ...options,
  });
};

useCreateFavoritePokemonMutation.getKey = () => ['CreateFavoritePokemon'];

export const DeleteFavoritePokemonDocument = `
    mutation DeleteFavoritePokemon($favoritePokemon: DeleteFavoritePokemonInput!) {
  deleteFavoritePokemon(favoritePokemon: $favoritePokemon) {
    active
    created_at
    id
    pokemon_id
    updated_at
    user_id
  }
}
    `;

export const useDeleteFavoritePokemonMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteFavoritePokemonMutation,
    TError,
    DeleteFavoritePokemonMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    DeleteFavoritePokemonMutation,
    TError,
    DeleteFavoritePokemonMutationVariables,
    TContext
  >({
    mutationKey: ['DeleteFavoritePokemon'],
    mutationFn: useClient<
      DeleteFavoritePokemonMutation,
      DeleteFavoritePokemonMutationVariables
    >(DeleteFavoritePokemonDocument),
    ...options,
  });
};

useDeleteFavoritePokemonMutation.getKey = () => ['DeleteFavoritePokemon'];

export const CreateTeamPokemonDocument = `
    mutation CreateTeamPokemon($teamPokemon: CreateTeamPokemonInput!) {
  createTeamPokemon(teamPokemon: $teamPokemon) {
    active
    created_at
    id
    pokemon_id
    position
    team_id
    updated_at
  }
}
    `;

export const useCreateTeamPokemonMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateTeamPokemonMutation,
    TError,
    CreateTeamPokemonMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    CreateTeamPokemonMutation,
    TError,
    CreateTeamPokemonMutationVariables,
    TContext
  >({
    mutationKey: ['CreateTeamPokemon'],
    mutationFn: useClient<
      CreateTeamPokemonMutation,
      CreateTeamPokemonMutationVariables
    >(CreateTeamPokemonDocument),
    ...options,
  });
};

useCreateTeamPokemonMutation.getKey = () => ['CreateTeamPokemon'];

export const DeleteTeamPokemonDocument = `
    mutation DeleteTeamPokemon($teamPokemon: DeleteTeamPokemonInput!) {
  deleteTeamPokemon(teamPokemon: $teamPokemon) {
    active
    created_at
    id
    pokemon_id
    position
    team_id
    updated_at
  }
}
    `;

export const useDeleteTeamPokemonMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteTeamPokemonMutation,
    TError,
    DeleteTeamPokemonMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    DeleteTeamPokemonMutation,
    TError,
    DeleteTeamPokemonMutationVariables,
    TContext
  >({
    mutationKey: ['DeleteTeamPokemon'],
    mutationFn: useClient<
      DeleteTeamPokemonMutation,
      DeleteTeamPokemonMutationVariables
    >(DeleteTeamPokemonDocument),
    ...options,
  });
};

useDeleteTeamPokemonMutation.getKey = () => ['DeleteTeamPokemon'];

export const CreateTeamDocument = `
    mutation CreateTeam($team: CreateTeamInput!) {
  createTeam(team: $team) {
    active
    created_at
    id
    name
    updated_at
    user_id
  }
}
    `;

export const useCreateTeamMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateTeamMutation,
    TError,
    CreateTeamMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    CreateTeamMutation,
    TError,
    CreateTeamMutationVariables,
    TContext
  >({
    mutationKey: ['CreateTeam'],
    mutationFn: useClient<CreateTeamMutation, CreateTeamMutationVariables>(
      CreateTeamDocument,
    ),
    ...options,
  });
};

useCreateTeamMutation.getKey = () => ['CreateTeam'];

export const DeleteTeamDocument = `
    mutation DeleteTeam($team: DeleteTeamInput!) {
  deleteTeam(team: $team) {
    active
    created_at
    id
    name
    updated_at
    user_id
  }
}
    `;

export const useDeleteTeamMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteTeamMutation,
    TError,
    DeleteTeamMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    DeleteTeamMutation,
    TError,
    DeleteTeamMutationVariables,
    TContext
  >({
    mutationKey: ['DeleteTeam'],
    mutationFn: useClient<DeleteTeamMutation, DeleteTeamMutationVariables>(
      DeleteTeamDocument,
    ),
    ...options,
  });
};

useDeleteTeamMutation.getKey = () => ['DeleteTeam'];

export const UpdateTeamDocument = `
    mutation UpdateTeam($team: UpdateTeamInput!) {
  updateTeam(team: $team) {
    active
    created_at
    id
    name
    updated_at
    user_id
  }
}
    `;

export const useUpdateTeamMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateTeamMutation,
    TError,
    UpdateTeamMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    UpdateTeamMutation,
    TError,
    UpdateTeamMutationVariables,
    TContext
  >({
    mutationKey: ['UpdateTeam'],
    mutationFn: useClient<UpdateTeamMutation, UpdateTeamMutationVariables>(
      UpdateTeamDocument,
    ),
    ...options,
  });
};

useUpdateTeamMutation.getKey = () => ['UpdateTeam'];

export const MyFavoritePokemonsDocument = `
    query MyFavoritePokemons($order: FavoritePokemonOrderByWithRelationInput, $where: FavoritePokemonWhereInput) {
  myFavoritePokemons(order: $order, where: $where) {
    active
    created_at
    id
    pokemon {
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          name
          url
        }
      }
      sprites {
        front_default
        other {
          home {
            front_default
          }
          official_artwork {
            front_default
          }
        }
      }
    }
    pokemon_id
    updated_at
    user_id
  }
}
    `;

export const useMyFavoritePokemonsQuery = <
  TData = MyFavoritePokemonsQuery,
  TError = unknown,
>(
  variables?: MyFavoritePokemonsQueryVariables,
  options?: Omit<
    UseQueryOptions<MyFavoritePokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      MyFavoritePokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<MyFavoritePokemonsQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['MyFavoritePokemons']
        : ['MyFavoritePokemons', variables],
    queryFn: useClient<
      MyFavoritePokemonsQuery,
      MyFavoritePokemonsQueryVariables
    >(MyFavoritePokemonsDocument).bind(null, variables),
    ...options,
  });
};

useMyFavoritePokemonsQuery.getKey = (
  variables?: MyFavoritePokemonsQueryVariables,
) =>
  variables === undefined
    ? ['MyFavoritePokemons']
    : ['MyFavoritePokemons', variables];

export const useSuspenseMyFavoritePokemonsQuery = <
  TData = MyFavoritePokemonsQuery,
  TError = unknown,
>(
  variables?: MyFavoritePokemonsQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<MyFavoritePokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      MyFavoritePokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<MyFavoritePokemonsQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['MyFavoritePokemonsSuspense']
        : ['MyFavoritePokemonsSuspense', variables],
    queryFn: useClient<
      MyFavoritePokemonsQuery,
      MyFavoritePokemonsQueryVariables
    >(MyFavoritePokemonsDocument).bind(null, variables),
    ...options,
  });
};

useSuspenseMyFavoritePokemonsQuery.getKey = (
  variables?: MyFavoritePokemonsQueryVariables,
) =>
  variables === undefined
    ? ['MyFavoritePokemonsSuspense']
    : ['MyFavoritePokemonsSuspense', variables];

export const useInfiniteMyFavoritePokemonsQuery = <
  TData = InfiniteData<MyFavoritePokemonsQuery>,
  TError = unknown,
>(
  variables: MyFavoritePokemonsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<MyFavoritePokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      MyFavoritePokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<
    MyFavoritePokemonsQuery,
    MyFavoritePokemonsQueryVariables
  >(MyFavoritePokemonsDocument);
  return useInfiniteQuery<MyFavoritePokemonsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['MyFavoritePokemons.infinite']
            : ['MyFavoritePokemons.infinite', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useInfiniteMyFavoritePokemonsQuery.getKey = (
  variables?: MyFavoritePokemonsQueryVariables,
) =>
  variables === undefined
    ? ['MyFavoritePokemons.infinite']
    : ['MyFavoritePokemons.infinite', variables];

export const useSuspenseInfiniteMyFavoritePokemonsQuery = <
  TData = InfiniteData<MyFavoritePokemonsQuery>,
  TError = unknown,
>(
  variables: MyFavoritePokemonsQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<MyFavoritePokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      MyFavoritePokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<
    MyFavoritePokemonsQuery,
    MyFavoritePokemonsQueryVariables
  >(MyFavoritePokemonsDocument);
  return useSuspenseInfiniteQuery<MyFavoritePokemonsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['MyFavoritePokemons.infiniteSuspense']
            : ['MyFavoritePokemons.infiniteSuspense', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useSuspenseInfiniteMyFavoritePokemonsQuery.getKey = (
  variables?: MyFavoritePokemonsQueryVariables,
) =>
  variables === undefined
    ? ['MyFavoritePokemons.infiniteSuspense']
    : ['MyFavoritePokemons.infiniteSuspense', variables];

export const PaginationPokemonsDocument = `
    query PaginationPokemons($limit: Float!, $offset: Float!) {
  paginationPokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    results {
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          name
          url
        }
      }
      sprites {
        front_default
        other {
          home {
            front_default
          }
          official_artwork {
            front_default
          }
        }
      }
    }
  }
}
    `;

export const usePaginationPokemonsQuery = <
  TData = PaginationPokemonsQuery,
  TError = unknown,
>(
  variables: PaginationPokemonsQueryVariables,
  options?: Omit<
    UseQueryOptions<PaginationPokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      PaginationPokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<PaginationPokemonsQuery, TError, TData>({
    queryKey: ['PaginationPokemons', variables],
    queryFn: useClient<
      PaginationPokemonsQuery,
      PaginationPokemonsQueryVariables
    >(PaginationPokemonsDocument).bind(null, variables),
    ...options,
  });
};

usePaginationPokemonsQuery.getKey = (
  variables: PaginationPokemonsQueryVariables,
) => ['PaginationPokemons', variables];

export const useSuspensePaginationPokemonsQuery = <
  TData = PaginationPokemonsQuery,
  TError = unknown,
>(
  variables: PaginationPokemonsQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<PaginationPokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      PaginationPokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<PaginationPokemonsQuery, TError, TData>({
    queryKey: ['PaginationPokemonsSuspense', variables],
    queryFn: useClient<
      PaginationPokemonsQuery,
      PaginationPokemonsQueryVariables
    >(PaginationPokemonsDocument).bind(null, variables),
    ...options,
  });
};

useSuspensePaginationPokemonsQuery.getKey = (
  variables: PaginationPokemonsQueryVariables,
) => ['PaginationPokemonsSuspense', variables];

export const useInfinitePaginationPokemonsQuery = <
  TData = InfiniteData<PaginationPokemonsQuery>,
  TError = unknown,
>(
  variables: PaginationPokemonsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<PaginationPokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      PaginationPokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<
    PaginationPokemonsQuery,
    PaginationPokemonsQueryVariables
  >(PaginationPokemonsDocument);
  return useInfiniteQuery<PaginationPokemonsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['PaginationPokemons.infinite', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useInfinitePaginationPokemonsQuery.getKey = (
  variables: PaginationPokemonsQueryVariables,
) => ['PaginationPokemons.infinite', variables];

export const useSuspenseInfinitePaginationPokemonsQuery = <
  TData = InfiniteData<PaginationPokemonsQuery>,
  TError = unknown,
>(
  variables: PaginationPokemonsQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<PaginationPokemonsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      PaginationPokemonsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<
    PaginationPokemonsQuery,
    PaginationPokemonsQueryVariables
  >(PaginationPokemonsDocument);
  return useSuspenseInfiniteQuery<PaginationPokemonsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'PaginationPokemons.infiniteSuspense',
          variables,
        ],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useSuspenseInfinitePaginationPokemonsQuery.getKey = (
  variables: PaginationPokemonsQueryVariables,
) => ['PaginationPokemons.infiniteSuspense', variables];

export const PokemonByIdDocument = `
    query PokemonById($pokemonById: Float!) {
  pokemonById(id: $pokemonById) {
    id
    name
    height
    weight
    types {
      type {
        name
      }
    }
    abilities {
      ability {
        name
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
    moves {
      move {
        name
        url
      }
    }
    sprites {
      front_default
      other {
        home {
          front_default
        }
        official_artwork {
          front_default
        }
      }
    }
  }
}
    `;

export const usePokemonByIdQuery = <TData = PokemonByIdQuery, TError = unknown>(
  variables: PokemonByIdQueryVariables,
  options?: Omit<
    UseQueryOptions<PokemonByIdQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<PokemonByIdQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<PokemonByIdQuery, TError, TData>({
    queryKey: ['PokemonById', variables],
    queryFn: useClient<PokemonByIdQuery, PokemonByIdQueryVariables>(
      PokemonByIdDocument,
    ).bind(null, variables),
    ...options,
  });
};

usePokemonByIdQuery.getKey = (variables: PokemonByIdQueryVariables) => [
  'PokemonById',
  variables,
];

export const useSuspensePokemonByIdQuery = <
  TData = PokemonByIdQuery,
  TError = unknown,
>(
  variables: PokemonByIdQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<PokemonByIdQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      PokemonByIdQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<PokemonByIdQuery, TError, TData>({
    queryKey: ['PokemonByIdSuspense', variables],
    queryFn: useClient<PokemonByIdQuery, PokemonByIdQueryVariables>(
      PokemonByIdDocument,
    ).bind(null, variables),
    ...options,
  });
};

useSuspensePokemonByIdQuery.getKey = (variables: PokemonByIdQueryVariables) => [
  'PokemonByIdSuspense',
  variables,
];

export const useInfinitePokemonByIdQuery = <
  TData = InfiniteData<PokemonByIdQuery>,
  TError = unknown,
>(
  variables: PokemonByIdQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<PokemonByIdQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      PokemonByIdQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<PokemonByIdQuery, PokemonByIdQueryVariables>(
    PokemonByIdDocument,
  );
  return useInfiniteQuery<PokemonByIdQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['PokemonById.infinite', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useInfinitePokemonByIdQuery.getKey = (variables: PokemonByIdQueryVariables) => [
  'PokemonById.infinite',
  variables,
];

export const useSuspenseInfinitePokemonByIdQuery = <
  TData = InfiniteData<PokemonByIdQuery>,
  TError = unknown,
>(
  variables: PokemonByIdQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<PokemonByIdQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      PokemonByIdQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<PokemonByIdQuery, PokemonByIdQueryVariables>(
    PokemonByIdDocument,
  );
  return useSuspenseInfiniteQuery<PokemonByIdQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'PokemonById.infiniteSuspense',
          variables,
        ],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useSuspenseInfinitePokemonByIdQuery.getKey = (
  variables: PokemonByIdQueryVariables,
) => ['PokemonById.infiniteSuspense', variables];

export const PokemonByNameDocument = `
    query PokemonByName($name: String!) {
  pokemonByName(name: $name) {
    id
    name
    height
    weight
    types {
      type {
        name
      }
    }
    abilities {
      ability {
        name
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
    moves {
      move {
        name
        url
      }
    }
    sprites {
      front_default
      other {
        home {
          front_default
        }
        official_artwork {
          front_default
        }
      }
    }
  }
}
    `;

export const usePokemonByNameQuery = <
  TData = PokemonByNameQuery,
  TError = unknown,
>(
  variables: PokemonByNameQueryVariables,
  options?: Omit<
    UseQueryOptions<PokemonByNameQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<PokemonByNameQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<PokemonByNameQuery, TError, TData>({
    queryKey: ['PokemonByName', variables],
    queryFn: useClient<PokemonByNameQuery, PokemonByNameQueryVariables>(
      PokemonByNameDocument,
    ).bind(null, variables),
    ...options,
  });
};

usePokemonByNameQuery.getKey = (variables: PokemonByNameQueryVariables) => [
  'PokemonByName',
  variables,
];

export const useSuspensePokemonByNameQuery = <
  TData = PokemonByNameQuery,
  TError = unknown,
>(
  variables: PokemonByNameQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<PokemonByNameQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      PokemonByNameQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<PokemonByNameQuery, TError, TData>({
    queryKey: ['PokemonByNameSuspense', variables],
    queryFn: useClient<PokemonByNameQuery, PokemonByNameQueryVariables>(
      PokemonByNameDocument,
    ).bind(null, variables),
    ...options,
  });
};

useSuspensePokemonByNameQuery.getKey = (
  variables: PokemonByNameQueryVariables,
) => ['PokemonByNameSuspense', variables];

export const useInfinitePokemonByNameQuery = <
  TData = InfiniteData<PokemonByNameQuery>,
  TError = unknown,
>(
  variables: PokemonByNameQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<PokemonByNameQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      PokemonByNameQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<PokemonByNameQuery, PokemonByNameQueryVariables>(
    PokemonByNameDocument,
  );
  return useInfiniteQuery<PokemonByNameQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['PokemonByName.infinite', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useInfinitePokemonByNameQuery.getKey = (
  variables: PokemonByNameQueryVariables,
) => ['PokemonByName.infinite', variables];

export const useSuspenseInfinitePokemonByNameQuery = <
  TData = InfiniteData<PokemonByNameQuery>,
  TError = unknown,
>(
  variables: PokemonByNameQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<PokemonByNameQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      PokemonByNameQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<PokemonByNameQuery, PokemonByNameQueryVariables>(
    PokemonByNameDocument,
  );
  return useSuspenseInfiniteQuery<PokemonByNameQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'PokemonByName.infiniteSuspense',
          variables,
        ],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useSuspenseInfinitePokemonByNameQuery.getKey = (
  variables: PokemonByNameQueryVariables,
) => ['PokemonByName.infiniteSuspense', variables];

export const MyTeamsDocument = `
    query MyTeams($order: TeamOrderByWithRelationInput, $where: TeamWhereInput) {
  myTeams(order: $order, where: $where) {
    active
    created_at
    id
    name
    team_pokemons {
      active
      created_at
      id
      pokemon {
        id
        name
        height
        weight
        types {
          type {
            name
          }
        }
        abilities {
          ability {
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
        moves {
          move {
            name
            url
          }
        }
        sprites {
          front_default
          other {
            home {
              front_default
            }
            official_artwork {
              front_default
            }
          }
        }
      }
      pokemon_id
      position
      team_id
      updated_at
    }
    updated_at
    user_id
  }
}
    `;

export const useMyTeamsQuery = <TData = MyTeamsQuery, TError = unknown>(
  variables?: MyTeamsQueryVariables,
  options?: Omit<UseQueryOptions<MyTeamsQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<MyTeamsQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<MyTeamsQuery, TError, TData>({
    queryKey: variables === undefined ? ['MyTeams'] : ['MyTeams', variables],
    queryFn: useClient<MyTeamsQuery, MyTeamsQueryVariables>(
      MyTeamsDocument,
    ).bind(null, variables),
    ...options,
  });
};

useMyTeamsQuery.getKey = (variables?: MyTeamsQueryVariables) =>
  variables === undefined ? ['MyTeams'] : ['MyTeams', variables];

export const useSuspenseMyTeamsQuery = <TData = MyTeamsQuery, TError = unknown>(
  variables?: MyTeamsQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<MyTeamsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<MyTeamsQuery, TError, TData>['queryKey'];
  },
) => {
  return useSuspenseQuery<MyTeamsQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['MyTeamsSuspense']
        : ['MyTeamsSuspense', variables],
    queryFn: useClient<MyTeamsQuery, MyTeamsQueryVariables>(
      MyTeamsDocument,
    ).bind(null, variables),
    ...options,
  });
};

useSuspenseMyTeamsQuery.getKey = (variables?: MyTeamsQueryVariables) =>
  variables === undefined
    ? ['MyTeamsSuspense']
    : ['MyTeamsSuspense', variables];

export const useInfiniteMyTeamsQuery = <
  TData = InfiniteData<MyTeamsQuery>,
  TError = unknown,
>(
  variables: MyTeamsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<MyTeamsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<MyTeamsQuery, TError, TData>['queryKey'];
  },
) => {
  const query = useClient<MyTeamsQuery, MyTeamsQueryVariables>(MyTeamsDocument);
  return useInfiniteQuery<MyTeamsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['MyTeams.infinite']
            : ['MyTeams.infinite', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useInfiniteMyTeamsQuery.getKey = (variables?: MyTeamsQueryVariables) =>
  variables === undefined
    ? ['MyTeams.infinite']
    : ['MyTeams.infinite', variables];

export const useSuspenseInfiniteMyTeamsQuery = <
  TData = InfiniteData<MyTeamsQuery>,
  TError = unknown,
>(
  variables: MyTeamsQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<MyTeamsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      MyTeamsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  const query = useClient<MyTeamsQuery, MyTeamsQueryVariables>(MyTeamsDocument);
  return useSuspenseInfiniteQuery<MyTeamsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ['MyTeams.infiniteSuspense']
            : ['MyTeams.infiniteSuspense', variables],
        queryFn: metaData =>
          query({ ...variables, ...(metaData.pageParam ?? {}) }),
        ...restOptions,
      };
    })(),
  );
};

useSuspenseInfiniteMyTeamsQuery.getKey = (variables?: MyTeamsQueryVariables) =>
  variables === undefined
    ? ['MyTeams.infiniteSuspense']
    : ['MyTeams.infiniteSuspense', variables];

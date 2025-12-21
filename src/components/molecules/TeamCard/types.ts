import { type ComponentProps } from 'react';

import { type MyTeamsQuery } from 'graphql/generated';

export type TeamCardProps = {
  onEdit: () => void;
  onDelete: () => void;
  team: MyTeamsQuery['myTeams'][number];
} & ComponentProps<'div'>;

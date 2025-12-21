import { type ComponentProps } from 'react';

import { type MyTeamsQuery } from 'graphql/generated';

export type TeamBuilderProps = {
  onCloseAction?: () => void;
  team: MyTeamsQuery['myTeams'][number];
} & ComponentProps<'div'>;

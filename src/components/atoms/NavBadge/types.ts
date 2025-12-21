import { type ReactNode, type ComponentProps } from 'react';

import { type Badge } from 'components/atoms/Badge';

export type NavBadgeProps = {
  children: ReactNode;
} & ComponentProps<typeof Badge>;

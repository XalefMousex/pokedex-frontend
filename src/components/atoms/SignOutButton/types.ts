import { type ReactNode, type ComponentProps } from 'react';

import { type Item } from '@radix-ui/react-dropdown-menu';

export type SignOutButtonProps = {
  icon?: ReactNode;
  shortcut?: string;
} & ComponentProps<typeof Item>;

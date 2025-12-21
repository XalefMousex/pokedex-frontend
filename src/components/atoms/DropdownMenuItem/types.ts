import { type ComponentProps } from 'react';

import { type Item } from '@radix-ui/react-dropdown-menu';

export type DropdownMenuItemProps = {
  inset?: boolean;
  variant?: 'default' | 'destructive';
} & ComponentProps<typeof Item>;

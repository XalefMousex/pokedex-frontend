import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { type ComponentProps } from 'react';

export type DropdownMenuLabelProps = {
  inset?: boolean;
} & ComponentProps<typeof DropdownMenuPrimitive.DropdownMenuLabel>;

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { type DropdownMenuProps } from './types';

export const DropdownMenu = ({ ...props }: DropdownMenuProps) => (
  <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
);

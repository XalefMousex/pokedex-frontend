import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { type DropdownMenuGroupProps } from './types';

export const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupProps) => (
  <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
);

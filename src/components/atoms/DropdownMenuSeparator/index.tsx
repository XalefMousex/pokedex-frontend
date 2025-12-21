import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuSeparatorProps } from './types';

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    className={cn(
      `
        -mx-1 my-1 h-px bg-gray-300 transition-all
        dark:bg-shark-950
      `,
      className,
    )}
    data-slot="dropdown-menu-separator"
    {...props}
  />
);

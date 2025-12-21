import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuLabelProps } from './types';

export const DropdownMenuLabel = ({
  inset,
  className,
  ...props
}: DropdownMenuLabelProps) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      `
        px-2 py-1.5 text-sm font-medium text-shark-950 transition-all
        data-[inset]:ps-8
        dark:text-white
      `,
      className,
    )}
    data-inset={inset}
    data-slot="dropdown-menu-label"
    {...props}
  />
);

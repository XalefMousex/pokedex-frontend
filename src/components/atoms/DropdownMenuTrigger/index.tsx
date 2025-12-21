import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuTriggerProps } from './types';

export const DropdownMenuTrigger = ({
  className,
  ...props
}: DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger
    data-slot="dropdown-menu-trigger"
    className={cn('cursor-pointer', className)}
    {...props}
  />
);

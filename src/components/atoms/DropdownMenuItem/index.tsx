'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuItemProps } from './types';

export const DropdownMenuItem = ({
  inset,
  onClick,
  className,
  variant = 'default',
  ...props
}: DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    onClick={event => {
      onClick?.(event);
      event.stopPropagation();
    }}
    className={cn(
      `
        relative flex min-w-36 cursor-pointer items-center gap-4 rounded-md p-3
        px-2 py-1.5 text-sm text-shark-950 outline-hidden transition-colors
        outline-none select-none
        hover:bg-neutral-500/10
        focus:bg-neutral-500/10
        data-[disabled]:pointer-events-none data-[disabled]:opacity-50
        data-[inset]:pl-8
        data-[variant=destructive]:text-danger-500
        data-[variant=destructive]:focus:bg-danger-500/10
        data-[variant=destructive]:focus:text-danger-500
        dark:text-white dark:hover:bg-neutral-400/10
        dark:focus:bg-neutral-400/10
        dark:data-[variant=destructive]:text-danger-500
        dark:data-[variant=destructive]:focus:bg-danger-500/20
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4
        data-[variant=destructive]:*:[svg]:text-danger-500!
      `,
      className,
    )}
    data-inset={inset}
    data-variant={variant}
    data-slot="dropdown-menu-item"
    {...props}
  />
);

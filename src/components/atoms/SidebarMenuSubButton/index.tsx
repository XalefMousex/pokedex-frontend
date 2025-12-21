import { Slot } from '@radix-ui/react-slot';

import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuSubButtonProps } from './types';

export const SidebarMenuSubButton = ({
  className,
  size = 'medium',
  asChild = false,
  isActive = false,
  ...props
}: SidebarMenuSubButtonProps) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn(
        `
          flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden
          rounded-md px-2 text-neutral-500 outline-hidden
          focus-visible:ring-2
          disabled:pointer-events-none disabled:opacity-50
          aria-disabled:pointer-events-none aria-disabled:opacity-50
          data-[active=true]:bg-gray-100 data-[active=true]:font-medium
          data-[active=true]:text-primary-600
          data-[state=open]:hover:bg-gray-100
          data-[state=open]:hover:text-primary-600
          dark:text-white dark:hover:bg-shark-950/30 dark:active:bg-shark-950/30
          dark:active:text-primary-600 dark:data-[active=true]:bg-shark-950/30
          dark:data-[active=true]:text-primary-600
          dark:data-[state=open]:hover:bg-shark-950/30
          [&>span:last-child]:truncate
          [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-inherit
        `,
        size === 'small' && 'text-xs',
        size === 'medium' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      data-size={size}
      data-active={isActive}
      data-sidebar="menu-sub-button"
      data-slot="sidebar-menu-sub-button"
      {...props}
    />
  );
};

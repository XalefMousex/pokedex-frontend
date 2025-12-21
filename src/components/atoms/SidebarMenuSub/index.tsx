import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuSubProps } from './types';

export const SidebarMenuSub = ({
  className,
  ...props
}: SidebarMenuSubProps) => (
  <ul
    className={cn(
      `
        mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-s border-dashed
        border-gray-300 px-2.5 py-0.5
        dark:border-shark-950
      `,
      'group-data-[collapsible=icon]:hidden',
      className,
    )}
    data-sidebar="menu-sub"
    data-slot="sidebar-menu-sub"
    {...props}
  />
);

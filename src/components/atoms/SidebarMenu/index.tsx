import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuProps } from './types';

export const SidebarMenu = ({ className, ...props }: SidebarMenuProps) => (
  <ul
    data-sidebar="menu"
    data-slot="sidebar-menu"
    className={cn('flex w-full min-w-0 flex-col gap-1', className)}
    {...props}
  />
);

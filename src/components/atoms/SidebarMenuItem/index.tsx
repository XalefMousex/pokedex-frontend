import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuItemProps } from './types';

export const SidebarMenuItem = ({
  className,
  ...props
}: SidebarMenuItemProps) => (
  <li
    data-sidebar="menu-item"
    data-slot="sidebar-menu-item"
    className={cn('group/menu-item relative', className)}
    {...props}
  />
);

import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuSubItemProps } from './types';

export const SidebarMenuSubItem = ({
  className,
  ...props
}: SidebarMenuSubItemProps) => (
  <li
    className={cn(
      `
        group/menu-sub-item relative rounded-md text-shark-950 transition-all
        hover:bg-gray-100 hover:text-primary-500
        dark:text-white dark:hover:bg-shark-950/50 dark:hover:text-primary-500
      `,
      className,
    )}
    data-sidebar="menu-sub-item"
    data-slot="sidebar-menu-sub-item"
    {...props}
  />
);

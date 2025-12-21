import { cn } from 'utils/tailwind/cn';

import { type SidebarHeaderProps } from './types';

export const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => (
  <div
    data-sidebar="header"
    data-slot="sidebar-header"
    className={cn('flex flex-col gap-2 p-2', className)}
    {...props}
  />
);

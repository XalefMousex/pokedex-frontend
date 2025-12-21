import { cn } from 'utils/tailwind/cn';

import { type SidebarGroupProps } from './types';

export const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => (
  <div
    data-sidebar="group"
    data-slot="sidebar-group"
    className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
    {...props}
  />
);

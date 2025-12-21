import { cn } from 'utils/tailwind/cn';

import { type SidebarFooterProps } from './types';

export const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => (
  <div
    data-sidebar="footer"
    data-slot="sidebar-footer"
    className={cn('flex flex-col gap-2 p-2', className)}
    {...props}
  />
);

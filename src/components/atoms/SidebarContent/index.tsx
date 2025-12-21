import { cn } from 'utils/tailwind/cn';

import { type SidebarContentProps } from './types';

export const SidebarContent = ({
  className,
  ...props
}: SidebarContentProps) => (
  <div
    className={cn(
      `
        flex min-h-0 flex-1 flex-col gap-2 overflow-auto
        group-data-[collapsible=icon]:overflow-hidden
      `,
      className,
    )}
    data-sidebar="content"
    data-slot="sidebar-content"
    {...props}
  />
);

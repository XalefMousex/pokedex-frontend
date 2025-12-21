import { Separator } from 'components/atoms/Separator';

import { cn } from 'utils/tailwind/cn';

import { type SidebarSeparatorProps } from './types';

export const SidebarSeparator = ({
  className,
  ...props
}: SidebarSeparatorProps) => (
  <Separator
    className={cn(
      `
        mx-2 w-auto bg-gray-300 transition-all
        dark:bg-shark-950
      `,
      className,
    )}
    data-sidebar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
);

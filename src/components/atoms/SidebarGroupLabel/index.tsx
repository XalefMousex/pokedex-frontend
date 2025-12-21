import { Slot } from '@radix-ui/react-slot';

import { cn } from 'utils/tailwind/cn';

import { type SidebarGroupLabelProps } from './types';

export const SidebarGroupLabel = ({
  className,
  asChild = false,
  ...props
}: SidebarGroupLabelProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={cn(
        `
          flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium
          text-neutral-500 outline-hidden transition-[margin,opacity]
          duration-200 ease-linear
          focus-visible:ring-2
          dark:text-neutral-400
          [&>svg]:size-4 [&>svg]:shrink-0
        `,
        `
          group-data-[collapsible=icon]:-mt-8
          group-data-[collapsible=icon]:opacity-0
        `,
        className,
      )}
      data-sidebar="group-label"
      data-slot="sidebar-group-label"
      {...props}
    />
  );
};

'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { useSidebarStore } from 'stores/useSidebarStore';

import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuContentProps } from './types';

export const DropdownMenuContent = ({
  children,
  className,
  sideOffset = 4,
  hasArrow = false,
  isDynamicSide = false,
  ...props
}: DropdownMenuContentProps) => {
  const { isMobile } = useSidebarStore();

  let side: DropdownMenuContentProps['side'];

  if (isDynamicSide) {
    side = isMobile ? 'bottom' : 'right';
  }

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          `
            z-50 flex flex-col gap-1 rounded-[10px] border bg-white/50 p-1
            backdrop-blur-lg transition-colors
            data-[side=bottom]:slide-in-from-top-2
            data-[side=left]:slide-in-from-right-2
            data-[side=right]:slide-in-from-left-2
            data-[side=top]:slide-in-from-bottom-2
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0
            data-[state=closed]:zoom-out-95
            data-[state=open]:animate-in data-[state=open]:fade-in-0
            data-[state=open]:zoom-in-95
            dark:border-shark-950 dark:bg-shark-950/30
          `,
          className,
        )}
        side={side}
        sideOffset={sideOffset}
        data-slot="dropdown-menu-content"
        {...props}
      >
        {children}

        {hasArrow && (
          <DropdownMenuPrimitive.Arrow
            className={cn(
              `
                fill-gray-300 transition-colors
                dark:fill-shark-950
              `,
            )}
          />
        )}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

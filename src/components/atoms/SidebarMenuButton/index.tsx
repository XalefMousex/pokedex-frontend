'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { useSidebarStore } from 'stores/useSidebarStore';

import { Tooltip } from 'components/atoms/Tooltip';
import { TooltipTrigger } from 'components/atoms/TooltipTrigger';
import { TooltipContent } from 'components/atoms/TooltipContent';
import { TooltipProvider } from 'components/atoms/TooltipProvider';

import { cn } from 'utils/tailwind/cn';

import { type SidebarMenuButtonProps } from './types';

export const sidebarMenuButtonVariants = cva(
  `
    peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md
    p-2 text-start text-sm text-shark-950 outline-hidden transition-all
    group-has-data-[sidebar=menu-action]/menu-item:pe-8
    group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!
    hover:bg-gray-100
    focus-visible:ring-2
    active:bg-gray-100 active:text-primary-600
    disabled:pointer-events-none disabled:opacity-50
    aria-disabled:pointer-events-none aria-disabled:opacity-50
    data-[active=true]:bg-gray-100 data-[active=true]:font-medium
    data-[active=true]:text-primary-600
    data-[state=open]:hover:bg-gray-100 data-[state=open]:hover:text-primary-600
    dark:text-white dark:hover:bg-shark-950/30 dark:active:bg-shark-950/30
    dark:active:text-primary-600 dark:data-[active=true]:bg-shark-950/30
    dark:data-[active=true]:text-primary-600
    dark:data-[state=open]:hover:bg-shark-950/30
    [&>span:last-child]:truncate
    [&>svg]:size-4 [&>svg]:shrink-0
  `,
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        small: 'h-7 text-xs',
        default: 'h-8 text-sm',
        large: `
          h-12 text-sm
          group-data-[collapsible=icon]:p-0!
        `,
      },
      variant: {
        default: `
          hover:bg-gray-100 hover:text-primary-600
          dark:hover:bg-shark-950/50
          hover:dark:text-primary-600
        `,
        outline: `
          shadow-[0_0_0_1px_hsl(var(--shark-950))]
          hover:text-primary-600 hover:shadow-[0_0_0_1px_hsl(var(--shark-950))]
          hover:dark:text-primary-600
        `,
      },
    },
  },
);

export const SidebarMenuButton = ({
  tooltip,
  className,
  asChild = false,
  isActive = false,
  size = 'default',
  variant = 'default',
  ...props
}: SidebarMenuButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  const { state, isMobile } = useSidebarStore();

  const button = (
    <Comp
      data-size={size}
      data-active={isActive}
      data-sidebar="menu-button"
      data-slot="sidebar-menu-button"
      className={cn(sidebarMenuButtonVariants({ size, variant }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>

        <TooltipContent
          side="right"
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          {...tooltip}
        />
      </Tooltip>
    </TooltipProvider>
  );
};

import { type ComponentProps } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { type TooltipContent } from 'components/atoms/TooltipContent';

import { type sidebarMenuButtonVariants } from '.';

export type SidebarMenuButtonProps = {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants> &
  ComponentProps<'button'>;

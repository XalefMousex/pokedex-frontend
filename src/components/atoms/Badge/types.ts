import { type ReactNode, type ComponentProps } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { type badgeVariants } from '.';

export type BadgeProps = {
  icon?: ReactNode;
} & ComponentProps<'span'> &
  VariantProps<typeof badgeVariants>;

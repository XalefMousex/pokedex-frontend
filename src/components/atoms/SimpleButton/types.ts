import { type ComponentProps } from 'react';

import { type VariantProps } from 'class-variance-authority';

import { type simpleButtonVariants } from '.';

export type SimpleButtonProps = {
  asChild?: boolean;
} & VariantProps<typeof simpleButtonVariants> &
  ComponentProps<'button'>;

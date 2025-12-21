import { type ReactNode, type ComponentProps } from 'react';

import { type motion } from 'framer-motion';
import { type VariantProps } from 'class-variance-authority';

import { type buttonVariants } from '.';

export type ButtonProps = {
  icon?: ReactNode;
  isLoading?: boolean;
  children?: ReactNode;
  isDisabled?: boolean;
  iconAlign?: 'left' | 'right';
} & VariantProps<typeof buttonVariants> &
  ComponentProps<typeof motion.button>;

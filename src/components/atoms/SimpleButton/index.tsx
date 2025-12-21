import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'utils/tailwind/cn';

import { type SimpleButtonProps } from './types';

export const simpleButtonVariants = cva(
  `
    inline-flex shrink-0 cursor-pointer items-center justify-center gap-2
    rounded-md text-sm font-medium whitespace-nowrap text-shark-950
    transition-all outline-none
    disabled:pointer-events-none disabled:opacity-50
    aria-invalid:border-danger-500 aria-invalid:ring-danger-500/20
    dark:text-white dark:aria-invalid:ring-danger-500/40
    [&_svg]:pointer-events-none [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
  `,
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        icon: 'size-9',
        default: `
          h-9 px-4 py-2
          has-[>svg]:px-3
        `,
        lg: `
          h-10 rounded-md px-6
          has-[>svg]:px-4
        `,
        sm: `
          h-8 gap-1.5 rounded-md px-3
          has-[>svg]:px-2.5
        `,
      },
      variant: {
        link: `
          text-primary-700 underline-offset-4
          hover:underline
          dark:text-primary-300
        `,
        default: `
          bg-primary-500 text-shark-950 shadow-xs
          hover:bg-primary-600
          dark:text-white
        `,
        secondary: `
          bg-gray-200 text-shark-950 shadow-xs
          hover:bg-gray-300
          dark:bg-shark-950 dark:text-white dark:hover:bg-shark-900
        `,
        outline: `
          border border-gray-300 bg-white shadow-xs
          hover:bg-shark-50
          dark:border-shark-950 dark:bg-transparent dark:hover:bg-shark-900/30
        `,
        destructive: `
          bg-danger-600 text-white shadow-xs
          hover:bg-danger-700
          focus-visible:ring-danger-400/40
          dark:bg-danger-700 dark:hover:bg-danger-800
        `,
        ghost: `
          bg-transparent text-shark-950
          hover:bg-gray-100
          focus:bg-gray-100
          focus-visible:ring-0 focus-visible:ring-offset-0
          dark:text-white dark:hover:bg-shark-800/40 dark:focus:bg-shark-800/40
        `,
      },
    },
  },
);

export const SimpleButton = ({
  size,
  variant,
  className,
  asChild = false,
  ...props
}: SimpleButtonProps & VariantProps<typeof simpleButtonVariants>) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(simpleButtonVariants({ size, variant }), className)}
      {...props}
    />
  );
};

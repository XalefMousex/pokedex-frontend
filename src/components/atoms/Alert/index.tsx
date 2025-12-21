import { cva } from 'class-variance-authority';

import { cn } from 'utils/tailwind/cn';

import { type AlertProps } from './types';

export const alertVariants = cva(
  `
    relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg
    border px-4 py-3 text-sm
    has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3
    dark:border-shark-950
    [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current
  `,
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: `
          bg-gray-200/50 text-subtitle
          dark:bg-shark-950/50
        `,
        destructive: `
          text-danger-500
          *:data-[slot=alert-description]:text-danger-500/90
          [&>svg]:text-current
        `,
      },
    },
  },
);

export const Alert = ({ variant, className, ...props }: AlertProps) => (
  <div
    role="alert"
    data-slot="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);

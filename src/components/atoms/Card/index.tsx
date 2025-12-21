import { cn } from 'utils/tailwind/cn';

import { type CardProps } from './types';

export const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      `
        flex flex-col gap-6 rounded-xl border py-6 text-shark-950 shadow-sm
        transition-colors
        dark:border-shark-950 dark:text-white
      `,
      className,
    )}
    data-slot="card"
    {...props}
  />
);

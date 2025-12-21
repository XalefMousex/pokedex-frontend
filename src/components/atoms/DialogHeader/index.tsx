import { cn } from 'utils/tailwind/cn';

import { type DialogHeaderProps } from './types';

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn(
      `
        flex flex-col gap-2 text-center
        sm:text-left
      `,
      className,
    )}
    data-slot="dialog-header"
    {...props}
  />
);

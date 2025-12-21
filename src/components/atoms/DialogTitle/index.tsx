import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type DialogTitleProps } from './types';

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cn(
      `
        text-lg leading-none font-semibold text-shark-950 transition-all
        dark:text-white
      `,
      className,
    )}
    data-slot="dialog-title"
    {...props}
  />
);

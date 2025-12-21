import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type DialogDescriptionProps } from './types';

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    className={cn(
      `
        text-sm text-neutral-500 transition-all
        dark:text-neutral-400
      `,
      className,
    )}
    data-slot="dialog-description"
    {...props}
  />
);

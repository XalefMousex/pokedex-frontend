import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type DialogOverlayProps } from './types';

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className={cn(
      `
        fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:animate-in data-[state=open]:fade-in-0
      `,
      className,
    )}
    data-slot="dialog-overlay"
    {...props}
  />
);

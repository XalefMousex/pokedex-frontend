import { X } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { DialogPortal } from 'components/atoms/DialogPortal';
import { DialogOverlay } from 'components/atoms/DialogOverlay';

import { cn } from 'utils/tailwind/cn';

import { type DialogContentProps } from './types';

export const DialogContent = ({
  children,
  className,
  showCloseButton,
  ...props
}: DialogContentProps) => (
  <DialogPortal data-slot="dialog-portal">
    <DialogOverlay />

    <DialogPrimitive.Content
      className={cn(
        `
          fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)]
          translate-[-50%] gap-4 rounded-lg border bg-white p-6 shadow-lg
          duration-200
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
          sm:max-w-lg
          dark:border-shark-950 dark:bg-shark-950/30
        `,
        className,
      )}
      data-slot="dialog-content"
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          className={`
            absolute top-4 right-4 cursor-pointer rounded-xs opacity-70
            ring-offset-shark-950 transition-opacity
            hover:opacity-100
            focus:ring-1 focus:ring-offset-2 focus:outline-hidden
            disabled:pointer-events-none
            data-[state=open]:bg-gray-300 data-[state=open]:text-shark-950
            [&_svg]:pointer-events-none [&_svg]:shrink-0
            [&_svg:not([class*='size-'])]:size-4
          `}
          data-slot="dialog-close"
        >
          <X />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
);

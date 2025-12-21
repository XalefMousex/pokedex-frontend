import { XIcon } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import { SheetPortal } from 'components/atoms/SheetPortal';
import { SheetOverlay } from 'components/atoms/SheetOverlay';

import { cn } from 'utils/tailwind/cn';

import { type SheetContentProps } from './types';

export const SheetContent = ({
  children,
  className,
  side = 'right',
  hasBlur = true,
  ...props
}: SheetContentProps) => (
  <SheetPortal>
    <SheetOverlay hasBlur={hasBlur} />

    <SheetPrimitive.Content
      className={cn(
        `
          fixed z-50 flex flex-col gap-4 border-gray-200 bg-white text-shark-950
          shadow-lg transition ease-in-out
          data-[state=closed]:animate-out data-[state=closed]:duration-300
          data-[state=open]:animate-in data-[state=open]:duration-500
          dark:border-shark-950 dark:text-white
        `,
        {
          'dark:bg-background-950': !hasBlur,
          'dark:bg-background-950/30': hasBlur,
        },
        side === 'right' &&
          `
            inset-y-0 end-0 h-full w-3/4 border-s
            data-[state=closed]:slide-out-to-end
            data-[state=open]:slide-in-from-end
            sm:max-w-sm
          `,
        side === 'left' &&
          `
            inset-y-0 start-0 h-full w-3/4 border-e
            data-[state=closed]:slide-out-to-start
            data-[state=open]:slide-in-from-start
            sm:max-w-sm
          `,
        side === 'top' &&
          `
            inset-x-0 top-0 h-auto border-b
            data-[state=closed]:slide-out-to-top
            data-[state=open]:slide-in-from-top
          `,
        side === 'bottom' &&
          `
            inset-x-0 bottom-0 h-auto border-t
            data-[state=closed]:slide-out-to-bottom
            data-[state=open]:slide-in-from-bottom
          `,
        className,
      )}
      data-slot="sheet-content"
      {...props}
    >
      {children}

      <SheetPrimitive.Close
        className={`
          absolute end-4 top-4 cursor-pointer rounded-xs opacity-70
          transition-opacity
          hover:opacity-100
          focus:ring-2 focus:ring-offset-2 focus:outline-hidden
          disabled:pointer-events-none
        `}
      >
        <XIcon className="size-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
);

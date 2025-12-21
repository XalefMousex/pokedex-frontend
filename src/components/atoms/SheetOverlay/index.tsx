import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type SheetOverlayProps } from './types';

export const SheetOverlay = ({
  className,
  hasBlur = true,
  ...props
}: SheetOverlayProps) => (
  <SheetPrimitive.Overlay
    className={cn(
      `
        fixed inset-0 z-50 bg-black/80
        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=open]:animate-in data-[state=open]:fade-in-0
      `,
      {
        'backdrop-blur-sm': hasBlur,
      },
      className,
    )}
    data-slot="sheet-overlay"
    {...props}
  />
);

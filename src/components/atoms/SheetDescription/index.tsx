import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type SheetDescriptionProps } from './types';

export const SheetDescription = ({
  className,
  ...props
}: SheetDescriptionProps) => (
  <SheetPrimitive.Description
    className={cn(
      `
        text-sm text-neutral-500 transition-all
        dark:text-neutral-400
      `,
      className,
    )}
    data-slot="sheet-description"
    {...props}
  />
);

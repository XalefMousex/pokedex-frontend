import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from 'utils/tailwind/cn';

import { type SheetTitleProps } from './types';

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => (
  <SheetPrimitive.Title
    className={cn(
      `
        font-semibold text-shark-950 transition-all
        dark:text-white
      `,
      className,
    )}
    data-slot="sheet-title"
    {...props}
  />
);

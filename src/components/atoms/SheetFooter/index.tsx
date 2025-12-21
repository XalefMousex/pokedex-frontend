import { cn } from 'utils/tailwind/cn';

import { type SheetFooterProps } from './types';

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => (
  <div
    data-slot="sheet-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);

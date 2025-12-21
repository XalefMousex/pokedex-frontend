import { cn } from 'utils/tailwind/cn';

import { type SheetHeaderProps } from './types';

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => (
  <div
    data-slot="sheet-header"
    className={cn('flex flex-col gap-1.5 p-4', className)}
    {...props}
  />
);

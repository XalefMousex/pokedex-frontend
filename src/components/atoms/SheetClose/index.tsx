import * as SheetPrimitive from '@radix-ui/react-dialog';

import { type SheetCloseProps } from './types';

export const SheetClose = ({ ...props }: SheetCloseProps) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
);

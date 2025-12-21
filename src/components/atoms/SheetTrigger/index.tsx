import * as SheetPrimitive from '@radix-ui/react-dialog';

import { type SheetTriggerProps } from './types';

export const SheetTrigger = ({ ...props }: SheetTriggerProps) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
);

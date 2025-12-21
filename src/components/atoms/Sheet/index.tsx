import * as SheetPrimitive from '@radix-ui/react-dialog';

import { type SheetProps } from './types';

export const Sheet = ({ ...props }: SheetProps) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

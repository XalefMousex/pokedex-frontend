import * as SheetPrimitive from '@radix-ui/react-dialog';

import { type SheetPortalProps } from './types';

export const SheetPortal = ({ ...props }: SheetPortalProps) => (
  <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
);

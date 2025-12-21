import type * as SheetPrimitive from '@radix-ui/react-dialog';

import { type ComponentProps } from 'react';

export type SheetOverlayProps = {
  hasBlur?: boolean;
} & ComponentProps<typeof SheetPrimitive.Overlay>;

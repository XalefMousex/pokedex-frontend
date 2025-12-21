import type * as SheetPrimitive from '@radix-ui/react-dialog';

import { type ComponentProps } from 'react';

export type SheetContentProps = {
  hasBlur?: boolean;
  side?: 'top' | 'left' | 'right' | 'bottom';
} & ComponentProps<typeof SheetPrimitive.Content>;

import type * as DialogPrimitive from '@radix-ui/react-dialog';

import { type ComponentProps } from 'react';

export type DialogContentProps = {
  showCloseButton?: boolean;
} & ComponentProps<typeof DialogPrimitive.Content>;

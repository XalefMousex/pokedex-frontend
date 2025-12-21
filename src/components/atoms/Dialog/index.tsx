import * as DialogPrimitive from '@radix-ui/react-dialog';

import { type DialogProps } from './types';

export const Dialog = ({ ...props }: DialogProps) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

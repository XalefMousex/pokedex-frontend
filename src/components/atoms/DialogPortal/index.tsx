import * as DialogPrimitive from '@radix-ui/react-dialog';

import { type DialogPortalProps } from './types';

export const DialogPortal = ({ ...props }: DialogPortalProps) => (
  <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
);

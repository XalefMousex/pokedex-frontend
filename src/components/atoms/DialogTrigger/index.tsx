import * as DialogPrimitive from '@radix-ui/react-dialog';

import { type DialogTriggerProps } from './types';

export const DialogTrigger = ({ ...props }: DialogTriggerProps) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
);

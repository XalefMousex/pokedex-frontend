import { type ComponentProps } from 'react';

import { type Dialog } from 'components/atoms/Dialog';

export type CommandDialogProps = {
  title?: string;
  className?: string;
  description?: string;
  showCloseButton?: boolean;
} & ComponentProps<typeof Dialog>;

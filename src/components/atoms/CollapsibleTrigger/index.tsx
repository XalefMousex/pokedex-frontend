import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { cn } from 'utils/tailwind/cn';

import { type CollapsibleTriggerProps } from './types';

export const CollapsibleTrigger = ({
  className,
  ...props
}: CollapsibleTriggerProps) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    data-slot="collapsible-trigger"
    className={cn('cursor-pointer', className)}
    {...props}
  />
);

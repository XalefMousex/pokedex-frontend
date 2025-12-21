import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { cn } from 'utils/tailwind/cn';

import { type CollapsibleContentProps } from './types';

export const CollapsibleContent = ({
  className,
  ...props
}: CollapsibleContentProps) => (
  <CollapsiblePrimitive.CollapsibleContent
    className={cn(
      `
        overflow-hidden
        data-[state="closed"]:animate-collapsible-up
        data-[state="open"]:animate-collapsible-down
      `,
      className,
    )}
    data-slot="collapsible-content"
    {...props}
  />
);

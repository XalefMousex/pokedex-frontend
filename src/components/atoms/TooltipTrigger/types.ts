import type * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { type ComponentProps } from 'react';

export type TooltipTriggerProps = {} & ComponentProps<
  typeof TooltipPrimitive.Trigger
>;

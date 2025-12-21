import type * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { type ComponentProps } from 'react';

import { type Transition } from 'framer-motion';

export type TooltipContentProps = {
  arrow?: boolean;
  transition?: Transition;
} & ComponentProps<typeof TooltipPrimitive.Content>;

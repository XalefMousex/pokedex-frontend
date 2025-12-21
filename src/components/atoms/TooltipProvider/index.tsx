import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { type TooltipProviderProps } from './types';

export const TooltipProvider = ({ ...props }: TooltipProviderProps) => (
  <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />
);

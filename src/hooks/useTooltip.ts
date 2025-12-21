import { use } from 'react';

import {
  TooltipContext,
  type TooltipContextProps,
} from 'contexts/TooltipContext';

export const useTooltip = (): TooltipContextProps => {
  const context = use(TooltipContext);

  if (!context) {
    throw new Error('useTooltip must be used within a Tooltip');
  }

  return context;
};

'use client';

import { createContext } from 'react';

export type TooltipContextProps = {
  isOpen: boolean;
};

export const TooltipContext = createContext<null | TooltipContextProps>(null);

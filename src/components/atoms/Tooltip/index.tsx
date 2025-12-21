'use client';

import { useState, useCallback } from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { TooltipContext } from 'contexts/TooltipContext';

import { type TooltipProps } from './types';

export const Tooltip = ({
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(open ?? defaultOpen ?? false);

  const handleOpenChange = useCallback(
    (currentOpen: boolean) => {
      setIsOpen(currentOpen);
      onOpenChange?.(currentOpen);
    },
    [onOpenChange],
  );

  return (
    <TooltipContext.Provider value={{ isOpen }}>
      <TooltipPrimitive.Root
        data-slot="tooltip"
        {...props}
        onOpenChange={handleOpenChange}
      />
    </TooltipContext.Provider>
  );
};

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from 'utils/tailwind/cn';

import { type ScrollBarProps } from './types';

export const ScrollBar = ({
  className,
  orientation = 'vertical',
  ...props
}: ScrollBarProps) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    className={cn(
      'flex touch-none p-px transition-colors select-none',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent',
      className,
    )}
    orientation={orientation}
    data-slot="scroll-area-scrollbar"
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={`
        relative flex-1 rounded-full bg-gray-200 transition-all
        dark:bg-shark-950
      `}
      data-slot="scroll-area-thumb"
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);

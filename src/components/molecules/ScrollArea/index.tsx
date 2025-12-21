import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { ScrollBar } from 'components/atoms/ScrollBar';

import { cn } from 'utils/tailwind/cn';

import { type ScrollAreaProps } from './types';

export const ScrollArea = ({
  children,
  className,
  orientation = 'vertical',
  ...props
}: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root
    data-slot="scroll-area"
    className={cn('relative', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className={cn(
        `
          size-full rounded-[inherit] transition-[color,box-shadow] outline-none
          focus-visible:ring-[3px] focus-visible:outline-1
        `,
        orientation === 'horizontal' && 'overflow-x-auto!',
      )}
      data-slot="scroll-area-viewport"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>

    <ScrollBar orientation={orientation} />

    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

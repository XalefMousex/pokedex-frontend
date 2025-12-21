import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from 'utils/tailwind/cn';

import { type SeparatorProps } from './types';

export const Separator = ({
  className,
  decorative = true,
  orientation = 'horizontal',
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    className={cn(
      `
        shrink-0 bg-gray-300 transition-all
        data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
        data-[orientation=vertical]:w-px
        dark:bg-shark-950
      `,
      className,
    )}
    data-slot="separator"
    decorative={decorative}
    orientation={orientation}
    {...props}
  />
);

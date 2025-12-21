import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from 'utils/tailwind/cn';

import { type LabelProps } from './types';

export const Label = ({ className, ...props }: LabelProps) => (
  <LabelPrimitive.Root
    className={cn(
      `
        flex items-center gap-2 text-sm leading-none font-medium select-none
        group-data-[disabled=true]:pointer-events-none
        group-data-[disabled=true]:opacity-50
        peer-disabled:cursor-not-allowed peer-disabled:opacity-50
      `,
      className,
    )}
    data-slot="label"
    {...props}
  />
);

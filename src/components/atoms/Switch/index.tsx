'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from 'utils/tailwind/cn';

import { type SwitchProps } from './types';

export const Switch = ({ className, ...props }: SwitchProps) => (
  <SwitchPrimitives.Root
    className={cn(
      `
        peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center
        rounded-full border-2 border-transparent transition-colors
        focus-visible:outline-none
        disabled:cursor-not-allowed disabled:opacity-50
        data-[state=checked]:bg-primary-500
        data-[state=unchecked]:bg-gray-100
        dark:data-[state=unchecked]:bg-shark-950
      `,
      className,
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `
          pointer-events-none block size-5 rounded-full bg-white shadow-lg
          ring-0 transition-transform
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-0
        `,
      )}
    />
  </SwitchPrimitives.Root>
);

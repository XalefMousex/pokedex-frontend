import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from 'utils/tailwind/cn';

import { type AvatarFallbackProps } from './types';

export const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn(
      `
        flex size-full items-center justify-center rounded-full bg-gray-100
        font-semibold text-main transition-all
        dark:bg-shark-950/50
      `,
      className,
    )}
    data-slot="avatar-fallback"
    {...props}
  />
);

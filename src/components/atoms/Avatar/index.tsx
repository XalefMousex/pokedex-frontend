import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from 'utils/tailwind/cn';

import { type AvatarProps } from './types';

export const Avatar = ({ className, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(
      'relative flex size-8 shrink-0 overflow-hidden rounded-full',
      className,
    )}
    data-slot="avatar"
    {...props}
  />
);

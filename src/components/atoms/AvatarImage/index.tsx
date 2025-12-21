import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from 'utils/tailwind/cn';

import { type AvatarImageProps } from './types';

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    className={cn('aspect-square size-full', className)}
    {...props}
  />
);

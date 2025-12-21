import type * as AvatarPrimitive from '@radix-ui/react-avatar';

import { type ComponentProps } from 'react';

export type AvatarFallbackProps = {} & ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

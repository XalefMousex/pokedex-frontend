import type * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { type ComponentProps } from 'react';

export type ScrollAreaProps = {
  orientation?: 'vertical' | 'horizontal';
} & ComponentProps<typeof ScrollAreaPrimitive.Root>;

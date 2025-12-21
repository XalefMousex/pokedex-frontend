import type * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { type ComponentProps } from 'react';

export type ScrollBarProps = {} & ComponentProps<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

import type * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { type ComponentProps } from 'react';

export type CollapsibleContentProps = {} & ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

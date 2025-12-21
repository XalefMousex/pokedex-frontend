import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { type CollapsibleProps } from './types';

export const Collapsible = ({ ...props }: CollapsibleProps) => (
  <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
);

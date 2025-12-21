import { type ComponentProps } from 'react';

import { type Command as CommandPrimitive } from 'cmdk';

export type CommandEmptyProps = {} & ComponentProps<
  typeof CommandPrimitive.Empty
>;

import { type ComponentProps } from 'react';

import { type Command as CommandPrimitive } from 'cmdk';

export type CommandGroupProps = {} & ComponentProps<
  typeof CommandPrimitive.Group
>;

import { type ComponentProps } from 'react';

import { type Command as CommandPrimitive } from 'cmdk';

export type CommandSeparatorProps = {} & ComponentProps<
  typeof CommandPrimitive.Separator
>;

import { type ComponentProps } from 'react';

import { type Command as CommandPrimitive } from 'cmdk';

export type CommandItemProps = {} & ComponentProps<
  typeof CommandPrimitive.Item
>;

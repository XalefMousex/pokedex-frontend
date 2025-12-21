import { type ComponentProps } from 'react';

import { type Command as CommandPrimitive } from 'cmdk';

export type CommandInputProps = {} & ComponentProps<
  typeof CommandPrimitive.Input
>;

import { Command as CommandPrimitive } from 'cmdk';

import { type CommandEmptyProps } from './types';

export const CommandEmpty = ({ ...props }: CommandEmptyProps) => (
  <CommandPrimitive.Empty
    data-slot="command-empty"
    className="py-6 text-center text-sm"
    {...props}
  />
);

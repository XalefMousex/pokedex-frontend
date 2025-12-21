import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandListProps } from './types';

export const CommandList = ({ className, ...props }: CommandListProps) => (
  <CommandPrimitive.List
    className={cn(
      'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
      className,
    )}
    data-slot="command-list"
    {...props}
  />
);

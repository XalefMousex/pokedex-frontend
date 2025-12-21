import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandGroupProps } from './types';

export const CommandGroup = ({ className, ...props }: CommandGroupProps) => (
  <CommandPrimitive.Group
    className={cn(
      `
        overflow-hidden p-1 text-neutral-500 transition-all
        dark:text-neutral-400
        [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5
        [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium
        [&_[cmdk-group-heading]]:text-shark-950
        dark:[&_[cmdk-group-heading]]:text-white
      `,
      className,
    )}
    data-slot="command-group"
    {...props}
  />
);

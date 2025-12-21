import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandSeparatorProps } from './types';

export const CommandSeparator = ({
  className,
  ...props
}: CommandSeparatorProps) => (
  <CommandPrimitive.Separator
    className={cn(
      `
        -mx-1 h-px bg-gray-300 transition-all
        dark:bg-shark-950
      `,
      className,
    )}
    data-slot="command-separator"
    {...props}
  />
);

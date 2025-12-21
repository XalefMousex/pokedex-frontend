import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandProps } from './types';

export const Command = ({ className, ...props }: CommandProps) => (
  <CommandPrimitive
    className={cn(
      `
        flex size-full flex-col overflow-hidden rounded-md text-main
        transition-all
      `,
      className,
    )}
    data-slot="command"
    {...props}
  />
);

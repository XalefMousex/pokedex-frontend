import { SearchIcon } from 'lucide-react';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandInputProps } from './types';

export const CommandInput = ({ className, ...props }: CommandInputProps) => (
  <div
    className={`
      flex h-9 items-center gap-2 border-b px-3 transition-all
      dark:border-shark-950
    `}
    data-slot="command-input-wrapper"
  >
    <SearchIcon className="size-4 shrink-0 opacity-50" />

    <CommandPrimitive.Input
      className={cn(
        `
          flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden
          transition-all
          placeholder:text-neutral-500
          disabled:cursor-not-allowed disabled:opacity-50
          dark:placeholder:text-neutral-400
        `,
        className,
      )}
      data-slot="command-input"
      {...props}
    />
  </div>
);

import { Command as CommandPrimitive } from 'cmdk';

import { cn } from 'utils/tailwind/cn';

import { type CommandItemProps } from './types';

export const CommandItem = ({ className, ...props }: CommandItemProps) => (
  <CommandPrimitive.Item
    className={cn(
      `
        relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5
        text-sm outline-hidden select-none
        data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50
        data-[selected=true]:bg-gray-100 data-[selected=true]:text-shark-950
        dark:data-[selected=true]:bg-shark-950
        dark:data-[selected=true]:text-white
        [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-4
        [&_svg:not([class*='text-'])]:text-neutral-500
        dark:[&_svg:not([class*='text-'])]:text-neutral-400
      `,
      className,
    )}
    data-slot="command-item"
    {...props}
  />
);

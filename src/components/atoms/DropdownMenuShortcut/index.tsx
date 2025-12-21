import { cn } from 'utils/tailwind/cn';

import { type DropdownMenuShortcutProps } from './types';

export const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => (
  <span
    className={cn(
      `
        ms-auto text-xs tracking-widest text-neutral-500 transition-all
        dark:text-neutral-400
      `,
      className,
    )}
    data-slot="dropdown-menu-shortcut"
    {...props}
  />
);

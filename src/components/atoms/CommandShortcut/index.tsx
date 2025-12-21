import { cn } from 'utils/tailwind/cn';

import { type CommandShortcutProps } from './types';

export const CommandShortcut = ({
  className,
  ...props
}: CommandShortcutProps) => (
  <span
    className={cn(
      `
        ms-auto text-xs tracking-widest text-neutral-500 transition-all
        dark:text-neutral-400
      `,
      className,
    )}
    data-slot="command-shortcut"
    {...props}
  />
);

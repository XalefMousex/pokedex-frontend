import { Dialog } from 'components/atoms/Dialog';
import { Command } from 'components/atoms/Command';
import { DialogTitle } from 'components/atoms/DialogTitle';
import { DialogHeader } from 'components/atoms/DialogHeader';
import { DialogContent } from 'components/atoms/DialogContent';
import { DialogDescription } from 'components/atoms/DialogDescription';

import { cn } from 'utils/tailwind/cn';

import { type CommandDialogProps } from './types';

export const CommandDialog = ({
  children,
  className,
  showCloseButton = true,
  title = 'Command Palette',
  description = 'Search for a command to run...',
  ...props
}: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogHeader className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>

    <DialogContent
      showCloseButton={showCloseButton}
      className={cn('overflow-hidden p-0', className)}
    >
      <Command
        className={`
          **:data-[slot=command-input-wrapper]:h-12
          [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium
          [&_[cmdk-group-heading]]:text-shark-950
          dark:[&_[cmdk-group-heading]]:text-white
          [&_[cmdk-group]]:px-2
          [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0
          [&_[cmdk-input-wrapper]_svg]:size-5
          [&_[cmdk-input]]:h-12
          [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3
          [&_[cmdk-item]_svg]:size-5
        `}
      >
        {children}
      </Command>
    </DialogContent>
  </Dialog>
);

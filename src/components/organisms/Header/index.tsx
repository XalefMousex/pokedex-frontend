import { Separator } from 'components/atoms/Separator';
import { SidebarTrigger } from 'components/atoms/SidebarTrigger';

import { cn } from 'utils/tailwind/cn';

import { type HeaderProps } from './types';

export const Header = ({
  fixed,
  children,
  className,
  ...props
}: HeaderProps) => (
  <header
    className={cn(
      'z-50 h-16',
      {
        'peer/header sticky top-0 w-[inherit]': fixed,
      },
      className,
    )}
    {...props}
  >
    <div
      className={cn(
        `
          relative flex h-full items-center gap-3 p-4
          sm:gap-4
        `,
      )}
    >
      <SidebarTrigger variant="outline" />

      <Separator className="h-6" orientation="vertical" />

      {children}
    </div>
  </header>
);

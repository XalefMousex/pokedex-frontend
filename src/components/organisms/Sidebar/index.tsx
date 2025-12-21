import { type CSSProperties } from 'react';

import { useSidebarStore } from 'stores/useSidebarStore';

import { Sheet } from 'components/atoms/Sheet';
import { SheetTitle } from 'components/atoms/SheetTitle';
import { SheetHeader } from 'components/atoms/SheetHeader';
import { SheetContent } from 'components/atoms/SheetContent';
import { SheetDescription } from 'components/atoms/SheetDescription';

import { cn } from 'utils/tailwind/cn';

import { SIDEBAR_WIDTH_MOBILE } from 'constants/sidebar';

import { type SidebarProps } from './types';

export const Sidebar = ({
  children,
  className,
  side = 'left',
  variant = 'sidebar',
  collapsible = 'icon',
  ...props
}: SidebarProps) => {
  const { state, isMobile, isOpenMobile, setIsOpenMobile } = useSidebarStore();

  if (collapsible === 'none') {
    return (
      <div
        className={cn(
          `
            flex h-full w-(--sidebar-width) flex-col text-shark-950
            transition-all
            dark:text-white
          `,
          className,
        )}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={isOpenMobile} onOpenChange={setIsOpenMobile} {...props}>
        <SheetContent
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
          className={`
            w-(--sidebar-width) p-0 text-shark-950
            dark:text-white
            [&>button]:hidden
          `}
          side={side}
          data-mobile="true"
          data-slot="sidebar"
          data-sidebar="sidebar"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>

          <div className="flex size-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={`
        group peer hidden text-shark-950 transition-all
        md:block
        dark:text-white
      `}
      data-side={side}
      data-state={state}
      data-slot="sidebar"
      data-variant={variant}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
    >
      <div
        className={cn(
          `
            relative w-(--sidebar-width) bg-transparent transition-[width]
            duration-200 ease-linear
          `,
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          {
            'group-data-[collapsible=icon]:w-(--sidebar-width-icon)':
              variant === 'sidebar',
            'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]':
              variant === 'floating' || variant === 'inset',
          },
        )}
        data-slot="sidebar-gap"
      />

      <div
        className={cn(
          `
            fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width)
            transition-[inset-inline,width] duration-200 ease-linear
            md:flex
          `,
          {
            'end-0 group-data-[collapsible=offcanvas]:-end-[calc(var(--sidebar-width))]':
              side === 'right',
            'start-0 group-data-[collapsible=offcanvas]:-start-[calc(var(--sidebar-width))]':
              side === 'left',
          },
          {
            'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]':
              variant === 'floating' || variant === 'inset',
            'border-gray-200 group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s dark:border-shark-950':
              variant === 'sidebar',
          },
          className,
        )}
        data-slot="sidebar-container"
        {...props}
      >
        <div
          className={`
            flex size-full flex-col
            group-data-[variant=floating]:rounded-lg
            group-data-[variant=floating]:border
            group-data-[variant=floating]:border-gray-200
            group-data-[variant=floating]:shadow-sm
            dark:group-data-[variant=floating]:border-shark-950
          `}
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

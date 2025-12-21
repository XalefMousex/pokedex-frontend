'use client';

import { useSidebarStore } from 'stores/useSidebarStore';

import { cn } from 'utils/tailwind/cn';

import { type SidebarRailProps } from './types';

export const SidebarRail = ({ className, ...props }: SidebarRailProps) => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <button
      className={cn(
        `
          absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all
          ease-linear
          group-data-[side=left]:-end-4
          group-data-[side=right]:start-0
          after:absolute after:inset-y-0 after:start-1/2 after:w-[2px]
          hover:after:bg-gray-200
          sm:flex
          dark:hover:after:bg-shark-900
        `,
        `
          in-data-[side=left]:cursor-w-resize
          in-data-[side=right]:cursor-e-resize
        `,
        `
          [[data-side=left][data-state=collapsed]_&]:cursor-e-resize
          [[data-side=right][data-state=collapsed]_&]:cursor-w-resize
        `,
        `
          group-data-[collapsible=offcanvas]:translate-x-0
          group-data-[collapsible=offcanvas]:after:start-full
          hover:group-data-[collapsible=offcanvas]:bg-gray-300
          dark:hover:group-data-[collapsible=offcanvas]:bg-shark-900
        `,
        '[[data-side=left][data-collapsible=offcanvas]_&]:-end-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-start-2',

        // RTL support
        'rtl:translate-x-1/2',
        `
          rtl:in-data-[side=left]:cursor-e-resize
          rtl:in-data-[side=right]:cursor-w-resize
        `,
        `
          rtl:[[data-side=left][data-state=collapsed]_&]:cursor-w-resize
          rtl:[[data-side=right][data-state=collapsed]_&]:cursor-e-resize
        `,
        className,
      )}
      type="button"
      tabIndex={-1}
      data-sidebar="rail"
      title="Toggle Sidebar"
      onClick={toggleSidebar}
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      {...props}
    />
  );
};

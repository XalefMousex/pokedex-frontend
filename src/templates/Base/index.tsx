import { type CSSProperties } from 'react';

import { NavUser } from 'components/molecules/NavUser';
import { AppTitle } from 'components/molecules/AppTitle';
import { SidebarRail } from 'components/atoms/SidebarRail';
import { NavGroups } from 'components/organisms/NavGroups';
import { SidebarInset } from 'components/atoms/SidebarInset';
import { AppSidebar } from 'components/organisms/AppSidebar';
import { SidebarHeader } from 'components/atoms/SidebarHeader';
import { SidebarFooter } from 'components/atoms/SidebarFooter';
import { SidebarContent } from 'components/atoms/SidebarContent';
import { CommandSearch } from 'components/organisms/CommandSearch';

import { cn } from 'utils/tailwind/cn';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from 'constants/sidebar';

import { type BaseProps } from './types';

export const Base = async ({
  style,
  children,
  className,
  ...props
}: BaseProps) => (
  <div
    style={
      {
        '--sidebar-width': SIDEBAR_WIDTH,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
        ...style,
      } as CSSProperties
    }
    className={cn(
      `
        group/sidebar-wrapper flex min-h-svh w-full bg-white transition-colors
        dark:bg-background-950
      `,
      className,
    )}
    data-slot="sidebar-wrapper"
    {...props}
  >
    <AppSidebar>
      <SidebarHeader>
        <AppTitle />
      </SidebarHeader>

      <SidebarContent>
        <NavGroups />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </AppSidebar>

    <SidebarInset
      className={`
        @container/content
        has-data-[layout=fixed]:h-svh
        peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]
      `}
    >
      {children}

      <CommandSearch />
    </SidebarInset>
  </div>
);

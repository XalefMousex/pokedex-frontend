'use client';

import { useState } from 'react';

import { Plus, ChevronsUpDown } from 'lucide-react';

import { useSidebarStore } from 'stores/useSidebarStore';

import { SidebarMenu } from 'components/atoms/SidebarMenu';
import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { SidebarMenuItem } from 'components/atoms/SidebarMenuItem';
import { DropdownMenuItem } from 'components/atoms/DropdownMenuItem';
import { DropdownMenuLabel } from 'components/atoms/DropdownMenuLabel';
import { SidebarMenuButton } from 'components/atoms/SidebarMenuButton';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';
import { DropdownMenuShortcut } from 'components/atoms/DropdownMenuShortcut';
import { DropdownMenuSeparator } from 'components/atoms/DropdownMenuSeparator';

import { sidebar } from 'constants/sidebar';

import { type TeamSwitcherProps } from './types';

const { teams } = sidebar;

export const TeamSwitcher = ({ ...props }: TeamSwitcherProps) => {
  const { isMobile } = useSidebarStore();

  const [activeTeam, setActiveTeam] = useState(teams[0]);

  return (
    <SidebarMenu {...props}>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className={`
                data-[state=open]:bg-gray-100 data-[state=open]:text-shark-950
                dark:data-[state=open]:bg-shark-950
                dark:data-[state=open]:text-white
              `}
              size="large"
            >
              <div
                className={`
                  flex aspect-square size-8 items-center justify-center
                  rounded-lg border border-gray-300 shadow-xs
                  dark:border-shark-950 dark:group-hover:border-shark-900
                `}
              >
                <activeTeam.logo className="size-4" />
              </div>

              <div className="grid flex-1 text-start text-sm leading-tight">
                <span
                  className={`
                    truncate font-semibold text-shark-950 transition-all
                    dark:text-white
                  `}
                >
                  {activeTeam.name}
                </span>

                <span
                  className={`
                    truncate text-xs text-neutral-500 transition-all
                    dark:text-neutral-400
                  `}
                >
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className="ms-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={`
              w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg
            `}
            align="start"
            sideOffset={10}
            side={isMobile ? 'bottom' : 'right'}
            hasArrow
          >
            <DropdownMenuLabel
              className={`
                text-xs text-neutral-500 transition-all
                dark:text-neutral-400
              `}
            >
              Teams
            </DropdownMenuLabel>

            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                className="group gap-2 p-2"
                onClick={() => setActiveTeam(team)}
              >
                <div
                  className={`
                    flex size-7 items-center justify-center rounded-sm border
                    border-gray-300 shadow-xs transition-all
                    dark:border-shark-950 dark:group-hover:border-shark-900
                  `}
                >
                  <team.logo className="size-4 shrink-0" />
                </div>
                {team.name}

                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem className="group gap-2 p-2">
              <div
                className={`
                  flex size-7 items-center justify-center rounded-md border
                  border-gray-300 shadow-xs transition-all
                  dark:border-shark-950 dark:group-hover:border-shark-900
                `}
              >
                <Plus className="size-4" />
              </div>

              <div
                className={`
                  font-medium text-shark-950 transition-all
                  dark:text-white
                `}
              >
                Add team
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

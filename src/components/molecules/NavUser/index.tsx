import { headers } from 'next/headers';

import { LogOut, ChevronsUpDown } from 'lucide-react';

import { Avatar } from 'components/atoms/Avatar';
import { SidebarMenu } from 'components/atoms/SidebarMenu';
import { AvatarImage } from 'components/atoms/AvatarImage';
import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { SignOutButton } from 'components/atoms/SignOutButton';
import { AvatarFallback } from 'components/atoms/AvatarFallback';
import { SidebarMenuItem } from 'components/atoms/SidebarMenuItem';
import { SidebarMenuButton } from 'components/atoms/SidebarMenuButton';
import { DropdownMenuLabel } from 'components/atoms/DropdownMenuLabel';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';
import { DropdownMenuSeparator } from 'components/atoms/DropdownMenuSeparator';

import { getSession } from 'lib/auth';

import { type NavUserProps } from './types';

export const NavUser = async ({ ...props }: NavUserProps) => {
  const { data } = await getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  const user = data?.user;

  const initials =
    user?.name
      ?.split(' ')
      .map(name => name[0])
      .join('') || 'UN';

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
              <Avatar className="size-8">
                <AvatarImage alt="Avatar" src={user?.image ?? ''} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>

              <div className="grid flex-1 text-start text-sm leading-tight">
                <span
                  className={`
                    truncate font-semibold text-shark-950 transition-all
                    dark:text-white
                  `}
                >
                  {user?.name}
                </span>

                <span
                  className={`
                    truncate text-xs text-neutral-500 transition-all
                    dark:text-neutral-400
                  `}
                >
                  {user?.email}
                </span>
              </div>

              <ChevronsUpDown className="ms-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={`
              w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg
            `}
            align="end"
            sideOffset={10}
            hasArrow
            isDynamicSide
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div
                className={`
                  flex items-center gap-2 px-1 py-1.5 text-start text-sm
                `}
              >
                <Avatar className="size-8">
                  <AvatarImage alt="Avatar" src={user?.image ?? ''} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span
                    className={`
                      truncate font-semibold text-shark-950 transition-all
                      dark:text-white
                    `}
                  >
                    {user?.name}
                  </span>

                  <span
                    className={`
                      truncate text-xs text-neutral-500 transition-all
                      dark:text-neutral-400
                    `}
                  >
                    {user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <SignOutButton icon={<LogOut />} />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

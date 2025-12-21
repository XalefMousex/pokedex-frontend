import { headers } from 'next/headers';

import { Avatar } from 'components/atoms/Avatar';
import { AvatarImage } from 'components/atoms/AvatarImage';
import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { SignOutButton } from 'components/atoms/SignOutButton';
import { AvatarFallback } from 'components/atoms/AvatarFallback';
import { DropdownMenuLabel } from 'components/atoms/DropdownMenuLabel';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';
import { DropdownMenuSeparator } from 'components/atoms/DropdownMenuSeparator';

import { getSession } from 'lib/auth';

import { type ProfileDropdownProps } from './types';

export const ProfileDropdown = async ({ ...props }: ProfileDropdownProps) => {
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
    <DropdownMenu modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10">
          <AvatarImage alt="Avatar" src={user?.image ?? ''} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56"
        hasArrow
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-1.5">
            <p
              className={`
                text-sm leading-none font-medium text-shark-950 transition-all
                dark:text-white
              `}
            >
              {user?.name}
            </p>

            <p
              className={`
                text-xs leading-none text-neutral-500 transition-all
                dark:text-neutral-400
              `}
            >
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <SignOutButton shortcut="⇧⌘Q" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

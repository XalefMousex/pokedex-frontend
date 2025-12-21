import Link from 'next/link';

import clsx from 'clsx';
import { Menu } from 'lucide-react';

import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { DropdownMenuItem } from 'components/atoms/DropdownMenuItem';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';

import { cn } from 'utils/tailwind/cn';

import { type TopNavProps } from './types';

export const TopNav = ({ links, className, ...props }: TopNavProps) => (
  <>
    <div className="lg:hidden">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <SimpleButton size="icon" variant="outline" className={`size-8`}>
            <Menu />
          </SimpleButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="bottom"
          align="start"
          sideOffset={8}
          hasArrow
        >
          {links.map(({ href, title, isActive }) => (
            <DropdownMenuItem key={`${title}-${href}`} asChild>
              <Link
                // disabled={isDisabled}
                className={clsx({
                  'text-shark-950 dark:text-white': isActive,
                  'text-neutral-500 dark:text-neutral-400': !isActive,
                })}
                href={href}
              >
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <nav
      className={cn(
        `
          hidden items-center space-x-4
          lg:flex lg:space-x-4
          xl:space-x-6
        `,
        className,
      )}
      {...props}
    >
      {links.map(({ href, title, isActive }) => (
        <Link
          className={clsx(`text-sm font-medium transition-colors`, {
            'text-shark-950 dark:text-white': isActive,
            'text-neutral-500 hover:text-shark-950 dark:text-neutral-400 hover:dark:text-white':
              !isActive,
          })}
          href={href}
          // disabled={isDisabled}
          key={`${title}-${href}`}
        >
          {title}
        </Link>
      ))}
    </nav>
  </>
);

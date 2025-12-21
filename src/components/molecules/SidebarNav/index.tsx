'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ScrollArea } from 'components/molecules/ScrollArea';
import { simpleButtonVariants } from 'components/atoms/SimpleButton';

import { cn } from 'utils/tailwind/cn';
import { stripLocale } from 'utils/i18n/stripLocale';

import { settings } from 'constants/settings';

import { type SidebarNavProps } from './types';

export const SidebarNav = ({ className, ...props }: SidebarNavProps) => {
  const pathname = usePathname();

  const stripPathname = stripLocale(pathname);

  return (
    <>
      <div
        className={`
          p-1
          md:hidden
        `}
      />

      <ScrollArea
        className={`
          hidden w-full min-w-40 px-1 py-2
          md:block
        `}
        type="always"
        orientation="horizontal"
      >
        <nav
          className={cn(
            `
              flex space-x-2 py-1
              lg:flex-col lg:space-y-1 lg:space-x-0
            `,
            className,
          )}
          {...props}
        >
          {settings.map(item => {
            const Icon = item.icon;

            return (
              <Link
                className={cn(
                  simpleButtonVariants({ variant: 'ghost' }),
                  'justify-start',
                  {
                    'bg-gray-100 transition-all dark:bg-shark-950':
                      stripPathname === item.href,
                  },
                )}
                key={item.href}
                href={item.href}
              >
                <span className="me-2">{Icon && <Icon />}</span>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </>
  );
};

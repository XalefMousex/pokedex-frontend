import Link from 'next/link';

import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

import { NavBadge } from 'components/atoms/NavBadge';
import { DropdownMenu } from 'components/atoms/DropdownMenu';
import { checkIsActive } from 'components/atoms/SidebarMenuLink';
import { SidebarMenuItem } from 'components/atoms/SidebarMenuItem';
import { DropdownMenuItem } from 'components/atoms/DropdownMenuItem';
import { SidebarMenuButton } from 'components/atoms/SidebarMenuButton';
import { DropdownMenuLabel } from 'components/atoms/DropdownMenuLabel';
import { DropdownMenuTrigger } from 'components/atoms/DropdownMenuTrigger';
import { DropdownMenuContent } from 'components/atoms/DropdownMenuContent';
import { DropdownMenuSeparator } from 'components/atoms/DropdownMenuSeparator';

import { type SidebarMenuCollapsedDropdownProps } from './types';

export const SidebarMenuCollapsedDropdown = ({
  item,
  href,
}: SidebarMenuCollapsedDropdownProps) => (
  <SidebarMenuItem>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          tooltip={item.title}
          isActive={checkIsActive(href, item)}
        >
          {item.icon && <item.icon />}

          <span>{item.title}</span>

          {item.badge && <NavBadge>{item.badge}</NavBadge>}

          <ChevronRight
            className={`
              ms-auto transition-transform duration-200
              group-data-[state=open]/collapsible:rotate-90
            `}
          />
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="right" align="start" sideOffset={10} hasArrow>
        <DropdownMenuLabel>
          {item.title} {item.badge ? `(${item.badge})` : ''}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        {item?.items?.map(sub => (
          <DropdownMenuItem key={`${sub.title}-${sub.url}`} asChild>
            <Link
              className={clsx({
                'bg-gray-100 text-primary-500 dark:bg-shark-950/50 dark:text-primary-500':
                  checkIsActive(href, sub),
              })}
              href={sub.url ?? ''}
            >
              {sub.icon && <sub.icon />}

              <span className="max-w-52 text-wrap">{sub.title}</span>

              {sub.badge && (
                <span className="ms-auto text-xs">{sub.badge}</span>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
);

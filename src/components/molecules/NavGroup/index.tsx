'use client';

import { usePathname } from 'next/navigation';

import { useSidebarStore } from 'stores/useSidebarStore';

import { SidebarMenu } from 'components/atoms/SidebarMenu';
import { SidebarGroup } from 'components/atoms/SidebarGroup';
import { SidebarMenuLink } from 'components/atoms/SidebarMenuLink';
import { SidebarGroupLabel } from 'components/atoms/SidebarGroupLabel';
import { SidebarMenuCollapsible } from 'components/molecules/SidebarMenuCollapsible';
import { SidebarMenuCollapsedDropdown } from 'components/molecules/SidebarMenuCollapsedDropdown';

import { stripLocale } from 'utils/i18n/stripLocale';

import { type NavGroupProps } from './types';

export const NavGroup = ({ title, items }: NavGroupProps) => {
  const { state, isMobile } = useSidebarStore();

  const pathname = usePathname();

  const strippedPathname = stripLocale(pathname);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map(item => {
          const key = `${item.title}-${item.url}`;

          if (!item.items) {
            return (
              <SidebarMenuLink key={key} item={item} href={strippedPathname} />
            );
          }

          if (state === 'collapsed' && !isMobile) {
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={item}
                href={strippedPathname}
              />
            );
          }

          return (
            <SidebarMenuCollapsible
              key={key}
              item={item}
              href={strippedPathname}
            />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

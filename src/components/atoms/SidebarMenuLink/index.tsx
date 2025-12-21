import Link from 'next/link';

import { type UrlObject } from 'url';
import { type NavItemProps } from 'types/sidebar';

import { useSidebarStore } from 'stores/useSidebarStore';

import { NavBadge } from 'components/atoms/NavBadge';
import { SidebarMenuItem } from 'components/atoms/SidebarMenuItem';
import { SidebarMenuButton } from 'components/atoms/SidebarMenuButton';

import { type SidebarMenuLinkProps } from './types';

const hrefToString = (href: string | UrlObject): string => {
  if (typeof href === 'string') {
    return href;
  }

  return href.pathname ?? '';
};

export const checkIsActive = (
  href: string,
  item: NavItemProps,
  mainNav = false,
) => {
  const hrefString = hrefToString(href);
  const itemUrlString = item.url ? hrefToString(item.url) : '';

  return (
    hrefString === itemUrlString ||
    hrefString.split('?')[0] === itemUrlString ||
    !!item?.items?.filter(sub => hrefToString(sub?.url ?? '') === hrefString)
      .length ||
    (mainNav &&
      hrefString.split('/')[1] !== '' &&
      hrefString.split('/')[1] === itemUrlString.split('/')[1])
  );
};

export const SidebarMenuLink = ({ item, href }: SidebarMenuLinkProps) => {
  const { setIsOpenMobile } = useSidebarStore();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        isActive={checkIsActive(href, item)}
        asChild
      >
        <Link href={item?.url ?? ''} onClick={() => setIsOpenMobile(false)}>
          {item.icon && <item.icon />}

          <span>{item.title}</span>

          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
